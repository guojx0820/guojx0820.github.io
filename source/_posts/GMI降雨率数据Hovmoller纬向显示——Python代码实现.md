---
title: GMI降雨率数据Hovmoller纬向显示——Python代码实现
tags: Python卫星数据处理
description: 本文利用Python对GMI降雨率Rain Rate数据进行绘图，绘制出纬向平均数据随时间变化Hovmoller图。
cover: 'https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/GMI_RainRate/smile.jpg'
categories: 程序代码
abbrlink: 92a27152
date: 2023-03-20 22:57:44
---
# GMI数据介绍：
## 介绍
全球降水测量 (GPM) 卫星上有一个称为 GMI（GPM 微波成像仪）的微波辐射计。GPM 卫星于 2014 年 2 月 27 日发射，GMI 仪器在几天后启动。GPM 与其他带有微波辐射计的卫星之间的主要区别之一是轨道倾斜 65 度，允许大约每两周重复一次对所有当地地球时间的完整采样。GPM 平台大约每 40 天进行一次偏航机动，以补偿太阳位置的变化并防止航天器面向太阳的一侧过热。
## 仪器说明
GMI 是一种双极化、多通道、锥形扫描、无源微波辐射计，具有频繁的重访次数。

GMI 仪器的设计具有严格的校准精度要求，其精度比以前的任何微波卫星传感器都要高，从而使该仪器能够作为微波辐射测量标准。GMI 的几个特性提供了更高的校准精度，包括防止热负载受到阳光侵入、用于双校准系统的低频通道上的噪声二极管以及反射天线涂层。这些功能使我们对我们在此提供的 GMI 数据的质量和准确性非常有信心。D. Draper 等人的论文中提供了有关 GMI 的更多信息。下面的参考部分中列出的论文。此处列出了 GMI 工具的一些详细信息：

- 表1 GMI  卫星数据参数介绍

|GMI||
|:----:|:----:|
|卫星平台	|GPM|
|高度	|407 公里
|穿越赤道时间 （当地时区）|变化的|
|天线尺寸     |1.22米 |
|条带宽度	|931 公里 |
|轨道倾角	|65度 |
|离天底视角	|48.5 度 |

- 表2 13 个仪器通道

|频带 [GHz]	|极化	|空间分辨率（3-dB 足迹大小)[km x km] |
|:----:|:----:|:----:|
|10.65	|V,H	|32 × 19     |
|18.7	|V,H	|18 × 11     |
|23.8	|V	    |16 × 10     |
|36.5	|V,H	|15 × 9      |
|89.0	|V,H	|  7 × 4     |
|165.5	|V,H	|  6 × 4     |
|183.31+/-3	|V	|  6 × 4 |
|183.31+/-7	|V	|  6 × 4 |

我们从美国宇航局戈达德地球科学数据和信息服务中心获取仪器数据，将数据反向处理为原始计数，并应用我们自己的在轨校准将计数转换为亮温。亮度温度与 RSS 辐射传递模型 (RTM) 相互校准。然后，我们生产典型的 RSS 微波辐射计海洋测量产品套件，包括：海面温度 (SST)、地表风速（低频和中频）、大气水蒸气、云中液态水和降雨率。详细信息在Meissner 等人中给出。报告. GMI 数据使用RSS Version-8.2 算法和RTM 进行处理。与 V7 RTM 相比，V8 RTM 提供了略微改进的亮度温度校准；然而，V7和V8算法的海洋产品高度一致。因此，我们认为 V8 产品可与 WindSat、AMSRE、AMSR2 以及 SSM/I 和 SSMIS 系列的 V7 产品相媲美。  
## RSS GMI 数据产品
RSS 的大多数微波辐射计海洋数据产品是第 7 版，十进制值代表该仪器的处理阶段，从 .1 开始。GMI 数据是使用更新的 RTM 版本 8 生成的。GMI 的 V8 亮度温度与 V7 亮度温度略有不同；但是，V7和V8海洋产品之间基本上没有区别。GMI V8.2 数据可从 2014 年 4 月 3 日至今。我们继续在 GMI 数据到达时近乎实时地处理它们，延迟大约 3 到 6 个小时。

