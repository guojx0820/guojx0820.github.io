---
title: Jason-3SSHA数据处理与可视化——Python代码实现
tags: Python卫星数据处理
description: 本文利用Python对Jason-3 SSHA数据进行逐日数据绘图，并绘制SSHA等值线等处理过程。
cover: 'https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Jason-3SSHA/lulu.jpg'
categories: 程序代码
abbrlink: 59a3b95f
date: 2023-03-12 23:02:12
---
# Jason-3数据介绍
OSTM/Jason-3是jason-2的后续任务。这个卫星的名字是以希腊神话中的一位英雄的名字命名的，该英雄出自于阿尔戈英雄，指的是希腊传说中同伊阿宋（jason）一道乘快船“阿尔戈号”去科尔基斯（Colchis）的阿瑞斯圣林取金羊毛的50位英雄，Jason是首领。OSTM/Jason-3接管并延续Jason-2的任务。为的是促进测高任务的全面发展，能够满足运行程序对数据的时效性和可靠性的需求。

Jason-3卫星高度计于2016年1月17日成功发射，2016年2月12日进入预定轨道，与Jason-2高度计同轨进入编队飞行阶段，并落后Jason-2高度计约1分20秒，两者相距约560 km。2016年9月1日，Jason-2高度计变换轨道，编队飞行阶段结束，两高度计进入平行轨道，以增加卫星高度计对地观测的空间覆盖。

本研究主要开展了Jason-3高度计的数据质量的评估与检验，包括Jason-3高度计数据可用性和有效性的验证，以及Jason-3高度计和校正辐射计各参数的数据质量监测。重点开展了Jason-2与Jason-3高度计各项参数的综合比较，利用Jason-2与Jason-3高度计编队飞行阶段的数据精确评估了两高度计参数的一致性，并从全球数据角度分析了Jason-3高度计获取各参数的能力以及稳定性；通过与Jason-2互交叉点比较分析评估Jason-3高度计海面高度数据质量情况，验证Jason-3高度计数据精度。

结果表明，Jason-3高度计的数据质量满足高度计测高的要求，具有与Jason-1、Jason-2、T/P等高度计相同或更高的测高精度以监测全球海平面变化，此外，Jason-3有效波高参数数据质量明显优于Jason-2高度计。

- 表1 Jason系列数据介绍：

|辅助数据|	影响参数|	OGDR|	IGDR|	GDR|
|:----:|:----:|:----:|:----:|:----:|
|轨道	|卫星高度，多普勒校正…	|ORIS导航器|	初步的（MOE用DORIS数据）	|精确的（POE使用DORIS/激光/GPS数据）|
|气压计字段	|干/湿对流层改正，U/V风矢量，地面气压，逆气压改正	|预测的	|恢复的|
|极点位置	|极潮高度	|预测的	|恢复的|
|Mog2D	|HF ocean dealiasing correction	|无法使用	|初步的	|精确的|
|GIM	|电离层校正	|无法使用	|可用|
|辐射计天线温度的多项式系数|	湿对流层改正，Sigma0降雨衰减，…	|初步的	|精确的（辐射计定标）|

本实验采用的是OGDR中的Cycle210，2021/10/20-10/30数据，其数据储存与Jason-2有所差异，经纬度存在了二级目录的variables数据集中，而SSHA数据则存在了三级目录中的variables数据集中，读取时需注意。

# Python代码与注释详解
## 逐日数据画在地图（每日一张，标注经纬度、数值colorbar、日期title等），保存图片代码

