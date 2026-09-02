---
title: OpenCV图像读取与显示
tags: Python数字图像处理
cover: >-
  https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Python%E6%95%B0%E5%AD%97%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86%E5%9F%BA%E7%A1%80%E4%B9%8BOpenCV%E5%9B%BE%E5%83%8F%E8%AF%BB%E5%8F%96%E4%B8%8E%E6%98%BE%E7%A4%BA/hefu.jpeg
description: OpenCV是一个强大的图像处理的函数库，里面包含了数种经典函数，用于数字图像处理程序的调用。
categories: 程序代码
abbrlink: 8063fed6
date: 2022-05-13 23:25:17
---

## OpenCV简介

OpenCV是一个强大的图像处理的函数库，里面包含了数种经典函数，用于数字图像处理程序的调用。

## 数字图像处理

将图像数字化称为数字图像，将数字图像进行转化成多维数组，进行数学上的统计与计算，用以提高图像质量以便增加人眼的识别效果的方法成为数字图像处理。其中Python数字图像处理非常流行，如今已经有机器学习，卷积神经网络，深度学习等算法在计算机视觉，遥感与摄影测量等领域应用。

## 代码详解

> 方法一：

```python
import cv2
# import numpy as np

'''
在读取真彩色RGB三波段图像时，需要用到openCV开源库中的函数，较为方便，但也可以自己写函数处理，openCV是专门用于图像处理的开源库，
应用较为方便简单所以本程序应用到了其split函数，就是为了分出图像的三个通道。
'''
# Step 1：读取图像并显示保存
# 读取图像，应用openCV的imread函数
img = cv2.imread("Typhoon Chanthu image09182021_500m.jpeg")
# 显示图像，应用openCV的imshow函数
cv2.imshow("Color", img)
# 利用openCV的split函数将彩色图像的R、G、B三个波段的灰度图分开，并将其值赋给b,g,r
# 在此需要注意的是，第n波段是图像的第3维信息，在python中顺序是从0开始的，所以波段对应为0对应b（蓝波段），
# 1对应g（绿波段），2对应r（红波段）
b, g, r = cv2.split(img)
# 分别显示三个波段的图像，显示框标题分别设为："Blue 1"，"Green 1"，"Red 1"
cv2.imshow("Blue", b)
cv2.imshow("Green", g)
cv2.imshow("Red", r)

# 分别将图像的三个波段写出
cv2.imwrite("typtoon_r.jpg", r)
cv2.imwrite("typtoon_g.jpg", g)
cv2.imwrite("typtoon_b.jpg", b)
# 这里出现了error，如果需要显示图像窗口时，如imshow图像的时候，需要加上cv2.waitKay()函数，控制着imshow的持续时间
# 其中waitKay()函数中的参数值代表弛豫时间，0和不填代表无限制时间，也就是说，图像显示窗口无限制时间显示。若是其他数字，
# 则是以毫秒为计数单位，写多少就代表图像显示多少毫秒。需要注意的是，窗口显示图像时，按任意键会结束显示。
cv2.waitKey(1)
# cv2.destroyAllWindows() 用来删除窗口的，（）里不指定任何参数，则删除所有窗口，删除特定的窗口，往（）输入特定的窗口值。
cv2.destroyAllWindows()

# Step 2 读取各个波段的像素值
# 首先打印图像的信息
print("图像形状大小：")
print(img.shape)
print("图像像素数目：")
print(img.size)
print("图像数据类型：")
print(img.dtype)

# 打印像素点（左上角）(0,0)的各个通道值，在此item()函数则是字典函数，遍历图像找到图像中的像素值
print("像素点(0,0)的R通道值为：")
print(img.item(0, 0, 2))
print("像素点(0,0)的G通道值为：")
print(img.item(0, 0, 1))
print("像素点(0,0)的B通道值为：")
print(img.item(0, 0, 0))

# 打印像素点(838, 757)的各个通道值
print("像素点(838,757)的R通道值为：")
print(img.item(838, 757, 2))
print("像素点(838,757)的G通道值为：")
print(img.item(838, 757, 1))
print("像素点(838,757)的B通道值为：")
print(img.item(838, 757, 0))

# 打印像素点(726, 1287)的各个通道值
print("像素点(726,1287)的R通道值为：")
print(img.item(726, 1287, 2))
print("像素点(726,1287)的G通道值为：")
print(img.item(726, 1287, 1))
print("像素点(726,1287)的B通道值为：")
print(img.item(726, 1287, 0))

# 打印像素点(2096, 1870)的各个通道值
print("像素点(2096,1870)的R通道值为：")
print(img.item(2096, 1870, 2))
print("像素点(2096,1870)的G通道值为：")
print(img.item(2096, 1870, 1))
print("像素点(2096,1870)的B通道值为：")
print(img.item(2096, 1870, 0))

# 打印像素点(2168, 2014)的各个通道值
print("像素点(2168,2014)的R通道值为：")
print(img.item(2168, 2014, 2))
print("像素点(2168,2014)的G通道值为：")
print(img.item(2168, 2014, 1))
print("像素点(2168,2014)的B通道值为：")
print(img.item(2168, 2014, 0))

```

> 方法二：