我们生成每日二进制数据文件和时间平均（3 天、每周和每月）数据文件。每日文件包括映射到规则 0.25 度网格的海洋测量（地球物理检索或参数），并在轨道之间存在数据间隙。每个参数存在两个映射，一个是上升轨道段，另一个是下降轨道段。每个分段地图上的数据在连续轨道交叉的地方取平均值，并在“接缝”或当天的最后一个轨道与当天的第一个轨道重叠的区域处被覆盖。每日数据文件包含时间图，其中包含每组传递（升序和降序）的 UTC 观测时间。时间平均数据文件不包含任何时间信息。

网格化数据按照观测日期进行组织。所有日期和时间都是协调世界时 (UTC)，也称为格林威治标准时间 (GMT)、祖鲁时间 (Z)、世界时间 (UT) 和世界时间。数据产品包括日均和时间平均地球物理数据如下：

- 表3 GMI 数据产品介绍

|每日| 	轨道数据映射到 0.25 度网格，根据上升和下降通道分为 2 个地图，早期数据由连续轨道平均或在每日“接缝”覆盖  |
|:----:|:----:|
|3天|	平均 3 天，包括文件日期                                             |
|每周|	平均 7 天，包括星期六的文件日期                                         |
|每月|	日历月内所有数据的平均值                                              |

我们的 ftp 站点提供的每个二进制数据文件都包含十四个（每日）或六个（平均）0.25 x 0.25 度网格 (1440,720) 字节映射。对于日常文件，按以下顺序升序七张地图，时间（UTC），海面温度（SST），使用低频通道的 10 米风速（WSPD-LF），使用中频通道的 10 米风速（WSPD） -MF)、大气水汽 (VAPOR)、云中液态水 (CLOUD) 和降雨率 (RAIN)，依次是七个降序图。时间平均文件仅包含相同顺序的地球物理层 [SST、WSPD-LF、WSPD-MF、VAPOR、CLOUD、RAIN]。

- 表4 GMI  参数值列表

|参数	    |产品名称|产品描述 |增益	|偏移	|有效数据范围	|没有数据的原因 |
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
|时间	    |时间	   |格林威治标准时间午夜后的分钟数 格林威治标准时间一天中的小数小时|6.0/0.1	|0./0.	|0 到 1440/0.0 到 24.0|	没有数据  |
|海表温度	|海面温度  |  水的顶层（表层）温度~1 毫米厚|	0.15|	-3.0|	-3 到 34.5 度|	强风 (<20 m/s)、阳光、雨、RFI、靠近海冰或陆地 |
|风速_LF  | 	10米风速	    |使用 10.7、18.7、23.8 和 36.5 GHz 频道的风速|	0.2	|0.	|0. 至 50.0 m/s|	阳光、雨水、RFI、靠近海冰或陆地|
|风速_MF	|    10米风速|	使用 18.7、23.8 和 36.5 GHz 频道的风速|	0.2	|0.|	0. 至 50.0 m/s|	阳光闪烁、雨水 RFI、靠近海冰或陆地 |
|汽	    |    柱状大气水汽	|包含在垂直大气柱中的气态水总量	|0.3|	0.|	0. 至 75.0 毫米 1 克/厘米2 = 10 毫米|	大雨或靠近陆地 |
|云      |	柱状云液态水|	包含在垂直大气柱中的云中液态水总量|	0.01|	-0.05|	-0.05 至 2.45 毫米|	近陆   |
|雨      |	雨量	        |液态水沉淀率	|0.1|	0.	|0. 至 25.0 毫米/小时|	近陆 |

需要缩放 0 到 250 之间的数据值以获得有意义的地球物理数据。要缩放数据，请乘以上表中列出的缩放因子。提供的读取例程执行缩放。

