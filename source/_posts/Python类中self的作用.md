---
title: Python类中self的作用
description: Python面向对象学习中对类与self的理解记录。
cover: >-
  https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/handbyhand.jpeg
abbrlink: fe82aeb3
date: 2022-05-03 09:50:37
tags: Python
categories: 程序代码
---

## self定义。
要想理解self就首先要理解Python中的类，不信的话，先看看他的定义：self是对象的载体，可以理解为一个储存实例化对象属性的字典（dict），self储存属性，而没有动作执行，self总是指向调用时类的实例。（怎么样，还行吧！）

## 什么是类。

类是创建实例的模板，而实例则是一个一个具体的对象，各个实例拥有的数据都相互独立、互不影响；方法是与实例绑定的函数，和普通的函数不同，方法可以直接访问实例的数据。也就是说方法（method）是类（class）中的函数（function）。

## self的通俗理解。

self简言之就是把类（class）中定义的变量和方法（method）变成实例变量和实例方法，即把抽象的编程具体的：具体的学生，XXX（姓名）=抽象的人。作为类的成员，使得成员间能互相调用（变量，方法），互相传递（变量，方法）。而不需要从外部调用数据（即变量）和方法（即函数），以实现数据的封装。

怎么样，self是不是很厉害呢？下面这篇文章写的很好，可以借鉴呢。

> 参考文献：

[Python中的self详细解析](https://zhuanlan.zhihu.com/p/356325860)