```python
import cv2
# from PIL import Image
import numpy as np
'''
在提取图像中的像素值时，首先需要将图像转化为数组，对数组进行提取，因此需要用到numpy库。
'''
# Step 1：读取图像，并显示和储存
img = cv2.imread("Typhoon Chanthu image09182021_500m.jpeg")
cv2.imshow("Color 2", img)


# cv2.imshow("img",img)
# b, g, r = cv2.split(img)
# cv2.imshow("Blue 1", b)
# cv2.imshow("Green 1", g)
# cv2.imshow("Red 1", r)
# cv2.waitKey()
# cv2.destroyAllWindows()
# 此处没有用openCV中的split函数进行RGB图的拆分，而是定义了三个拆分函数，其效果与split函数一致。
# 第一函数get_red(),输入参数为三波段RGB图像，其中2，1，0分别对应蓝，绿，红三个波段
def get_red(img):
    redImg = img[:, :, 2]
    return redImg


def get_green(img):
    greenImg = img[:, :, 1]
    return greenImg


def get_blue(img):
    blueImg = img[:, :, 0]
    return blueImg


# 应用上述定义函数进行波段赋值
b = get_blue(img)
g = get_green(img)
r = get_red(img)
# 再将三个波段用窗口展示
cv2.imshow("Blue 2", b)
cv2.imshow("Green 2", g)
cv2.imshow("Red 2", r)
# 分别将图像的三个波段写出
cv2.imwrite("typtoon2_r.jpg", r)
cv2.imwrite("typtoon2_g.jpg", g)
cv2.imwrite("typtoon2_b.jpg", b)
# 定义弛豫时间，按任意键结束
cv2.waitKey()
# 关闭窗口
cv2.destroyAllWindows()

# Step 2：获取图像的像素值
# 首先打印图像的信息
print("图像形状大小：")
print(img.shape)
print("图像像素数目：")
print(img.size)
print("图像数据类型：")
print(img.dtype)

# 此为第二种获取图像像素值的方法，需要将图像先转化为三维数组np.array(),然后输出数组对应的值来获取图像的像素值
# 将图像转化为数组
img_array = np.array(img)
# 利用数组的位置（三维坐标）来获取所需的像素值

# 打印像素点（左上角）(0,0)的各个通道值
print("像素点(0,0)的R通道值为：")
print(img_array[0, 0, 2])
print("像素点(0,0)的G通道值为：")
print(img_array[0, 0, 1])
print("像素点(0,0)的B通道值为：")
print(img_array[0, 0, 0])

# 打印像素点(838, 757)的各个通道值
print("像素点(838,757)的R通道值为：")
print(img_array[838, 757, 2])
print("像素点(838,757)的G通道值为：")
print(img_array[838, 757, 1])
print("像素点(838,757)的B通道值为：")
print(img_array[838, 757, 0])

# 打印像素点(726, 1287)的各个通道值
print("像素点(726,1287)的R通道值为：")
print(img_array[726, 1287, 2])
print("像素点(726,1287)的G通道值为：")
print(img_array[726, 1287, 1])
print("像素点(726,1287)的B通道值为：")
print(img_array[726, 1287, 0])

# 打印像素点(2096, 1870)的各个通道值
print("像素点(2096,1870)的R通道值为：")
print(img_array[2096, 1870, 2])
print("像素点(2096,1870)的G通道值为：")
print(img_array[2096, 1870, 1])
print("像素点(2096,1870)的B通道值为：")
print(img_array[2096, 1870, 0])

# 打印像素点(2168, 2014)的各个通道值
print("像素点(2168,2014)的R通道值为：")
print(img_array[2168, 2014, 2])
print("像素点(2168,2014)的G通道值为：")
print(img_array[2168, 2014, 1])
print("像素点(2168,2014)的B通道值为：")
print(img_array[2168, 2014, 0])
```



## 结果展示

> （1）RGB真彩色影像

![RGB真彩色影像](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Python%E6%95%B0%E5%AD%97%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86%E5%9F%BA%E7%A1%80%E4%B9%8BOpenCV%E5%9B%BE%E5%83%8F%E8%AF%BB%E5%8F%96%E4%B8%8E%E6%98%BE%E7%A4%BA/TyphoonChanthuimage09182021_500m.jpeg)

> （2）红色通道R

![红色通道R](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Python%E6%95%B0%E5%AD%97%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86%E5%9F%BA%E7%A1%80%E4%B9%8BOpenCV%E5%9B%BE%E5%83%8F%E8%AF%BB%E5%8F%96%E4%B8%8E%E6%98%BE%E7%A4%BA/R.png)

> （3）绿色通道G

![绿色通道G](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Python%E6%95%B0%E5%AD%97%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86%E5%9F%BA%E7%A1%80%E4%B9%8BOpenCV%E5%9B%BE%E5%83%8F%E8%AF%BB%E5%8F%96%E4%B8%8E%E6%98%BE%E7%A4%BA/G.png)

> （4）蓝色通道B

![蓝色通道B](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Python%E6%95%B0%E5%AD%97%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86%E5%9F%BA%E7%A1%80%E4%B9%8BOpenCV%E5%9B%BE%E5%83%8F%E8%AF%BB%E5%8F%96%E4%B8%8E%E6%98%BE%E7%A4%BA/B.png)

> 代码与结果详见：

[![OpenCVImgReadAndShow](https://github-readme-stats.vercel.app/api/pin/?username=guojx0820&repo=OpenCVImgReadAndShow&theme=radical)](https://github.com/guojx0820/OpenCVImgReadAndShow)





