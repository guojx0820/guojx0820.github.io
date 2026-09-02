---
title: C++编程基础
description: 本文是对C++基础的回顾与复习，只作记录。
cover: https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/bg_beauty1.jpeg
toc_number: true
toc: true
abbrlink: 4360a9bd
date: 2022-04-22 20:22:02
tags: C++
categories: 程序代码
---
# C++学习基础
## C++学习计划

（1）基础语法（复习）——初步了解，基础编程
（2）核心编程——面向对象
（3）提高编程——泛型编程，STL

## C++编程流程（Clion）

（1）创建项目
（2）创建文件
（3）编写代码
（4）运行程序

## 变量

作用：给一段指定的内存空间取名，以方便操作这段内存，管理内存空间
语法：数据类型 变量名 = 初始值;
![变量与内存图示](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Cpp%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/%E5%8F%98%E9%87%8F%E4%B8%8E%E5%86%85%E5%AD%98%E5%9B%BE%E7%A4%BA.png)

>注意：
1、C++关键字不能用做变量名标识符
常用的关键字如下：
![C++关键字](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Cpp%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/C%2B%2B%E5%85%B3%E9%94%AE%E5%AD%97.png)
2、标识符是有字母、数字、下划线组成
3、标识符的第一个字符只能是字母或者下划线，不能是数字
4、标识符区分大小写
**建议：在给变量命名之时，最好能够见名知义**

## 常量

常量的定义方式通常有两种：
1、#define 宏常量：#define 常量名 常量值
（注：#define定义的宏常量一般放在函数之外或者开头）
2、const修饰的变量：const 变量类型 变量名 = 变量值
（注：变量分全局变量和局部变量……)

> 示例代码：

```c++
// Created by Leo on 2022/4/8.
//
#include <iostream>

using namespace std;
//常量的定义方式有
//1、define宏常量
//2、const修饰的变量

//1、define宏常量，不能修改,一旦修改就会报错
#define Day 24 //定义一个常量，#define 常量名 常量值
#define Week 7 //定义一个常量，#define 常量名 常量值
#define Year 12 //定义一个常量，#define 常量名 常量值

int main() {
//    2、const修饰的变量也被定义为常量
    const int Month = 30; //定义一个变量，数据类型 变量名 = 变量初始值
//    Month = 31;

    /*分别输出
     * 一天，
     * 一周，
     * 一年的时间*/
    cout << "一天有" << Day << "小时" << endl;
    cout << "一周有" << Week << "天" << endl;
    cout << "一月有" << Month << "天" << endl;
    cout << "一年有" << Year << "月" << endl;
    return 0;
}
```

## 数据类型

>**作用：在给变量分配内存时 ，需要给其一个合理的内存空间**

1、整形
int：整形；
short：短整形
long：长整形
long long：长长整形
![整型所占用的内存空间分配](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/Cpp%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80/%E6%95%B4%E5%9E%8B%E6%89%80%E5%8D%A0%E7%94%A8%E7%9A%84%E5%86%85%E5%AD%98%E7%A9%BA%E9%97%B4%E5%88%86%E9%85%8D.png)

> 示例代码：

```c++
//
// Created by Leo on 2022/4/8.
//
#include<iostream>

using namespace std;

int main() {
//    1、短整型(值的范围为：-32768～32767)
    short num1 = 32767;
//    2、整型
    int num2 = 32768;
//    3、长整型
    long num3 = 10;
//    4、长长整型；
    long long num4 = 10;

    cout << "输出的数据类型" << endl;
    cout << "num1 = " << num1 << endl;
    cout << "num2 = " << num2 << endl;
    cout << "num3 = " << num3 << endl;
    cout << "num4 = " << num4 << endl;
    return 0;
}
```



2、实型
（1）单精度：float
（2） 双精度：double
float 变量名 = 变量值f;
double 变量名 = 变量值;

>示例代码：

```c++
// Created by Leo on 2022/4/21.
//
#include <iostream>

using namespace std;

int main() {

//    1、单精度
//    2、双精度
//    C++中默认输出的数字位数为6位有效数字
    float f1 = 3.1415966f;
    cout << "f1 = " << f1 << endl; //占用4个字节

    double d1 = 3.1415966;
    cout << "d1 = " << d1 << endl; //占用8个字节

    cout << "f1占用的内存空间为" << sizeof(f1) << "个字节" << endl;
    cout << "d1占用的内存空间为" << sizeof(d1) << "个字节" << endl;

//    3、科学计数法
    float f2 = 1e4; //10000
    float f3 = 1e-4; //0.0001
    cout << "f2 = " << f2 << endl;
    cout << "f3 = " << f3 << endl;
}
```

3、字符型
作用：字符型变量用于显示单个字符
语法：char 变量名 = '变量值';

> 代码实例：

```c++
//
// Created by Leo on 2022/4/21.
//
#include <iostream>

using namespace std;

int main() {
//1、字符型变量创建方式
    char ch = 'A';
    cout << "ch = " << ch << endl;
//2、字符型变量所占内存的大小
    cout << "字符型变量所占内存大小为" << sizeof(ch) << "个字节" << endl;
//3、字符型变量常见的错误
//    char ch1 = 'abc'; //字符型变量''内不能存放多个字符，放一个字符
//    char ch1 = "a"; //字符型变量不能用双引号
//  a的ASCII码为97
//  A的ASCII码为65
    cout << "所对应的ASCII码数值为" << (int) ch << endl;
}
```



