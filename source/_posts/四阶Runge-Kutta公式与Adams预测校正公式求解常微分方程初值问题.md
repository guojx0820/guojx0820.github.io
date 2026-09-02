---
title: 四阶Runge-Kutta公式与Adams预测校正公式求解常微分方程初值问题
tags: Python数值分析
categories: 程序代码
description: 本程序用经典四阶Runge-Kutta公式与Adams预测校正公式求解初值问题
cover: >-
  https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/bubble.jpg
abbrlink: 330ac4a4
date: 2022-06-01 09:36:19
---
# 实验内容

取步长h=0.1，用经典四阶Runge-Kutta 公式与Adams预测校正公式求解初值问题
<img src="https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/Topic_DifferEqua.png" style="zoom:72%;" />
的数值解，并通过列表与画图将计算结果与精确解
<img src="https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/Topic_True.png" style="zoom:72%;" />
进行比较。

# 算法原理

## 经典四阶Runge-Kutta公式

一阶常微分方程初值问题

<img src="https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/formula1.png" style="zoom:80%;" />

的数值解法是近似计算中很重要的部分。
常微分方程初值问题的数值解法是求方程(8.1)的解在点列xn=xn-1+hn(n=0,1,…)上的近似值yn， 这里hn是xn-1到xn的步长，一般略去下标记为h。
常微分方程初值问题的数值解法一般分为两大类：
(1)单步法：这类方法在计算yn时，只用到xn+1、xn和yn,即前一步的值。因此,在有了初值以后就可以逐步往下计算。典型方法如龙格——库塔(Runge-Kutta)方法。
(2)多步法：这类方法在计算yn+1时，除用到xn+1、xn和yn以外，还要用
Yn-p(p=1,2,…,k;k > 0)，即前面k步的值。典型方法如Adams方法。
Runge-Kutta方法的优点是：单步法、精度高，计算过程便于改变步长，缺点是计算量较大，每前进一步需要计算四次函数值f。
经典的Runge-Kutta方法是一个四阶的方法，它的计算公式是:

<img src="https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/formula2.png" style="zoom:80%;" />

## Adams预测校正公式

仿照改进的欧拉格式的构造方法，将显式和隐式两种亚当姆斯格式相匹配，构成下列亚当姆斯预测-校正公式:
![](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/formula3.png)
亚当姆斯预测-校正方法在计算yn+1时，除用到xn+1、xn和yn以外，还要用Yn-p(p=1,2,…,k;k > 0)，即前面k步的值。在实际计算时，可借助于某种单步法，如四阶龙格-库塔格式为预测——校正公式提供开始值y1,y2,y3 。
<img src="https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/formula4.png" style="zoom:80%;" />
之后利用亚当姆斯预测——校正公式求解之后的节点的值。由于亚当姆斯预测——校正公式中预报公式与校正公式具有同等精度，因此可以基于其截断误差估计及误差补偿的思想，可以提供一种提高精度的有效方法。

# 程序框图

<img src="https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/runge_kutta.png" alt="图1 四阶经典龙格——库塔公式算法流程图" style="zoom:60%;" />

<img src="https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/adams.png" alt="图2 亚当姆斯预测校正公式算法流程图" style="zoom:72%;" />

# 编程实现

本次程序采用Python的面向对象方法进行编写，其中对算法的理解以及计算微分方程数值方法公式的推导是本程序的难点所在。

利用所编程序，确定并计算题目中所给微分方程的数值解:

以下将用Python进行编程实验，分别利用四阶经典龙格——库塔公式与亚当姆斯预测校正公式对题目中所要求的微分方程初值问题进行求解，最后进行结果分析与讨论。

Python代码详解及运行结果如下：

## 代码详解

> **Runge_Kutta_Adams.py:** **龙格-****库塔与亚达姆斯公式求解微分方程文件。**

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/5/29 9:16 下午
# @Author  : Leo
# @FileName: Runge_Kutta_Adams.py
# @Software: PyCharm
# @Blog    ：https://guojxblog.cn
# @GitHub  ：https://github.com/guojx0820
# @Email   ：guojiaxiang0820@gmail.com
import numpy as np



