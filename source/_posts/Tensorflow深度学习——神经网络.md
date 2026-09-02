---
title: Tensorflow深度学习——神经网络
tags: 深度学习
description: 本文调用Python的Tensorflow深度学习库，对keras中的手写数字数据集利用神经网络进行训练，测试与验证识别。
cover: 'https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/CNN/DNN_top.jpeg'
categories: 程序代码
sticky: 1
abbrlink: 6f5df5c1
date: 2023-07-31 22:20:11
---
# Tensorflow介绍
TensorFlow 是一个采用数据流图(data flow graphs)，用于数值计算的开源软件库。TensorFlow 最初由Google大脑小组(隶属于Google机器智能研究机构)的研究员和工程师们开发出来，用于机器学习和深度神经网络方面的研究，但这个系统的通用性使其也可广泛用于其他计算领域。它是谷歌基于DistBelief进行研发的第二代人工智能学习系统。2015年11月9日，Google发布人工智能系统TensorFlow并宣布开源。

其命名来源于本身的原理，Tensor(张量)意味着N维数组，Flow(流)意味着基于数据流图的计算。Tensorflow运行过程就是张量从图的一端流动到另一端的计算过程。张量从图中流过的直观图像是其取名为“TensorFlow”的原因。

TensorFlow的关键点是：“Data Flow Graphs”，表示TensorFlow是一种基于图的计算框架，其中节点（Nodes）在图中表示数学操作，线（Edges）则表示在节点间相互联系的多维数据数组，即张量（Tensor），这种基于流的架构让TensorFlow具有非常高的灵活性，该灵活性也让TensorFlow框架可以在多个平台上进行计算，例如：台式计算机、服务器、移动设备等。

# 激活函数
## Softmax
![Softmax函数](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/CNN/softmax.png)
## Sigmoid
![Sigmoid函数](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/CNN/sigmoid.png)
## ReLU
![ReLU函数](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/CNN/relu.png)
# 独热编码及其转化
对于离散型数据，比如一个特征为颜色，他一共有三个值，分别为红，蓝，绿，按照正常想法，我们可能认为，令红色=0，蓝色=1，绿色=2，这样对数据进行了编码，但是，如果把这些数据放到需要计算距离的或者其他模型中，模型会认为重要性是绿色＞蓝色＞红色。但这并不是我们的让机器学习的本意，只是想让机器区分它们，并无大小比较之意。所以这时标签编码是不够的，需要进一步转换。我们可以设置，这个特征有三个取值，我们可以设置三列，分别是红，蓝，绿，对于红色，它的取值是1，0，0，对于蓝色，它的取值是0，1，0，而对于绿色，它的取值是0，0，1。如此一来每两个向量之间的距离都是根号2，在向量空间距离都相等，所以这样不会出现偏序性，基本不会影响基于向量空间度量算法的效果。
# 模型层级结构

## 输入层
## 展平层
## 隐藏层
## 全连接层

![DNN全连接神经网络](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/CNN/DNN.png)

表1 模型参数信息 Model: "sequential"

|Layer (type) |               Output Shape   |           Param #|
|:----:|:----:|:----:|
|flatten (Flatten)  |         (None, 784)   |            0|
|dense (Dense)     |          (None, 64)       |         50240|
|dense_1 (Dense) |            (None, 10)      |          650|
>Total params: 50,890
> 
>Trainable params: 50,890
> 
>Non-trainable params: 0
_________________________________________________________________
# 损失（Loss）函数及准确率
深度学习中的所有学习算法都必须有一个 最小化或最大化一个函数，称之为损失函数（loss function），或“目标函数”、“代价函数”。损失函数是衡量模型的效果评估。比如：求解一个函数最小点最常用的方法是梯度下降法。

比如（：全批量梯度下降 Batch GD、随机梯度下降 SGD、小批量梯度下降 mini-batch GD、Adagrad法，Adadelta法、Adam法等）。损失函数就像起伏的山，梯度下降就像从山上滑下来到达最底部的点。
# 代码实现及注解
```python
# -*- coding: utf-8 -*-
'''
@Time ： 2023/7/18 16:55
@Auth ： Guo Jiaxiang
@Blog : https://www.guojxblog.cn
@GitHub : https://github.com/guojx0820
@Email : guojx0820@gmail.com
'''
import tensorflow as tf
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

(train_images, train_labels), (test_images, test_labels) = tf.keras.datasets.mnist.load_data()
# 数据归一化：0-255-->0-1
plt.imshow(train_images[0])
plt.savefig('output_img/train.png', dpi=300)
train_images = train_images / 255
test_images = test_images / 255
# 加载labels
train_labels = np.array(pd.get_dummies(train_labels))
test_labels = np.array(pd.get_dummies(test_labels))
# 顺序结构的模型搭建
model = tf.keras.Sequential()
model.add(tf.keras.layers.Flatten(input_shape=(28, 28)))  # 展平层
model.add(tf.keras.layers.Dense(64, activation='sigmoid'))  # 隐藏层，激活函数sigmoid
model.add(tf.keras.layers.Dense(10, activation='softmax'))  # 全连接层，激活函数softmax
model.summary()  # 模型预览
# 设置优化器，损失函数和记录准确率
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['acc'])
# 载入训练集，验证机，设置训练轮次
history = model.fit(train_images, train_labels, epochs=10, validation_data=(test_images, test_labels))
model.evaluate(test_images, test_labels)
```
![手写数据集示例](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/CNN/write.png)
![10 Epoches训练](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/CNN/10epoch.png)