```python
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt
import numpy as np
import netCDF4 as nc
from matplotlib import cm
from matplotlib.colors import LinearSegmentedColormap as lsc
import os


# np.set_printoptions(threshold=np.inf)


def set_colormap():
    colormap = np.zeros((256, 3), np.float64)
    for i in range(0, 256, 1):
        colormap[i, 0] = cm.jet(i)[0] * 255.0
        colormap[i, 1] = cm.jet(i)[0] * 255.0
        colormap[i, 2] = cm.jet(i)[0] * 255.0
        # colormap[0, :] = [255., 255., 255.]
    return colormap


def find_max(data_matrix):
    new_data = []
    for i in range(len(data_matrix)):
        new_data.append(max(data_matrix[i]))
    # print("数组最大值为：", max(new_data))
    return max(new_data)


def find_min(data_matrix):
    new_data = []
    for i in range(len(data_matrix)):
        new_data.append(min(data_matrix[i]))
    # print('数组最小值为：', min(new_data))
    return min(new_data)


def variables_extact(file):
    lon_list = []
    lat_list = []
    ssha_list = []
    ssha_w_list = []
    for f in file:
        '''第一重数据集--*.nc Dataset'''
        dataset_nc = nc.Dataset(f)
        '''第二重数据集--groups Dataset'''
        data_01 = dataset_nc.groups['data_01']
        lon = (data_01.variables['longitude'][:])
        lat = (data_01.variables['latitude'][:])
        '''第三重数据集--ku Dataset'''
        ku = data_01.groups['ku']
        ssha = (ku.variables['ssha'][:])
        data_lon = np.array(lon)
        data_lat = np.array(lat)
        data_ssha_all = np.array(ssha)
        data_ssha = np.where(data_ssha_all != 32767, data_ssha_all * 100, 0)
        min_lon = find_min([data_lon])
        max_lon = find_max([data_lon])
        min_lat = find_min([data_lat])
        max_lat = find_max([data_lat])
        min_ssha = find_min([data_ssha])
        max_ssha = find_max([data_ssha])
        # print(min_lon, max_lon, min_lat, max_lat, min_ssha, max_ssha)
        # data_ssha[np.where(data_ssha != 0)] = 100 * (data_ssha[np.where(data_ssha != 0)] - min_ssha) / (
        #         max_ssha - min_ssha)
        data_ssha_w = data_ssha * 100
        # print(len(data_lon), len(data_lat), len(time), len(data_ssha))
        # print(data_lon, data_lat, data_time, data_ssha)
        lon_list.append(data_lon)
        lat_list.append(data_lat)
        ssha_list.append(data_ssha)
        ssha_w_list.append(data_ssha_w)
    print(lon_list)
    print(lat_list)
    print(ssha_list)
    print(ssha_w_list)
    return lon_list, lat_list, ssha_list, ssha_w_list


def show_data(file):
    lon_list, lat_list, ssha_list, ssha_w_list = variables_extact(file)
    map = Basemap(projection='cyl', llcrnrlat=-90., urcrnrlat=90., llcrnrlon=0., urcrnrlon=361., resolution='l',
                  lat_0=0, lon_0=180)
    map.drawmapboundary(fill_color='aqua')
    map.fillcontinents(color='gray', lake_color='aqua')
    map.drawstates()
    map.drawcoastlines()
    # lons, lats = map.makegrid(1, 6598)
    # lats = lats[::-1]
    # x, y = map(lons, lats)
    map.drawparallels(np.arange(-90., 91., 30.), labels=[1, 0, 0, 0], fontsize=12)
    map.drawmeridians(np.arange(-180., 181., 60.), labels=[0, 0, 0, 1], fontsize=12)

    # x, y = np.meshgrid(data_lon, data_lat)
    # curve = map.contour(x, y, data_ssha)
    cmap_color = plt.cm.get_cmap("Accent_r")
    # shade = map.contourf(x, y, data_ssha, cmap=cmap_color)

    # colormap = set_colormap()
    # color_table = lsc.from_list('ssha map', colormap / 255.0)
    # print(len(lat_list))
    # print(lon_list, lat_list, ssha_list, ssha_w_list)

    for i in range(len(ssha_list)):
        line_ssha = map.scatter(lon_list[i], lat_list[i], c=ssha_w_list[i], s=1, vmin=-500, vmax=500)
    cbar = map.colorbar(line_ssha)
    cbar.ax.tick_params(labelsize=12)
    # for j in prefix_list:


if __name__ == '__main__':
    postfix = '.nc'
    prefix_list = ['20211020', '20211021', '20211022', '20211023', '20211024', '20211025', '20211026', '20211027',
                   '20211028', '20211029', '20211030']
    print(prefix_list)
    input_path = '/Users/leo/Desktop/MarineTechTest5/Data_Jason3/'
    output_path = '/Users/leo/Desktop/MarineTechTest5/Results/'

    if not os.path.exists(output_path):
        os.mkdir(output_path)
    file_list = os.listdir(input_path)

    for k in prefix_list:
        day_list = []
        for i in file_list:
            if i.endswith(postfix) and i[20:].startswith(k):
                file = input_path + i
                # print(file)
                day_list.append(file)
        print(day_list)

        lon, lat, ssha, ssha_w = variables_extact(day_list)
        # ssha_w_list.append(ssha_w)
        # print(ssha_w_list)
        show_data(day_list)
        plt.title(k + ' Spatial Distribution Map of Jason-3 SSHA(cm)', fontsize=12)
        plt.savefig(output_path + k + '.png', dpi=600)
        plt.show()
```
## Cycle210，2021/10/20-10/30数据画在一张地图上（一共一张，标注经纬度、数值colorbar、日期title等） ），保存图片代码
```python
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt
import numpy as np
import netCDF4 as nc
from matplotlib import cm
from matplotlib.colors import LinearSegmentedColormap as lsc
import os
from mpl_toolkits.mplot3d import Axes3D


# np.set_printoptions(threshold=np.inf)


def set_colormap():
    colormap = np.zeros((256, 3), np.float64)
    for i in range(0, 256, 1):
        colormap[i, 0] = cm.jet(i)[0] * 255.0
        colormap[i, 1] = cm.jet(i)[0] * 255.0
        colormap[i, 2] = cm.jet(i)[0] * 255.0
        # colormap[0, :] = [255., 255., 255.]
    return colormap


def find_max(data_matrix):
    new_data = []
    for i in range(len(data_matrix)):
        new_data.append(max(data_matrix[i]))
    # print("数组最大值为：", max(new_data))
    return max(new_data)


def find_min(data_matrix):
    new_data = []
    for i in range(len(data_matrix)):
        new_data.append(min(data_matrix[i]))
    # print('数组最小值为：', min(new_data))
    return min(new_data)


def variables_extact(file):
    lon_list = []
    lat_list = []
    ssha_list = []
    ssha_w_list = []
    for f in file:
        '''第一重数据集--*.nc Dataset'''
        dataset_nc = nc.Dataset(f)
        '''第二重数据集--groups Dataset'''
        data_01 = dataset_nc.groups['data_01']
        lon = (data_01.variables['longitude'][:])
        lat = (data_01.variables['latitude'][:])
        '''第三重数据集--ku Dataset'''
        ku = data_01.groups['ku']
        ssha = (ku.variables['ssha'][:])
        data_lon = np.array(lon)
        data_lat = np.array(lat)
        data_ssha_all = np.array(ssha)
        data_ssha = np.where(data_ssha_all != 32767, data_ssha_all * 100, 0)
        min_lon = find_min([data_lon])
        max_lon = find_max([data_lon])
        min_lat = find_min([data_lat])
        max_lat = find_max([data_lat])
        min_ssha = find_min([data_ssha])
        max_ssha = find_max([data_ssha])
        # print(min_lon, max_lon, min_lat, max_lat, min_ssha, max_ssha)
        # data_ssha[np.where(data_ssha != 0)] = 100 * (data_ssha[np.where(data_ssha != 0)] - min_ssha) / (
        #         max_ssha - min_ssha)
        data_ssha_w = data_ssha * 100
        # print(len(data_lon), len(data_lat), len(time), len(data_ssha))
        # print(data_lon, data_lat, data_time, data_ssha)
        lon_list.append(data_lon)
        lat_list.append(data_lat)
        ssha_list.append(data_ssha)
        ssha_w_list.append(data_ssha_w)
    # print(lon_list)
    # print(lat_list)
    # print(ssha_list)
    # print(ssha_w_list)
    return lon_list, lat_list, ssha_list, ssha_w_list


def show_data(file):
    lon_list, lat_list, ssha_list, ssha_w_list = variables_extact(file)
    map = Basemap(projection='cyl', llcrnrlat=-90., urcrnrlat=90., llcrnrlon=0., urcrnrlon=361., resolution='l',
                  lat_0=0, lon_0=180)
    map.drawmapboundary(fill_color='aqua')
    map.fillcontinents(color='gray', lake_color='aqua')
    map.drawstates()
    map.drawcoastlines()
    # lons, lats = map.makegrid(1, 6598)
    # lats = lats[::-1]
    # x, y = map(lons, lats)
    map.drawparallels(np.arange(-90., 91., 30.), labels=[1, 0, 0, 0], fontsize=12)
    map.drawmeridians(np.arange(-180., 181., 60.), labels=[0, 0, 0, 1], fontsize=12)
    # ax = plt.axes(projection='3d')
    # x, y = np.meshgrid(data_lon, data_lat)
    # curve = map.contour(x, y, data_ssha)
    cmap_color = plt.cm.get_cmap("Accent_r")
    # shade = map.contourf(x, y, data_ssha, cmap=cmap_color)

    # colormap = set_colormap()
    # color_table = lsc.from_list('ssha map', colormap / 255.0)
    # print(len(lat_list))
    # print(lon_list, lat_list, ssha_list, ssha_w_list)

    for i in range(len(ssha_list)):
        # Z = np.expand_dims(ssha_w_list[i], axis=1)
        line_ssha = map.scatter(lon_list[i], lat_list[i], c=ssha_w_list[i], s=1, vmin=-500, vmax=500)
        # surface_ssha = ax.plot_surface(lon_list, lat_list, Z, cmap='rainbow')
    cbar = map.colorbar(line_ssha)
    cbar.ax.tick_params(labelsize=12)
    # for j in prefix_list:


if __name__ == '__main__':
    postfix = '.nc'
    # prefix_list = ['20211020', '20211021', '20211022', '20211023', '20211024', '20211025', '20211026', '20211027',
    #                '20211028', '20211029', '20211030']
    # print(prefix_list)
    input_path = '/Users/leo/Desktop/MarineTechTest5/Data_Jason3/'
    output_path = '/Users/leo/Desktop/MarineTechTest5/Results/'

    if not os.path.exists(output_path):
        os.mkdir(output_path)
    file_list = os.listdir(input_path)
    day_list = []
    # for k in prefix_list:
    for i in file_list:
        if i.endswith(postfix):
            file = input_path + i
            # print(file)
            day_list.append(file)

    print(day_list)

    lon, lat, ssha, ssha_w = variables_extact(day_list)
    # ssha_w_list.append(ssha_w)
    # print(ssha_w_list)
    show_data(day_list)
    plt.title('20211020-30 Spatial Distribution Map of Jason-3 SSHA(cm)', fontsize=12)
    plt.savefig(output_path + '20211020-30.png', dpi=600)
    plt.show()
```
## 2021/10/20-10/30数据画等值线图，保存图片代码
```python
import numpy as np
import netCDF4 as nc
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import os, math
import show_ssha_map as ssm
from mpl_toolkits.basemap import Basemap


# from mpl_toolkits.basemap import Basemap

# map = Basemap()

# np.set_printoptions(threshold=np.inf)


def find_max(data_matrix):
    new_data = []
    for i in range(len(data_matrix)):
        new_data.append(max(data_matrix[i]))
    print("data_matrix最大值为", max(new_data))


def find_min(data_matrix):
    new_data = []
    for i in range(len(data_matrix)):
        new_data.append(min(data_matrix[i]))
    print(min(new_data))


def variables_extact(file):
    lon_list = []
    lat_list = []
    ssha_list = []
    ssha_w_list = []
    for f in file:
        '''第一重数据集--*.nc Dataset'''
        dataset_nc = nc.Dataset(f)
        '''第二重数据集--groups Dataset'''
        data_01 = dataset_nc.groups['data_01']
        lon = (data_01.variables['longitude'][:])
        lat = (data_01.variables['latitude'][:])
        '''第三重数据集--ku Dataset'''
        ku = data_01.groups['ku']
        ssha = (ku.variables['ssha'][:])
        data_lon = np.array(lon)
        data_lat = np.array(lat)
        data_ssha_all = np.array(ssha)
        data_ssha = np.where(data_ssha_all != 32767, data_ssha_all * 100, 0)
        # min_lon = find_min([data_lon])
        # max_lon = find_max([data_lon])
        # min_lat = find_min([data_lat])
        # max_lat = find_max([data_lat])
        # min_ssha = find_min([data_ssha])
        # max_ssha = find_max([data_ssha])
        # print(min_lon, max_lon, min_lat, max_lat, min_ssha, max_ssha)
        # data_ssha[np.where(data_ssha != 0)] = 100 * (data_ssha[np.where(data_ssha != 0)] - min_ssha) / (
        #         max_ssha - min_ssha)
        data_ssha_w = data_ssha * 100
        # print(len(data_lon), len(data_lat), len(time), len(data_ssha))
        # print(data_lon, data_lat, data_time, data_ssha)
        lon_list.extend(data_lon)
        lat_list.extend(data_lat)
        ssha_list.extend(data_ssha)
        ssha_w_list.extend(data_ssha_w)
    # lon_all = lon_list.reshape((1, len(data_lon) * len(lon_list)), order='A')
    # print(lon_all)
    lon_all = np.array(lon_list)
    lat_all = np.array(lat_list)
    ssha_all = np.array(ssha_list)
    ssha_w_all = np.array(ssha_w_list)
    print(lon_all, lon_all.shape)
    print(lat_all, lat_all.shape)
    print(ssha_all, ssha_all.shape)
    # print(lon_list)
    # print(lat_list)
    # print(ssha_list)
    # print(ssha_w_list)
    return lon_all, lat_all, ssha_all, ssha_w_all


def show_ssha_3d(lon, lat, ssha, ssha_w):
    lon_lat_ssha = np.vstack((lon, lat, ssha_w)).T
    print(lon.shape, lat.shape, ssha_w.shape)
    # lon_arr = np.array(lon)
    # lon_lat_ssha.extend(lon)
    print(lon_lat_ssha[:, 2], lon_lat_ssha.shape)
    ssha_mean_list = []
    for a in range(360):
        for b in range(180):
            sum = 0
            k_list = []
            for i, j, k in lon_lat_ssha:
                if all((abs(i) > a, abs(i) <= a + 1, abs(j) > b, abs(j) <= b + 1)):
                    sum += 1
                    k_list.extend([k])
                    mean_ssha = math.fsum(k_list) / sum
            print(sum, k_list, mean_ssha)
            ssha_mean_list.extend([mean_ssha])
    print(ssha_mean_list)
    # lon_reshape = np.array(lon.reshape(len(lon), 1))
    # lat_reshape = np.array(lat.reshape(len(lat), 1))
    # ssha_reshape = np.array(ssha.reshape(len(ssha), 1))
    # print(lon_reshape, lat_reshape, ssha_reshape)
    # lon_lat = lon_reshape.extend(lat_reshape)
    # print(lon_lat)

    map = Basemap(projection='cyl', llcrnrlat=-90., urcrnrlat=90., llcrnrlon=0., urcrnrlon=361., resolution='l',
                  lat_0=0, lon_0=180)
    map.drawmapboundary()
    map.fillcontinents(color='gray', lake_color='aqua')
    map.drawstates()
    map.drawcoastlines()
    lons, lats = map.makegrid(1, 6598)
    lats = lats[::-1]
    x, y = map(lon, lat)
    map.drawparallels(np.arange(-90., 91., 30.), labels=[1, 0, 0, 0], fontsize=12)
    map.drawmeridians(np.arange(-180., 181., 60.), labels=[0, 0, 0, 1], fontsize=12)
    contour_map = map.contour(x, y, ssha_mean_list, 15, linewidths=1.5)
    # line_ssha = map.scatter(lon_lat_ssha[:, 0], lon_lat_ssha[:, 1], c=lon_lat_ssha[:, 2], s=1, vmin=-500, vmax=500)
    plt.savefig(output_path + 'interpolote.png')
    plt.show(contour_map)


'''
    fig = plt.figure()
    # ax = Axes3D(fig)
    ax2 = plt.axes(projection='3d')

    X = lon
    Y = lat
    X, Y = np.meshgrid(X, Y)
    print(len(X), len(Y), len(ssha))
    Z = np.expand_dims(ssha, axis=1)
    ax2.plot_surface(X, Y, Z, alpha=0.3, cmap='rainbow')
    # ax2.contour(X, Y, Z, zdir='z', offset=-3, cmap="rainbow")
    # ax2.contourf(X, Y, Z, zdir='z', offset=-3, cmap="rainbow")
    plt.savefig(output_path + '_3d.png')
    plt.show()
'''

if __name__ == '__main__':
    postfix = '.nc'
    # prefix = '20211030'
    # prefix_list = ['20211020', '20211021', '20211022', '20211023', '20211024', '20211025', '20211026', '20211027',
    #                '20211028', '20211029', '20211030']
    # print(prefix_list)
    input_path = '/Users/leo/Desktop/MarineTechTest5/Data_Jason3/'
    output_path = '/Users/leo/Desktop/MarineTechTest5/Results/'

    if not os.path.exists(output_path):
        os.mkdir(output_path)
    file_list = os.listdir(input_path)
    day_list = []
    # for k in prefix_list:
    for i in file_list:
        if i.endswith(postfix):
            file_nc = input_path + i
            # print(file_nc)
            day_list.append(file_nc)
    #
    print(day_list)
    #     continue
    lon, lat, ssha, ssha_w = variables_extact(day_list)
    # print(lon, lat, ssha)
    show_ssha_3d(lon, lat, ssha, ssha_w)
```
# 结果与总结：
## Jason-3 SSHA 2021/10/20—2021/10/30逐日数据全球分布图
![2021/10/20](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Jason-3SSHA/20211020.png)
![2021/10/21](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Jason-3SSHA/20211021.png)
![2021/10/22](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Jason-3SSHA/20211022.png)
![2021/10/23](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Jason-3SSHA/20211023.png)
![2021/10/24](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Jason-3SSHA/20211024.png)
![2021/10/25](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Jason-3SSHA/20211025.png)
![2021/10/26](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Jason-3SSHA/20211026.png)
![2021/10/27](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Jason-3SSHA/20211027.png)
![2021/10/28](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Jason-3SSHA/20211028.png)
![2021/10/29](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Jason-3SSHA/20211029.png)
![2021/10/30](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Jason-3SSHA/20211030.png)
## Jason-3 SSHA 2021/10/20—2021/10/30所有数据全球分布图
![2021/10/20-30](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Jason-3SSHA/20211020_30.png)
## Jason-3 SSHA 2021/10/20—2021/10/30所有数据全球分布图(等值线插值结果)
![2021/10/20-30等值线插值](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Jason-3SSHA/20211020_30lines.png)
在读取Jason数据中，由于它是以点与经纬度储存的数据，所以可视化的时候应注意到，其处理方式需要将其转化为数组，在做相应的计算与拉伸，才能达到理想的效果。