class RungeKutta_AdamsSolvingOrdinaryDifferentialEquations:
    """
    用龙格库塔与亚当姆斯方法求解常微分方程，并做对比分析
    """

    def __init__(self, equs_fxy, sol_interval, y0, h_step):
        self.equs_fxy = equs_fxy  # 需要求解的微分方程，y'=f(x,y),f的格式：
        '''
        def f(x,y):
            ...
            return dy
        '''
        if len(sol_interval) == 2:
            self.a, self.b = sol_interval[0], sol_interval[1]  # 求解区间，a，b分别为起始值和终止值
        else:
            raise ValueError("求解区间参数设置不规范，应为[a, b].")
        self.y0 = y0  # 初值,起始条件，y0=y(0)
        self.h = h_step  # 求解步长（区间[a,b]n等分）
        self.n = round(abs(self.b - self.a) / self.h)  # 节点
        self.true_value = None  # 方程的真值

    def _Ord4Runge_Kutta(self):  # 四阶古典Ｒｕｎｇｅ—Ｋｕｔｔａ公式
        y = np.zeros((self.n, 1))
        x = np.zeros((self.n, 1))

        y[0] = self.y0
        x[0] = self.a
        K1, K2, K3, K4 = 0, 0, 0, 0  # 初始化K
        print("%4s %9s %8s %10s"%("x_n", "4阶龙格-库塔", "精确解", "误差"))
        for i in range(1, self.n, 1):
            x[i] = self.a + i * self.h
            K1 = self.equs_fxy(x[i - 1], y[i - 1])
            K2 = self.equs_fxy(x[i - 1] + 1 / 2 * self.h, y[i - 1] + 1 / 2 * self.h * K1)
            K3 = self.equs_fxy(x[i - 1] + 1 / 2 * self.h, y[i - 1] + 1 / 2 * self.h * K2)
            K4 = self.equs_fxy(x[i - 1] + self.h, y[i - 1] + self.h * K3)
            y[i] = y[i - 1] + self.h / 6 * (K1 + 2 * K2 + 2 * K3 + K4)
            y_t = x[i] * (3 + x[i] ** 2) / (3 * (1 + x[i] ** 2))
            print(x[i], y[i], y_t, abs(y[i] - y_t))
        return x, y

    def _Ord4Kutta(self):  # 四阶Ｋｕｔｔａ公式
        y = np.zeros((4, 1))
        x = np.zeros((4, 1))

        y[0] = self.y0
        x[0] = self.a
        K1, K2, K3, K4 = 0, 0, 0, 0
        for i in range(1, 4, 1):
            x[i] = self.a + i * self.h * 4
            K1 = self.equs_fxy(x[i - 1], y[i - 1])
            K2 = self.equs_fxy(x[i - 1] + 1 / 3 * self.h * 4, y[i - 1] + 1 / 3 * self.h * 4 * K1)
            K3 = self.equs_fxy(x[i - 1] + 2 / 3 * self.h * 4, y[i - 1] - 1 / 3 * self.h * 4 * K1 + self.h * 4 * K2)
            K4 = self.equs_fxy(x[i - 1] + self.h * 4, y[i - 1] + self.h * 4 * K1 - self.h * 4 * K2 + self.h * 4 * K3)
            y[i] = y[i - 1] + self.h * 4 / 8 * (K1 + 3 * K2 + 3 * K3 + K4)
        return x, y

    def _Ord4ModifiedAdams(self):  # 预测-校正法：四阶Adams预测-校正法
        y = np.zeros((self.n, 1))
        x = np.zeros((self.n, 1))

        y[0] = self.y0
        x[0] = self.a
        temp = 0

        if self.n > 4:
            x1, y1 = self._Ord4Kutta()
            y[0:4] = y1
            print("%4s %6s %6s %10s"%("x_n", "亚当姆斯预测校正", "精确解", "误差"))
            for i in range(4, self.n, 1):
                x[i] = self.a + i * self.h
                temp = y[i] + self.h / 24 * (55 * self.equs_fxy(x[i - 1], y[i - 1]) - 59 * self.equs_fxy(x[i - 2], y[
                    i - 2]) + 37 * self.equs_fxy(x[i - 3], y[i - 3]) - 9 * self.equs_fxy(x[i - 4], y[i - 4]))
                y[i] = y[i - 1] + self.h / 24 * (
                        9 * temp + 19 * self.equs_fxy(x[i - 1], y[i - 1]) - 5 * self.equs_fxy(x[i - 2], y[
                    i - 2]) + self.equs_fxy(x[i - 3], y[i - 3]))
                y_t = x[i] * (3 + x[i] ** 2) / (3 * (1 + x[i] ** 2))
                print(x[i], y[i], y_t, abs(y[i] - y_t))
        else:
            raise ValueError("四阶Adams预测-校正法节点数n必须大于4！")
        return x, y

```

> **test_runge_kutta_adams.py:** **龙格-****库塔与亚达姆斯公式测试文件。**

```python
# -*- coding: utf-8 -*-
# @Time    : 2022/5/29 11:02 下午
# @Author  : Leo
# @FileName: test_runge_kutta_adams.py
# @Software: PyCharm
# @Blog    ：https://guojxblog.cn
# @GitHub  ：https://github.com/guojx0820
# @Email   ：guojiaxiang0820@gmail.com