每日、3 天和每月地图存储在适当的年和月子目录中。每周数据文件存储在 /weeks 目录中。

文件名具有以下命名约定：

- 表5 GMI 数据文件命名规则
  
|时间|	目录路径	  |文档名称                         |
|:----:|:----:|:----:|
|每天|	[年]/[月]/|	ascat_yyyymmdd_v02.1.gz     |
|3天|	[年]/[月]/|	ascat_yyyymmdd_v02.1_3day.gz|
|每周|	周/	      | ascat_yyyymmdd_v02.1.gz     |
|每月|	[年]/[月]/|	ascat_yyyymm_v02.1.gz       |


- 表6 ASCAT 数据文件夹路径命名规则

|[年]|	年文件夹	|  y2007, y2008 等                 |
|:----:|:----:|:----:|
|[月]|	月文件夹    | 	m01（一月）、m02（二月）等              |
|yyyy|	年	    |  2007、2008 年等                   |
|毫米|	月   	|01（一月）、02（二月）等                   |
|日   |	日	    |  01, 02, ... 31                 |
|v	  | 版本	    |  2.1                            |
文件说明符是 RSS 用于引用大量卫星传感器的内部编号代码。GMI 的文件说明符是 f35。GMI 文件名都以 f35 开头。我们的数据访问表中提供了其他 13 个 RSS 微波辐射计的文件说明符。所有辐射计数据文件的文件名都以 f## 开头，以标识该传感器。

1440 列和 720 行地图的第一个单元格的中心位于 0.125 E 经度和 -89.875 纬度。第二个单元格的中心是 0.375 E 经度，-89.875 纬度。数据值介于 0 和 255 之间。已保留特定值：

- 表7 ASCA数据值设定

|0 到 250 = |	有效的地球物理数据     |
|:----:|:----:|
|251 =	   | 不用于散射仪           |
|252 =	   | 不用于散射仪           |
|253 =	   | 散射计观测存在，但不好      |
|254 =	   | 无散射仪观测           |
|255 =	   | 陆块               |

## 缺失数据

这些数据中存在差距。缺失数据通常会影响 Daily 和 3-Day 产品，但也会减少 Weekly 和 Monthly 平均值中的观察次数。

浏览图像时，导航可能会跳过没有数据的日期，或者您可能会看到一张空白地图，表明该时间没有可用数据。

不生成数据完全缺失的日期的二进制数据文件；他们将不会出现在我们的 FTP 服务器中。

数据缺口通常是由于我们处理设施上游的数据缺失，例如仪器被关闭。有时，获取和/或处理最近记录的数据会出现延迟；几周后，丢失的数据不太可能可用。有关当前中断的信息，请务必查看网页公告。

GMI 数据完全缺失的日期包括：
- 表8 ASCA数据值设定

|日期范围       |	＃ 天     |
  |:----:|:----:|
|2014.04.27	|    1      |
|2014.10.23	|    1      |

## 浏览图片

每个每日、3 天、每周和每月浏览图像地图显示一个地球物理参数：海面温度 (SST)、10 米风速 (WSPD-LF)、10 米风速 (WSPD-MF)、柱状水汽 (VAPOR) )、云液态水 (CLOUD) 或降雨率 (RAIN)。每日地图分别显示白天或夜间卫星通行证。显示数据的日期是收集数据时的 UTC 日期。每个浏览图像的比例位于地图旁边以供参考。尽管上面的地球物理变量表中给出了有效数据范围（最小到最大），但浏览图像中的比例尺设置为在视觉上增强数据并且可能会有所不同。

## 阅读例程

我们的 ftp 服务器上的 gmi/support 目录中提供了二进制文件读取例程和验证文件。例程是用 IDL、Matlab、Fortran、C++ 和 Python 编写的。

## 相关数据
RSS GMI 海洋数据产品没有替代来源。

