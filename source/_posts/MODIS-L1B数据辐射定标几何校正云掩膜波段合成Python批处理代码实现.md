---
title: MODIS L1B数据辐射定标几何校正云掩膜波段合成Python批处理代码实现
tags: Python卫星数据处理
description: 本文利用Python面向对象编程对MODIS L1B数据进行辐射定标，几何校正，云掩膜以及波段合成等批量数据处理过程。
cover: >-
  https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/modis_radiometric_geometric_correction/birthday.jpg
categories: 程序代码
abbrlink: 58b02e48
date: 2023-03-10 22:24:44
---
- 本程序主要是对MODIS L1B数据进行辐射定标，几何校正、云掩膜以及波段合成等处理过程；
- 本程序利用Python面向对象编程实现；
- 输入路径中需要将MOD02/MYD02一级产品数据和MOD35/MYD35云掩膜产品数据对应时间位置放入同一路经中。
- 完整代码已上传至GitHub上：
[MODIS_Radiometric_Geometric_Correction_CloudMask](https://github.com/guojx0820/MODIS_Radiometric_Geometric_Correction_CloudMask)
# MODIS L1B数据波段介绍

以下为MODIS数据36个波段介绍：
- MODIS波段介绍

|波段号 |主要应用 |分辨率(m)  |波段范围(μm) |中心波长|信噪比|
|:----:|:----:|:----:|:----:|:----:|:----:|
|1| 植被叶绿素吸收 |250  |0.620-0.670|0.645 |128        |
|2| 云和植被覆盖变换 |250   |0.841-0.876|0.865 |201      |
|3|土壤植被差异 |500  |0.459-0.479|0.466 |243          |
|4|绿色植被 |500 |0.545-0.565|0.554 |228             |
|5|叶面/树冠差异 |500 |1.230-0-1.250|1.242  |74        |
|6|雪/云差异 |500 |1.628-1.652|1.629  |275           |
|7|陆地和云的性质 |500 |2.105-2.155|2.114 |110          |
|8|叶绿素 |1000 |0.405-0.420|0.412 |880             |
|9|叶绿素 |1000 |0.438-0.448|0.442 |838             |
|10| 叶绿素  |1000 |0.483-0.493|0.487 |802          |
|11| 叶绿素 |1000 |0.526-0.536|0.530 |754           |
|12| 沉淀物 |1000 |0.546-0.556|0.547 |750           |
|13| 沉淀物，大气层 |1000 |0.662-0.672|0.666 |910       |
|14| 叶绿素荧光 |1000 |0.673-0.683|0.677 |1087        |
|15| 气溶胶性质 |1000 |0.743-0.753|0.747 |586         |
|16| 气溶胶/大气层性质 |1000 |0.862-0.877|0.866 |516     |
|17| 云/大气层性质 |1000 |0.890-0.920|0.904 |167       |
|18|    云/大气层性质 |1000 |0.931-0.941|0.936 |57     |
|19|   云/大气层性质 |1000 |0.915-0.965|0.935 |250     |
|20|  洋面温度 |1000  |3.660-3.840|3.785 |0.05       |
|21|  森林火灾/火山 |1000  |3.929-3.989|3.992 |2       |
|22|  云/地表温度 |1000  |3.929-3.989|3.971 |0.07     |
|23|   云/地表温度  |1000   |4.020-4.080|4.056 |0.07  |
|24|  对流层温度/云片 |1000 |4.433-4.498|4.473 |0.25    |
|25|  对流层温度/云片 |1000 |4.482-4.549|4.545 |0.25    |
|26|  红外云探测 |1000 |1.360-1.390|1.382 |150        |
|27|  对流层中层湿度 |1000 |6.535-6.895|6.766 |0.25     |
|28|  对流层中层湿度 |1000  |7.175-7.475|7.338 |0.25    |
|29|  表面温度 |1000  |8.400-8.700|8.523 |0.05       |
|30|  臭氧总量 |1000 |9.580-9.880|9.730 |0.25        |
|31|  云/表面温度 |1000 |10.780-11.280|11.010 |0.05   |
|32|  云高和表面温度 |1000 |11.770-12.270|12.026 |0.05  |
|33|  云高和云片 |1000 |13.185-13.485|13.363 |0.25    |
|34| 云高和云片 |1000 |13.485-13.785|13.681 |0.25     |
|35| 云高和云片 |1000 |13.785-14.085|13.910 |0.25     |
|36| 云高和云片 |1000 |14.085-14.385|14.193 |0.35     |

# Python面向对象编程
Python面向对象编程与C++类似，主要以类class内方法的实现与互相调用，参数全局化以及实例化对象等内容。以下为类的初始化参数：
```python
class MODIS_Radiometric_Geometric_Correction:
    def __init__(self, l1b_file, cloud_file, out_name):
        self.l1b_file = l1b_file
        self.cloud_file = cloud_file
        self.out_name = out_name
        self.geo_resolution = 0.01
```
# MODIS HDF4数据读取
以下是MODIS L1B HDF4数据读取，从底层实现的类中方法：
```python
def _read_modis_data_(self):
        modis_l1b = SD(self.l1b_file)
        modis_cloud = SD(self.cloud_file)
        qkm_rad = self._radical_calibration_(modis_l1b, 'EV_250_Aggr1km_RefSB', 'radiance_scales',
                                             'radiance_offsets')
        hkm_rad = self._radical_calibration_(modis_l1b, 'EV_500_Aggr1km_RefSB', 'radiance_scales',
                                             'radiance_offsets')
        cloud_data = modis_cloud.select('Cloud_Mask').get()
        lon = modis_l1b.select('Longitude').get()
        lat = modis_l1b.select('Latitude').get()
        return qkm_rad, hkm_rad, cloud_data, lon, lat
```
# 辐射定标
读取HDF4数据集中的对象参数，这里的辐射定标是将DN值转化为辐射亮度，也可以转为反射率，只是偏移（offsets）和增益（scales）值不一样，可以在HDF4数据集中找到属性值。
```python
def _radical_calibration_(self, modis_l1b, dataset_name, scales, offsets):
        object = modis_l1b.select(dataset_name)
        data = object.get()
        scales = object.attributes()[scales]
        offsets = object.attributes()[offsets]
        data_rad = np.zeros((data.shape[0], data.shape[1], data.shape[2]), dtype=np.float64)
        for i_layer in range(data.shape[0]):
            data_rad[i_layer, :, :] = scales[i_layer] * (data[i_layer, :, :] - offsets[i_layer])
        return data_rad
```
# 云掩膜
云掩膜主要是利用MODIS的云掩膜产品MOD35进行处理，将二进制值转化为0，1的二值对L1B图像进行掩膜。
```python
def _cloud_mask_(self, cloud_data):
        cloud_0 = cloud_data[0, :, :]
        cloud_0 = (np.int64(cloud_0 < 0) * (256 + cloud_0)) + (np.int64(cloud_0 >= 0) * cloud_0)
        cloud_binary = np.zeros((cloud_0.shape[0], cloud_0.shape[1], 8), dtype=np.int64)
        for i_cloud in range(8):
            cloud_binary[:, :, i_cloud] = cloud_0 % 2
            cloud_0 //= 2
        clear_result = np.int64(cloud_binary[:, :, 0] == 1) & np.int64(cloud_binary[:, :, 1] == 1) \
                       & np.int64(cloud_binary[:, :, 2] == 1)
        ocean_result = np.int64(cloud_binary[:, :, 6] == 0) & np.int64(cloud_binary[:, :, 7] == 0)
        cloud_result = np.int64(clear_result == 0) | np.int64(ocean_result == 0)
        return clear_result
```
# 几何校正
几何校正主要利用读取的经纬度信息，将像元归位，放到其原有的地理位置。
```python
def _georeference_(self, lon, lat, data):
        lon_interp = cv.resize(lon, (data.shape[1], data.shape[0]), interpolation=cv.INTER_LINEAR)
        lat_interp = cv.resize(lat, (data.shape[1], data.shape[0]), interpolation=cv.INTER_LINEAR)
        lon_min = np.min(lon_interp)
        lon_max = np.max(lon_interp)
        lat_min = np.min(lat_interp)
        lat_max = np.max(lat_interp)

        geo_box_col = np.int64(np.ceil((lon_max - lon_min) / self.geo_resolution))
        geo_box_row = np.int64(np.ceil((lat_max - lat_min) / self.geo_resolution))
        geo_box = np.zeros((geo_box_row, geo_box_col), dtype=np.float64)
        geo_box_col_pos = np.int64(np.floor((lon_interp - lon_min) / self.geo_resolution))
        geo_box_row_pos = np.int64(np.floor((lat_max - lat_interp) / self.geo_resolution))
        geo_box[geo_box_row_pos, geo_box_col_pos] = data

        return geo_box, lon_min, lat_max
```
# 均值平滑像元填补
由于几何纠正之后影像上会有大量像元值空缺，所以利用窗口均值平滑的方法尽可能进行填补，以确保图像部分连续。
```python
def _average_filtering_(self, geo_box):
        geo_box_plus = np.zeros((geo_box.shape[0] + 2, geo_box.shape[1] + 2), dtype=np.float64) - 9999.0
        geo_box_plus[1:geo_box.shape[0] + 1, 1:geo_box.shape[1] + 1] = geo_box
        geo_box_out = np.zeros((geo_box.shape[0], geo_box.shape[1]), dtype=np.float64)
        for i_geo_box_row in range(1, geo_box.shape[0] + 1):
            for i_geo_box_col in range(1, geo_box.shape[1] + 1):
                if geo_box_plus[i_geo_box_row, i_geo_box_col] == 0.0:
                    temp_window = geo_box_plus[i_geo_box_row - 1:i_geo_box_row + 2,
                                  i_geo_box_col - 1:i_geo_box_col + 2]
                    temp_window = temp_window[temp_window > 0]
                    temp_window_sum = np.sum(temp_window)
                    temp_window_num = np.sum(np.int64(temp_window > 0.0))
                    if temp_window_num > 3:
                        geo_box_out[i_geo_box_row - 1, i_geo_box_col - 1] = temp_window_sum / temp_window_num
                    else:
                        geo_box_out[i_geo_box_row - 1, i_geo_box_col - 1] = 0.0
                else:
                    geo_box_out[i_geo_box_row - 1, i_geo_box_col - 1] = geo_box_plus[
                        i_geo_box_row, i_geo_box_col]
        return geo_box_out
```
# B、G、R和NIR波段提取
分别将MODIS上述波段1，2，3，4分别对应红（R），近红外（NIR），蓝（B），绿（G）四个波段提取出来并按照B、G、R、NIR的顺序排列，并储存在一个数组中。
```python
def _band_extract_(self, lon, lat, qkm_rad, hkm_rad, clear_result):
        blue_band = hkm_rad[0] * clear_result
        green_band = hkm_rad[1] * clear_result
        red_band = qkm_rad[0] * clear_result
        nir_band = qkm_rad[1] * clear_result
        com_bands = np.array([blue_band, green_band, red_band, nir_band])
        band_list = []
        for i_band in com_bands:
            geo_band, lon_min, lat_max = self._georeference_(lon, lat, i_band)
            filter_band = self._average_filtering_(geo_band)
            band_list.append(filter_band)
        band_arr = np.array(band_list)
        return band_arr, lon_min, lat_max
```
# GDAL波段合成与输出
利用GDAL写入图像的投影信息，仿射变换信息，以及对上述四个波段按顺序合成并保存到硬盘。
```python
def _write_tiff_(self, data, lon_min, lat_max):
        cols = data.shape[2]
        rows = data.shape[1]
        band_count = data.shape[0]
        driver = gdal.GetDriverByName('GTiff')
        out_raster = driver.Create(self.out_name, cols, rows, band_count, gdal.GDT_Float64)

        out_raster.SetGeoTransform((lon_min, self.geo_resolution, 0, lat_max, 0, self.geo_resolution))
        out_raster_SRS = osr.SpatialReference()
        # 代码4326表示WGS84坐标
        out_raster_SRS.ImportFromEPSG(4326)
        out_raster.SetProjection(out_raster_SRS.ExportToWkt())

        # 获取数据集第一个波段，是从1开始，不是从0开始
        for i_band_count in range(band_count):
            out_raster.GetRasterBand(i_band_count + 1).WriteArray(data[i_band_count])
        out_raster.FlushCache()
        out_raster = None
```
# Python批量读取与数据匹配
这里是主程序，主要功能是搜索文件路径，并读取匹配MOD02 L1B数据和MOD35 CloudMask数据，并定义初始化输入输出文件路径，批处理数据，实例化对象，函数调用以及计算处理时间。
```python
if __name__ == '__main__':
    start_time = time.time()
    input_directory = '/mnt/e/Experiments/AOD_Retrieval/DATA/MOD021KM_MOD35Cloud_202205/'
    output_directory = '/mnt/e/Experiments/AOD_Retrieval/DATA/Results/Results_MOD021KM_Rad_Geo_Cal/'
    if os.path.exists(output_directory) == False:
        os.makedirs(output_directory)
    for root, dirs, files in os.walk(input_directory):
        l1b_file_list = [input_directory + i_hdf for i_hdf in files if
                         i_hdf.endswith('.hdf') and i_hdf.startswith('MOD02')]
        cloud_file_list = [input_directory + i_hdf for i_hdf in files if
                           i_hdf.endswith('.hdf') and i_hdf.startswith('MOD35')]
    for i_l1b in l1b_file_list:
        for i_cloud in cloud_file_list:
            if os.path.basename(i_l1b)[10:22] == os.path.basename(i_cloud)[10:22]:
                start_time_each = time.time()
                out_name = output_directory + os.path.basename(i_l1b[:-4]) + '_Rad_Geo_Cor.tiff'
                modis_rad_geo_cor = MODIS_Radiometric_Geometric_Correction(i_l1b, i_cloud, out_name)
                qkm_rad, hkm_rad, cloud_data, lon, lat = modis_rad_geo_cor._read_modis_data_()
                clear_result = modis_rad_geo_cor._cloud_mask_(cloud_data)
                com_band, lon_min, lat_max = modis_rad_geo_cor._band_extract_(lon, lat, qkm_rad, hkm_rad, clear_result)
                modis_rad_geo_cor._write_tiff_(com_band, lon_min, lat_max)

                end_time_each = time.time()
                run_time_each = round(end_time_each - start_time_each, 3)
                print('The image of ' + os.path.basename(i_l1b)[10:22] + ' is saved! The time consuming is ' + str(
                    run_time_each) + ' s.')
    end_time = time.time()
    run_time = round(end_time - start_time, 3)
    print('The total time consuming is ' + str(run_time) + ' s.')
```

# 完整代码
以下是完整代码：
```python
import numpy as np
from osgeo import gdal, osr
import os
from pyhdf.SD import SD
import cv2 as cv
import time


class MODIS_Radiometric_Geometric_Correction:
    def __init__(self, l1b_file, cloud_file, out_name):
        self.l1b_file = l1b_file
        self.cloud_file = cloud_file
        self.out_name = out_name
        self.geo_resolution = 0.01

    def _read_modis_data_(self):
        modis_l1b = SD(self.l1b_file)
        modis_cloud = SD(self.cloud_file)
        qkm_rad = self._radical_calibration_(modis_l1b, 'EV_250_Aggr1km_RefSB', 'radiance_scales',
                                             'radiance_offsets')
        hkm_rad = self._radical_calibration_(modis_l1b, 'EV_500_Aggr1km_RefSB', 'radiance_scales',
                                             'radiance_offsets')
        cloud_data = modis_cloud.select('Cloud_Mask').get()
        lon = modis_l1b.select('Longitude').get()
        lat = modis_l1b.select('Latitude').get()
        return qkm_rad, hkm_rad, cloud_data, lon, lat

    def _radical_calibration_(self, modis_l1b, dataset_name, scales, offsets):
        object = modis_l1b.select(dataset_name)
        data = object.get()
        scales = object.attributes()[scales]
        offsets = object.attributes()[offsets]
        data_rad = np.zeros((data.shape[0], data.shape[1], data.shape[2]), dtype=np.float64)
        for i_layer in range(data.shape[0]):
            data_rad[i_layer, :, :] = scales[i_layer] * (data[i_layer, :, :] - offsets[i_layer])
        return data_rad

    def _cloud_mask_(self, cloud_data):
        cloud_0 = cloud_data[0, :, :]
        cloud_0 = (np.int64(cloud_0 < 0) * (256 + cloud_0)) + (np.int64(cloud_0 >= 0) * cloud_0)
        cloud_binary = np.zeros((cloud_0.shape[0], cloud_0.shape[1], 8), dtype=np.int64)
        for i_cloud in range(8):
            cloud_binary[:, :, i_cloud] = cloud_0 % 2
            cloud_0 //= 2
        clear_result = np.int64(cloud_binary[:, :, 0] == 1) & np.int64(cloud_binary[:, :, 1] == 1) \
                       & np.int64(cloud_binary[:, :, 2] == 1)
        ocean_result = np.int64(cloud_binary[:, :, 6] == 0) & np.int64(cloud_binary[:, :, 7] == 0)
        cloud_result = np.int64(clear_result == 0) | np.int64(ocean_result == 0)
        return clear_result

    def _band_extract_(self, lon, lat, qkm_rad, hkm_rad, clear_result):
        blue_band = hkm_rad[0] * clear_result
        green_band = hkm_rad[1] * clear_result
        red_band = qkm_rad[0] * clear_result
        nir_band = qkm_rad[1] * clear_result
        com_bands = np.array([blue_band, green_band, red_band, nir_band])
        band_list = []
        for i_band in com_bands:
            geo_band, lon_min, lat_max = self._georeference_(lon, lat, i_band)
            filter_band = self._average_filtering_(geo_band)
            band_list.append(filter_band)
        band_arr = np.array(band_list)
        return band_arr, lon_min, lat_max

    def _georeference_(self, lon, lat, data):
        lon_interp = cv.resize(lon, (data.shape[1], data.shape[0]), interpolation=cv.INTER_LINEAR)
        lat_interp = cv.resize(lat, (data.shape[1], data.shape[0]), interpolation=cv.INTER_LINEAR)
        lon_min = np.min(lon_interp)
        lon_max = np.max(lon_interp)
        lat_min = np.min(lat_interp)
        lat_max = np.max(lat_interp)

        geo_box_col = np.int64(np.ceil((lon_max - lon_min) / self.geo_resolution))
        geo_box_row = np.int64(np.ceil((lat_max - lat_min) / self.geo_resolution))
        geo_box = np.zeros((geo_box_row, geo_box_col), dtype=np.float64)
        geo_box_col_pos = np.int64(np.floor((lon_interp - lon_min) / self.geo_resolution))
        geo_box_row_pos = np.int64(np.floor((lat_max - lat_interp) / self.geo_resolution))
        geo_box[geo_box_row_pos, geo_box_col_pos] = data

        return geo_box, lon_min, lat_max

    def _average_filtering_(self, geo_box):
        geo_box_plus = np.zeros((geo_box.shape[0] + 2, geo_box.shape[1] + 2), dtype=np.float64) - 9999.0
        geo_box_plus[1:geo_box.shape[0] + 1, 1:geo_box.shape[1] + 1] = geo_box
        geo_box_out = np.zeros((geo_box.shape[0], geo_box.shape[1]), dtype=np.float64)
        for i_geo_box_row in range(1, geo_box.shape[0] + 1):
            for i_geo_box_col in range(1, geo_box.shape[1] + 1):
                if geo_box_plus[i_geo_box_row, i_geo_box_col] == 0.0:
                    temp_window = geo_box_plus[i_geo_box_row - 1:i_geo_box_row + 2,
                                  i_geo_box_col - 1:i_geo_box_col + 2]
                    temp_window = temp_window[temp_window > 0]
                    temp_window_sum = np.sum(temp_window)
                    temp_window_num = np.sum(np.int64(temp_window > 0.0))
                    if temp_window_num > 3:
                        geo_box_out[i_geo_box_row - 1, i_geo_box_col - 1] = temp_window_sum / temp_window_num
                    else:
                        geo_box_out[i_geo_box_row - 1, i_geo_box_col - 1] = 0.0
                else:
                    geo_box_out[i_geo_box_row - 1, i_geo_box_col - 1] = geo_box_plus[
                        i_geo_box_row, i_geo_box_col]
        return geo_box_out

    def _write_tiff_(self, data, lon_min, lat_max):
        cols = data.shape[2]
        rows = data.shape[1]
        band_count = data.shape[0]
        driver = gdal.GetDriverByName('GTiff')
        out_raster = driver.Create(self.out_name, cols, rows, band_count, gdal.GDT_Float64)

        out_raster.SetGeoTransform((lon_min, self.geo_resolution, 0, lat_max, 0, self.geo_resolution))
        out_raster_SRS = osr.SpatialReference()
        # 代码4326表示WGS84坐标
        out_raster_SRS.ImportFromEPSG(4326)
        out_raster.SetProjection(out_raster_SRS.ExportToWkt())

        # 获取数据集第一个波段，是从1开始，不是从0开始
        for i_band_count in range(band_count):
            out_raster.GetRasterBand(i_band_count + 1).WriteArray(data[i_band_count])
        out_raster.FlushCache()
        out_raster = None


if __name__ == '__main__':
    start_time = time.time()
    input_directory = '/mnt/e/Experiments/AOD_Retrieval/DATA/MOD021KM_MOD35Cloud_202205/'
    output_directory = '/mnt/e/Experiments/AOD_Retrieval/DATA/Results/Results_MOD021KM_Rad_Geo_Cal/'
    if os.path.exists(output_directory) == False:
        os.makedirs(output_directory)
    for root, dirs, files in os.walk(input_directory):
        l1b_file_list = [input_directory + i_hdf for i_hdf in files if
                         i_hdf.endswith('.hdf') and i_hdf.startswith('MOD02')]
        cloud_file_list = [input_directory + i_hdf for i_hdf in files if
                           i_hdf.endswith('.hdf') and i_hdf.startswith('MOD35')]
    for i_l1b in l1b_file_list:
        for i_cloud in cloud_file_list:
            if os.path.basename(i_l1b)[10:22] == os.path.basename(i_cloud)[10:22]:
                start_time_each = time.time()
                out_name = output_directory + os.path.basename(i_l1b[:-4]) + '_Rad_Geo_Cor.tiff'
                modis_rad_geo_cor = MODIS_Radiometric_Geometric_Correction(i_l1b, i_cloud, out_name)
                qkm_rad, hkm_rad, cloud_data, lon, lat = modis_rad_geo_cor._read_modis_data_()
                clear_result = modis_rad_geo_cor._cloud_mask_(cloud_data)
                com_band, lon_min, lat_max = modis_rad_geo_cor._band_extract_(lon, lat, qkm_rad, hkm_rad, clear_result)
                modis_rad_geo_cor._write_tiff_(com_band, lon_min, lat_max)

                end_time_each = time.time()
                run_time_each = round(end_time_each - start_time_each, 3)
                print('The image of ' + os.path.basename(i_l1b)[10:22] + ' is saved! The time consuming is ' + str(
                    run_time_each) + ' s.')
    end_time = time.time()
    run_time = round(end_time - start_time, 3)
    print('The total time consuming is ' + str(run_time) + ' s.')

```
# 运行结果
下图分别为MODIS合成的真彩色和彩红外影像。

真彩色合成是对MODIS合成数据B（1）、G（2）、R（3）、NIR（4）四个波段按照R（3）、G（2）、B（1）分别赋红、绿、蓝三种颜色显示出与真实色彩一致的影像合成方法。

![MODIS 真彩色合成影像](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/modis_radiometric_geometric_correction/modis_rgb.jpg)

彩红外又叫标准假彩色合成，是对MODIS合成数据B（1）、G（2）、R（3）、NIR（4）四个波段按照NIR（4）、R（3）、G（2）分别赋红、绿、蓝三种颜色显示出与真实色彩不一致但能突出影像上的水体植被特征的一种遥感影像合成方法（植被显红色，水体显黑色）。

![MODIS 彩红外合成影像](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/modis_radiometric_geometric_correction/modis_colorIr.jpg)