import matplotlib.pyplot as plt
from SolvingOrdinaryDifferentialEquations.Runge_Kutta_Adams import RungeKutta_AdamsSolvingOrdinaryDifferentialEquations


def equs_fxy(x, y):  # 预测值
    return 1 - 2 * x * y / (1 + x ** 2)


if __name__ == "__main__":
    h = 0.1
    y0 = 0
    sol_interval = [0, 2]
    runge_kutta_adams = RungeKutta_AdamsSolvingOrdinaryDifferentialEquations(equs_fxy, sol_interval, y0, h)
    x, y = runge_kutta_adams._Ord4Runge_Kutta()
    t, u = runge_kutta_adams._Ord4ModifiedAdams()
    y_t = x * (3 + x ** 2) / (3 * (1 + x ** 2))
    plt.figure(figsize=(8, 6))
    plt.scatter(x, y, label='Runge_Kutta_Solution-' + str(h), color="r")
    plt.scatter(t, u, label='Adams_Solution-' + str(h), color="g")
    plt.plot(x, y_t, label='True_Solution-' + str(h), color="b")
    plt.title("Runge-Kutta & Adams Formula Solving Differential Equations")
    plt.legend()
    plt.savefig("/Users/leo/Desktop/runge_kutta_adams_01.png", dpi=300, bbox_inches="tight")
    plt.figure(figsize=(8, 6))
    plt.plot(x, abs(y - y_t), label='Runge_Kutta_Error-' + str(h), color="r")
    plt.plot(x, abs(u - y_t), label='Adams_Error-' + str(h), color="g")
    plt.title("Error Curve of Runge-Kutta & Adams Formula Solving Differential Equations ")
    plt.legend()
    plt.savefig("/Users/leo/Desktop/error_runge_kutta_adams_01.png", dpi=300, bbox_inches="tight")
    plt.show()