## 参考
- Draper、DW、D. Newell、FJ Wentz、S. Krimchansky 和 GM Skofronick-Jackson，2015 年：全球降水测量 (GPM) 微波成像仪 (GMI)：仪器概述和早期在轨性能。IEEE 应用地球观测和遥感选定主题杂志。doi:10.1109/JSTARS.2015.2403303。
- Meissner, T.、FJ Wentz 和 D. Draper，2012 年：GMI 校准算法和分析理论基础文件，遥感系统，加利福尼亚州圣罗莎，报告编号 041912，124 页。

## 致谢
GMI 数据由遥感系统生成，并由 NASA 物理海洋学项目赞助。

## 如何引用这些数据
继续制作该数据集需要 NASA 的支持。我们需要您在出版物中使用这些数据时确保引用这些数据，以便我们可以向科学界证明该数据集的价值。请在论文的致谢部分包含以下声明：
“GMI 数据由遥感系统生成，并由 NASA 地球科学基金赞助。数据可在 www.remss.com 上获得。”
下面给出了用于出版物的官方数据引用。在括号中插入适当的信息。
Wentz, FJ, T. Meissner, J. Scott, KA Hilburn, 2015: Remote Sensing Systems GPM GMI [表明您使用的是 Daily、3-Day、Weekly 还是 Monthly] Environmental Suite on 0.25 deg grid, Version 8.2, [表明如果使用子集]。遥感系统，加利福尼亚州圣罗莎。可在 www.remss.com/missions/gmi 在线获取。[访问 dd mmm yyyy]。