```

## 运行结果

<img src="https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/RK_Res.png" alt="图3 四阶经典龙格——库塔公式" style="zoom:100%;" />

![图4 亚当姆斯预测校正公式](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/Adm_Res.png)

**表1 4阶经典龙格-库塔公式预测值与精确值误差**

|  xn  | 4阶龙格-库塔公式 |    精确值    |       误差       |
| :--: | :--------------: | :----------: | :--------------: |
| 0.1  |   [0.09933993]   | [0.09933993] | [2.05243127e-09] |
| 0.2  |   [0.19487176]   | [0.19487179] | [3.00356696e-08] |
| 0.3  |   [0.28348614]   | [0.28348624] | [9.79501109e-08] |
| 0.4  |   [0.36321819]   | [0.36321839] | [1.97433548e-07] |
| 0.5  |   [0.43333303]   | [0.43333333] | [3.06461535e-07] |
| 0.6  |   [0.49411724]   | [0.49411765] | [4.02982711e-07] |
| 0.7  |   [0.54653196]   | [0.54653244] | [4.73503049e-07] |
| 0.8  |   [0.5918694]    | [0.59186992] | [5.1434548e-07]  |
| 0.9  |   [0.63149118]   | [0.63149171] | [5.28644923e-07] |
| 1.0  |   [0.66666614]   | [0.66666667] | [5.22604124e-07] |
| 1.1  |   [0.6984912]    | [0.6984917]  | [5.02800333e-07] |
| 1.2  |   [0.72786838]   | [0.72786885] | [4.74818476e-07] |
| 1.3  |   [0.75551381]   | [0.75551425] | [4.42834343e-07] |
| 1.4  |   [0.78198157]   | [0.78198198] | [4.09698586e-07] |
| 1.5  |   [0.80769193]   | [0.80769231] | [3.77208521e-07] |
| 1.6  |   [0.83295846]   | [0.8329588]  | [3.46401639e-07] |
| 1.7  |   [0.85801168]   |  [0.858012]  | [3.17803044e-07] |
| 1.8  |   [0.88301858]   | [0.88301887] | [2.91610862e-07] |
| 1.9  |   [0.90809807]   | [0.90809834] | [2.6782566e-07]  |

**表2 亚当姆斯预测校正公式预测值与精确值误差**

|  xn  | 亚达姆斯预测校正公式 |    精确值    |     误差     |
| :--: | :------------------: | :----------: | :----------: |
| 0.4  |     [0.79408276]     | [0.36321839] | [0.43086437] |
| 0.5  |     [0.81227136]     | [0.43333333] | [0.37893802] |
| 0.6  |     [0.83795096]     | [0.49411765] | [0.34383331] |
| 0.7  |     [0.85339412]     | [0.54653244] | [0.30686168] |
| 0.8  |     [0.86579907]     | [0.59186992] | [0.27392915] |
| 0.9  |     [0.87557522]     | [0.63149171] | [0.24408351] |
| 1.0  |     [0.8838564]      | [0.66666667] | [0.21718973] |
| 1.1  |     [0.89143105]     | [0.6984917]  | [0.19293934] |
| 1.2  |     [0.89889021]     | [0.72786885] | [0.17102136] |
| 1.3  |     [0.90664655]     | [0.75551425] | [0.1511323]  |
| 1.4  |     [0.91497683]     | [0.78198198] | [0.13299485] |
| 1.5  |     [0.92405599]     | [0.80769231] | [0.11636368] |
| 1.6  |     [0.93398506]     | [0.8329588]  | [0.10102626] |
| 1.7  |     [0.94481281]     |  [0.858012]  | [0.08680081] |
| 1.8  |     [0.95655187]     | [0.88301887] | [0.07353301] |
| 1.9  |     [0.96919066]     | [0.90809834] | [0.06109232] |



![图5 两种算法数值解和精确解曲线（h=0.1）](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/runge_kutta_adams_01.png)

![图6 两种算法误差曲线（h=0.1）](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/error_runge_kutta_adams_01.png)

![图7 两种算法数值解和精确解曲线（h=0.01）](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/runge_kutta_adams_001.png)

![图8 两种算法误差曲线（h=0.01）](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/error_runge_kutta_adams_001.png)

![图9 两种算法数值解和精确解曲线（[a, b]=[0, 10]](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/runge_kutta_adams_100.png)

![图10 两种算法误差曲线（[a, b]=[0, 10]](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9B%9B%E9%98%B6Runge-Kutta%E5%85%AC%E5%BC%8F%E4%B8%8EAdams%E9%A2%84%E6%B5%8B%E6%A0%A1%E6%AD%A3%E5%85%AC%E5%BC%8F%E6%B1%82%E8%A7%A3%E5%B8%B8%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%88%9D%E5%80%BC%E9%97%AE%E9%A2%98/error_runge_kutta_adams_100.png)

# 结果分析与讨论

- 从图4、5中可以看出，四阶经典龙格——库塔公式的单步法求解常微分方程的初值相对于亚当姆斯预测校正公式的双步法精度更高，收敛性更好， 程序设计简单，计算过程稳定，但对函数f(x,y)的光滑性要求较高，且计算量大，耗费机时较多。对于四阶经典龙格——库塔公式的误差一直很小，从表1、2可看出可以稳定在10-7以内。从图6可以看出，选取不同的步长与计算区间，其误差也会有所不同。误差会随着步长的减小而降低，但对题目中所给函数求解范围大于2.3左右Adams预测校正公式的误差会持续增长，直至发散，这一点的误差也会降到最低。Adams预测校正公式步长为0.01时，在0.25附近误差大到最低。

- 如果问题本身不适宜采用高阶方法，比如函数f(x,y)的光滑性能不太好，或者问题本身不需要太高精度的数值结果，那么采用低阶的方法并辅以适当的步长较为合适，采用更低阶的公式或Euler预测校正公式。如果函数f(x,y)的光滑性能较好，那么采用高阶Runge-Kutta公式可以得到更为准确的计算结果。

- 如果问题适宜采用高阶方法求解，也希望得到高精度的数值结果，则经常采用四级四阶Runge-Kutta公式。一般采用四级四阶Runge-Kutta公式提供初始值，并应用高阶线性多步公式，如四阶Adams预测校正公式求解比较理想。对于所有高阶方法来说，通过减小步长来提高精度比较合理， 因此通常不追求使用更高阶(更高精度)的数值方法。一般而言，利用显式公式计算预测值、再利用隐式公式计算校正值无论对于高阶方法还是低阶方法，总能获得比较好的稳定性。因此实际中往往采用预测校正公式进行求解。

 # 参考



[1] **《数值分析》欧阳洁等。**

[2] http://hwiechern.blog.163.com/blog/static/1067966220085502745478/

[3] https://wenku.baidu.com/view/c0483326753231126edb6f1aff00bed5b9f373e5.html

[4] https://wenku.baidu.com/view/0cceafda561810a6f524ccbff121dd36a32dc4a0.html

[5] https://wenku.baidu.com/view/72027a10346baf1ffc4ffe4733687e21af45ffa6.html

[6] https://www.icode9.com/content-1-1282114.html

[7] https://www.csdn.net/tags/MtTaEg3sOTA3MDM5LWJsb2cO0O0O.html

[8] https://zhuanlan.zhihu.com/p/435769998