本文所用数据以及上述资料来源于[remss](https://www.remss.com )官网,本文所用数据储存于百度网盘中，可自行下载：
> [GMI Data](https://pan.baidu.com/s/1mjpw5nmsFBF9UgZ_4w2wcg) 提取码: gjxb

# Python代码与注释详解
处理数据用Hovmöller显示纬向平均数据随时间变化, 下载2015-2020六年间GMI weekly data沿纬向分别平均以下两个区域rain rate数据(每0.25o平均)。
- 30°W - 30°E， 50°S to 50°N
- 150°E - 180°E， 50°S to 50°N

观察rain rate在不同区域随时间、纬度变化保存图片代码展示：
```python
'''
Download monthly average GMI data from January 2020 to August 2021
Display and save the monthly parameter images,
which shall be marked with longitude and latitude and color table value

Time:11/20/2021
Author:Guo Jiaxiang
Email：guojiaxiang0820@gmail.com
GitHubBlog:https://github.com/guojx0820
'''

import gzip, os
import numpy as np
import matplotlib.pyplot as plt
from matplotlib import cm
from scipy import stats
from PIL import Image
from matplotlib.ticker import FuncFormatter
import matplotlib.ticker as ticker
from matplotlib.colors import LinearSegmentedColormap


# np.set_printoptions(threshold=np.inf)

def switch_case(value):
    date_list = ["2015-Jan.", "2015-Jun.", "2015-Dec.",
                 "2016-Jun.", "2016-Dec.",
                 "2017-Jun.", "2017-Dec.",
                 "2018-Jun.", "2018-Dec.",
                 "2019-Jun.", "2019-Dec.",
                 "2020-Jun.", "2020-Dec."]
    switcher = {
        0: date_list[1],
        1: date_list[2],
        2: date_list[3],
        3: date_list[4],
        4: date_list[5],
        5: date_list[6],
        6: date_list[7],
        7: date_list[8],
        8: date_list[9],
        9: date_list[10],
        10: date_list[11],
        11: date_list[12],
        12: ''
    }

    return switcher.get(value, date_list[0])


def setX(temp, position):
    n = int(temp / 26)
    x = switch_case(n)
    return x


def setY(temp, position):
    y = int(-(temp / 4 - 50))
    if y > 0:
        y = 'N' + str(y) + '$^{\circ}$'
    elif y == 0:
        y = str(y) + '$^{\circ}$'
    else:
        y = 'S' + str(-y) + '$^{\circ}$'
    return y


# Set a title fun.
def set_cli():
    cliPar = ['Average of Week Ending: 2015-2020 GMI Hovmoller Diagram']
    return cliPar


# Set a function of 6 units.
def set_units():
    units = ['Rain Rate (10$^{-2}$ mm/hr)']
    return units


# Modify the colorabar "jet" to get the color you want
def get_spectral():
    # Create a new array to store color values
    colormap_float = np.zeros((256, 3), np.float64)
    # Some color values are customized, and the author can set them as needed
    for i in range(0, 256, 1):
        colormap_float[i, 0] = cm.jet(i)[0] * 255.0
        colormap_float[i, 1] = cm.jet(i)[1] * 255.0
        colormap_float[i, 2] = cm.jet(i)[2] * 255.0
        # Assign the original "jet" color to the colormap_ In float
        # Some color values are customized, and the author can set them as needed
        # colormap_float[250:256, :] = [0, 0, 0]
    return colormap_float


# Set a function of read *.gz files
def read_gz_file(path):
    contents = []
    if os.path.exists(path):
        with gzip.open(path, 'rb') as fp:
            contents = fp.read()
    else:
        print('File does not exist!')
    return contents


def rain_rate_nomal(rain_rate):
    valid_value = np.where(rain_rate <= 250)
    min_value = np.round(np.min(rain_rate[valid_value]) * scale)
    max_value = np.round(np.max(rain_rate[valid_value]) * scale)
    mean_value = np.round(np.mean(rain_rate[valid_value]) * scale)
    rain_rate[valid_value] = rain_rate[valid_value] * scale
    return min_value, mean_value, max_value, rain_rate


def mean_line(file):
    data = read_gz_file(file)
    data = np.array(bytearray(data)).reshape(6, 720, 1440)
    # Draw 6 images of every month using for loop.
    rain_rate = data[5, :, :]
    rain_rate_flip = np.flip(rain_rate, 0)
    rain_rate_min, rain_rate_mean, rain_rate_max, rain_rate = rain_rate_nomal(rain_rate_flip)

    # data_region1 = np.array(rain_rate[159:559, 119:1319])
    data_region2 = np.array(rain_rate[159:559, 599:719])
    valid_value = np.where(data_region2 <= 250)
    mean_line = []
    for i in data_region2:
        tmean = stats.tmean(i, (0, 250))
        mean_line.append(tmean)
    return mean_line


# Set a image drawding function.
def draw_fig(data, output_path):
    # Call the custom function to get large color, colormap_ Float is the array we want
    colormap_float = get_spectral()
    # Set color table and convert the obtained RGB value into the format of hash table, which I named 'sst cmap'
    rgb_table = LinearSegmentedColormap.from_list('hovmoller cmap', colormap_float / 255.0)
    # Show Image and set display box properties
    plt.figure("Show Image")
    sc = set_cli()
    su = set_units()
    plt.tight_layout(rect=(0, 0, 1, 0.9))
    plt.xlabel('Time', fontsize=12)
    plt.ylabel('Latitude', fontsize=12)
    plt.title(sc[0], fontsize=12, y=1.02)
    plt.text(400, 300, su[0], size=12, rotation=270)
    lon_x = np.linspace(0, 313, 313)
    lat_y = np.linspace(0, 400, 400)
    lx, ly = np.meshgrid(lon_x, lat_y)

    min_value = np.round(np.min(data))
    mean_value = np.round(np.mean(data))
    max_value = np.round(np.max(data))
    print(min_value, mean_value, max_value)
    # data[np.where(data <= 0.3)] = 255 * (data[np.where(data <= 0.3)] - min_value) / (max_value - min_value)
    # data[np.where(data > 0.3)] = 255
    data_img = data * 100 + 20
    # Set a color bar.
    min_data_img = 0.
    max_data_img = 100.
    # cf = plt.contour(lx, ly, data_img, range(int(min_data_img), int(max_data_img), 1), colors='black', linewidth=0.5)
    cd = plt.contourf(lx, ly, data_img, range(int(min_data_img), int(max_data_img), 1), cmap=rgb_table)
    # Set x,y axis.
    tick_spacing = 26
    plt.gca().xaxis.set_major_formatter(FuncFormatter(setX))
    plt.gca().xaxis.set_major_locator(ticker.MultipleLocator(tick_spacing))
    plt.xticks(rotation=45, fontsize=8)
    plt.gca().yaxis.set_major_formatter(FuncFormatter(setY))
    plt.yticks(fontsize=12)
    plt.axis('on')
    # Show images and colorbar.
    plt.imshow(data_img, cmap=rgb_table)
    plt.colorbar(cd, orientation='vertical', spacing='proportional')
    plt.grid(linestyle='-.', color='darkgray', which='major')
    # Save and show.
    plt.savefig(output_path + '150°E-180°E 50°S-50°N' + '.jpg', bbox_inches='tight', dpi=1200)
    plt.show()


# Set a main function to call other function
if __name__ == '__main__':
    # Set the number of row and col.
    row = int(300 / 0.25)
    col = int(100 / 0.25)
    # Set scale.
    scale = 0.1
    postfix = '.gz'
    date_list = ['20150103', '20150110', '20150117', '20150124', '20150131', '20150207', '20150214', '20150221',
                 '20150228', '20150307', '20150314', '20150321', '20150328', '20150404', '20150411', '20150418',
                 '20150425', '20150502', '20150509', '20150516', '20150523', '20150530', '20150606', '20150613',
                 '20150620', '20150627', '20150704', '20150711', '20150718', '20150725', '20150801', '20150808',
                 '20150815', '20150822', '20150829', '20150905', '20150912', '20150919', '20150926', '20151003',
                 '20151010', '20151017', '20151024', '20151031', '20151107', '20151114', '20151121', '20151128',
                 '20151205', '20151212', '20151219', '20151226', '20160102', '20160109', '20160116', '20160123',
                 '20160130', '20160206', '20160213', '20160220', '20160227', '20160305', '20160312', '20160319',
                 '20160326', '20160402', '20160409', '20160416', '20160423', '20160430', '20160507', '20160514',
                 '20160521', '20160528', '20160604', '20160611', '20160618', '20160625', '20160702', '20160709',
                 '20160716', '20160723', '20160730', '20160806', '20160813', '20160820', '20160827', '20160903',
                 '20160910', '20160917', '20160924', '20161001', '20161008', '20161015', '20161022', '20161029',
                 '20161105', '20161112', '20161119', '20161126', '20161203', '20161210', '20161217', '20161224',
                 '20161231', '20170107', '20170114', '20170121', '20170128', '20170204', '20170211', '20170218',
                 '20170225', '20170304', '20170311', '20170318', '20170325', '20170401', '20170408', '20170415',
                 '20170422', '20170429', '20170506', '20170513', '20170520', '20170527', '20170603', '20170610',
                 '20170617', '20170624', '20170701', '20170708', '20170715', '20170722', '20170729', '20170805',
                 '20170812', '20170819', '20170826', '20170902', '20170909', '20170916', '20170923', '20170930',
                 '20171007', '20171014', '20171021', '20171028', '20171104', '20171111', '20171118', '20171125',
                 '20171202', '20171209', '20171216', '20171223', '20171230', '20180106', '20180113', '20180120',
                 '20180127', '20180203', '20180210', '20180217', '20180224', '20180303', '20180310', '20180317',
                 '20180324', '20180331', '20180407', '20180414', '20180421', '20180428', '20180505', '20180512',
                 '20180519', '20180526', '20180602', '20180609', '20180616', '20180623', '20180630', '20180707',
                 '20180714', '20180721', '20180728', '20180804', '20180811', '20180818', '20180825', '20180901',
                 '20180908', '20180915', '20180922', '20180929', '20181006', '20181013', '20181020', '20181027',
                 '20181103', '20181110', '20181117', '20181124', '20181201', '20181208', '20181215', '20181222',
                 '20181229', '20190105', '20190112', '20190119', '20190126', '20190202', '20190209', '20190216',
                 '20190223', '20190302', '20190309', '20190316', '20190323', '20190330', '20190406', '20190413',
                 '20190420', '20190427', '20190504', '20190511', '20190518', '20190525', '20190601', '20190608',
                 '20190615', '20190622', '20190629', '20190706', '20190713', '20190720', '20190727', '20190803',
                 '20190810', '20190817', '20190824', '20190831', '20190907', '20190914', '20190921', '20190928',
                 '20191005', '20191012', '20191019', '20191026', '20191102', '20191109', '20191116', '20191123',
                 '20191130', '20191207', '20191214', '20191221', '20191228', '20200104', '20200111', '20200118',
                 '20200125', '20200201', '20200208', '20200215', '20200222', '20200229', '20200307', '20200314',
                 '20200321', '20200328', '20200404', '20200411', '20200418', '20200425', '20200502', '20200509',
                 '20200516', '20200523', '20200530', '20200606', '20200613', '20200620', '20200627', '20200704',
                 '20200711', '20200718', '20200725', '20200801', '20200808', '20200815', '20200822', '20200829',
                 '20200905', '20200912', '20200919', '20200926', '20201003', '20201010', '20201017', '20201024',
                 '20201031', '20201107', '20201114', '20201121', '20201128', '20201205', '20201212', '20201219',
                 '20201226']
    input_path = r'/Users/leo/Desktop/MarineTechTest7/Data/'
    output_path = r'/Users/leo/Desktop/MarineTechTest7/Results/Img/'
    if not os.path.exists(output_path):
        os.mkdir(output_path)
    file_list = os.listdir(input_path)
    mean_line_list = []
    for k in date_list:
        for i in file_list:
            if i.endswith(postfix) and i[4:].startswith(k):
                file = input_path + i
                mean_line_single = mean_line(file)
                mean_line_list.append(mean_line_single)
    print(mean_line_list, len(mean_line_list), sep='\n')
    mean_line_stack = np.vstack(mean_line_list).T
    print(mean_line_stack, mean_line_stack.shape)
    data = mean_line_stack
    im = Image.fromarray(data)
    im.save('/Users/leo/Desktop/test.tiff')
    # Call the draw_fig() function to draw the images.
    draw_fig(mean_line_stack, output_path)
```

# 结果与总结：

## 结果展示
![2015-2020年30°W - 30°E ， 50°S to 50°N区域GMI 周平均降雨率数据Hovmoller分布图](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/GMI_RainRate/30%C2%B0W-30%C2%B0E50%C2%B0S-50%C2%B0N.jpg)
![2015-2020年150°E - 180°E， 50°S to 50°N区域GMI 周平均降雨率数据Hovmoller分布图](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/GMI_RainRate/150%C2%B0E-180%C2%B0E50%C2%B0S-50%C2%B0N.jpg)

## 结论与分析
在GMI的周平均降雨率数据的Hovmoller分布图中，可以看出：
- 太平洋中部地区在纬度范围的垂向分布，表明在赤道的热带附近的平均降雨率达到最大值，南北纬23.5o-40o附近的亚热带地区平均降雨率次之，其他地区的平均降雨率较少。
- 从时间上分析，2015-2020年的平均降雨率呈现季节性周期变化，在6月-8月的北半球夏季，南半球冬季，平均降雨率峰值部分向北半球移动；而在12月-2月的北半球冬季，南半球夏季，平均降雨率峰值向南半球移动。
- 而不同经度范围的两幅图对比表明，选择的经度范围越大，平均降雨率的季节性周期变化越明显。
