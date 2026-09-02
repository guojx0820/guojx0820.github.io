---
title: 基于Fortran90的Rpstar3大气辐射传输系统源代码文档
tags: 辐射传输
categories: 程序代码
description: 这是日本东京大学辐射传输源码官方文档的中文版翻译，仅做学习之用。
abbrlink: 8c1f6a98
date: 2022-05-21 11:05:40
cover: https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9F%BA%E4%BA%8EFortran90%E7%9A%84Rpstar3%E8%BE%90%E5%B0%84%E4%BC%A0%E8%BE%93%E6%A8%A1%E5%9E%8B%E6%BA%90%E4%BB%A3%E7%A0%81%E6%96%87%E6%A1%A3/rpstar.jpeg
---

> 本文程序在Rstar7与Pstar3的基础上于2020. 3.31 创建，并更新于2020. 8. 7。 英文文件：[R-Pstar_Readme](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9F%BA%E4%BA%8EFortran90%E7%9A%84Rpstar3%E8%BE%90%E5%B0%84%E4%BC%A0%E8%BE%93%E6%A8%A1%E5%9E%8B%E6%BA%90%E4%BB%A3%E7%A0%81%E6%96%87%E6%A1%A3/R_Pstar3_Readme.docx)
>
> 主要开发者：Miho SEKIGUCHI、Yoshifumi Ota和Teruyuki NAKAJIMA
> 贡献者列表如下:

![R-Pstar系统贡献者](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9F%BA%E4%BA%8EFortran90%E7%9A%84Rpstar3%E8%BE%90%E5%B0%84%E4%BC%A0%E8%BE%93%E6%A8%A1%E5%9E%8B%E6%BA%90%E4%BB%A3%E7%A0%81%E6%96%87%E6%A1%A3/Contributor.png)

# “R-Pstar3”简介？



“Pstar3”是用于在大气-陆地/海洋耦合系统中模拟极化辐射场的通用软件包。”R-pstar3’是一个类似Rstar的并用于合并和集成Rstar和Pstar的Pstar包。该模拟基于离散纵坐标/矩阵算子法在平面平行问题中的应用分为若干均匀层的大气，下伏地面或海洋表面。Pstar3还能够处理辐射传输与平面平行海洋耦合（Ota et al.，2010）。

最初的Pstar3最初是为观测温室气体而开发的日本国家环境研究所卫星（GOSAT）项目（NIES），由日本JAXA/EORC运营。R-Pstar3包通过[Open CLASTR](http://157.82.240.167./~clastr/)项目分发。

# 软件包程序清单

> - README: 自述文档。

> - Makefile: 生成可执行文件的配置文件，可以利用此文档一键编译。

> - Mkinclude: Makefile中配置程序中使用的的编译器设置。

> - main.f90: R-pstar3软件包主程序。

> - data: R-pstar3输入参数样本文件（默认值：指向data0的符号链接）。
>
>   > - data0: 朗伯表面的非偏振辐射
>   > - data10: 海洋表面的非偏振辐射（海洋层=0）
>   > - data1: 海洋表面的非偏振辐射（海洋层=2）
>   > - data0p:  朗伯表面的偏振辐射
>   > - data10p: 海洋表面偏振辐射（海洋层=0）
>   > - data1p: 海洋表面偏振辐射（海洋层=2）

> - out_test: R-pstar3输出文件的示例，文件命名对应于data文件包：data0,10,1,0p,10p,1p-->out0,10,1,0p,10p,1p。
>
>   如果你想得到同样的结果，你应该选择Frohlich和Shaw 1980并在路径LBR/pstr4.f90文件中注释掉第528行-第529行（我看到源码中已经注释了）。



> - 这些数据库文件是从ps3r_dbs_200329.tar.gz中提取的。这是一个数据哭的压缩包，需要解压之后将提取的文件放在项目根目录之中。
>
>   > - MLATMD: 大气剖面（廓线）文件
>   >
>   > - AERDB: Rstar7的粒子剖面（廓线）文件
>   >
>   > - PKRNL.OUT: Mie散射核心文件（增加Mie散射的角度网格）
>   >
>   > - pyphsf_vis.dat: 六边形固体冰柱数据（近红外和可见光）
>   >
>   > - pyphsf_ir.dat: 六角形固体冰柱数据（红外）
>   >
>   >   以上2个文件的字节顺序为little-endian，这些文件与极化辐射不对应。
>   >
>   > - dkrnl/PKRNL.OUT_aspXXX: 球体散射数据
>   >
>   >   XXX表示宽高比；宽高比=X.XX，也就是说如果文件命名为PKRNL.OUT_asp033，那么宽高比就是0.33，这些文件与非极化辐射不对应



> - ckd.g.ch_2_1e3_big: big endian机制的k分布文件
> - ckd.g.ch_2_1e3_ltl: little endian机制的k分发文件
> - ckd.g.ch_2_2e3_big: big endian机制的精细k分布文件
> - ckd.g.ch_2_2e3_ltl: little endian机制的精细k分发文件

# 源码运行与编译

a、 请仔细阅读本文件。
b、 复制计算机目录中的所有文件并将数据库文件放在同一目录中。
c、 选择普通或更细的波数栅格，并复制或链接一个文件到新文件'ckd.g.ch_2'。还应指示正常（1e3）或主程序中DINTVL的更精细（2e3）网格。
d、 如果要计算球体粒子，选择一个球体散射数据文件，以备最佳使用并在main7.f90中修改文件名。
e、 在Mkinclude中修改编译器设置。用户需要指定Fortran编译器（FC）及其选项（FFLAGS和FMATH）。使用FFLAGS进行编译器优化，和用于链接LAPACK库的FMATH（见下文）。

> *关于FMATH*
> Pstar4需要LAPACK和相关例行程序（*1）。要构建Pstar4的可执行文件，编译器选项“FMATH”必须为在Mkinclude中指定，以链接LAPACK库。示例选项
> 对于典型的编译器，可以在Mkinclude中找到。强烈建议用户准备优化的LAPACK库用于他们自己的计算机架构（*2），并使用“FMATH”链接它选项，因为Pstar4的计算效率在很大程度上取决于LAPACK库，尤其是在IPOL=4的情况下。
> （*1）[LAPACK — Linear Algebra PACKage](http://www.netlib.org/lapack/)
> （*2）例如英特尔数学内核库或AMD核心数学库。
>
> 注：

f、 在根目录下输入命令

```bash
make
```

开始编译，生成Makefile中所要求的执行文件，默认为a.out(MacOS or Linux)或者a.exe(Win)。然后找到此执行文件（在Mkinclude文件中可以设置或者修改执行文件的名称，默认为TARGET = a.out）。
g、 运行执行文件，输入命令：./的意思是执行当前目录下的执行文件+文件名a.out

 ```bash
 ./a.out
 ```

回车之后就开始运行执行文件了。会得到一个输出文件out，其中包括计算结果。输出结果out的内容与out0文件的内容相同，如果有差异可能就是四舍五入误差的容许误差，或者计算机的精度差异。代码正常运行，具有自动双精度选项的双精度运行，fortran编译器可以更好地保持准确性，有时会出现输入/输出错误，检查在主程序的最开始处打开语句。
h、 对于使用R-Pstar3的应用程序，可以更改数据或者输入参数。改变**大气参数和/或粒子光学特性**，必须更改**MLATMD和/或AERDB**。请参阅后面的一节。
当你计算多案例时，首个案例会非常慢，因为代码需要读取大文件PKRNL，所以制造连续计算，无需拆分为多个作业。
i、 您可能需要更改应用程序的参数设置，在这种情况下，应该更改主程序中的模块“paras”。

# 实验参数文件：数据

主程序中的读取顺序如下：

```fortran
 read(iui,*, iostat=ierr) isol,inda,indg,imthd,ipol,nda,nds
     if(ierr/=0) exit
     read(iui,*) na0, th0(1:na0)
     read(iui,*) na1,th1(1:na1)
     read(iui,*) nfi,fi(1:nfi)
     read(iui,*) nw0
     read(iui,*) rx(1:nw0+1)
     read(iui,*) rf(1:nw0)
     read(iui,*) nw
     read(iui,*) wl(1:nw)
     read(iui,*) dw(1:nw)
     read(iui,*) galb(1:nw)
     read(iui,*) matm,nlna,nlno
     nlna1=nlna+1
! if ipbf>0 then field out
     read(iui,*) ipbf(1:nlna1)
! input CO2 and ground temperature
     read(iui,*) gtmp,co2ppm
     read(iui,*) ifrh,trh
     read(iui,*) npoly,icn,wlcn
     do i=1,npoly
        read(iui,*) ncomp(i),cnpt(i)
        read(iui,*) mptc(i,1:ncomp(i))
        read(iui,*) vptc(i,1:ncomp(i))
     enddo
     if(nlno > 0) then
        read(iui,*) dptw(1:nlno)
        read(iui,*) chla(1:nlno)
     endif

```

重复进行其他实验:

说明：

> - ISOL：0为夜间
>   		   1为白天

> - INDA：0为仅通量
>   			1为用于通量和辐射计算

> - INDG：0为朗伯表面
>   			1为用于海洋表面
>     			3为适用于平坦的海洋表面

> - IMTHD：选择通量/强度计算模式开关。详见[Nakajima和Tanaka（1988）Matrix formulation for the transfer of solar radiation in a plane-parallel scattering atmosphere](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9F%BA%E4%BA%8EFortran90%E7%9A%84Rpstar3%E8%BE%90%E5%B0%84%E4%BC%A0%E8%BE%93%E6%A8%A1%E5%9E%8B%E6%BA%90%E4%BB%A3%E7%A0%81%E6%96%87%E6%A1%A3/MatrixFormulationForTheTransferOfSolarRadiationInAPlane-ParallelScatteringAtmosphere.pdf)

> 对于非管理员用户，假定IMTHD=2。
> -1: 计算字段时不进行任何更正。
> 0: DM（Delta-M）-方法。适合通量计算。
> 1: MS（多+单）-方法。适用于辐射计算。
> 2: TMS（截断多个+单个）-方法。有利于反射辐射计算。
> 3: IMS（改进的多+单）-方法。适用于传输辐射计算。
> （该方法不适用于多孔辐射场）
> 在使用相同的正交流值-NDA-的条件下，与NT/DM方法相比，MS/TMS/IMS方法更精确。
> 在除中厚层以外的大多数情况下，TMS比MS更精确。IMS方法是计算太阳周围强度（太阳光环）的最佳方法。
> 对于极各向异性的相函数，如光学厚度较大的云，TMS将是最好的，且收敛速度比MS方法快得多。

以下是选择IMTHD的指导表：

![IMTHD选择](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/%E5%9F%BA%E4%BA%8EFortran90%E7%9A%84Rpstar3%E8%BE%90%E5%B0%84%E4%BC%A0%E8%BE%93%E6%A8%A1%E5%9E%8B%E6%BA%90%E4%BB%A3%E7%A0%81%E6%96%87%E6%A1%A3/imthd.png)

> - IPOL：斯托克斯参数的数量
>   1： 用于标量计算（忽略极化效应）
>   4： 用于矢量计算（计算I、Q、U和V）

> - NDA：半球中高斯正交点的数目，用于积分大气中辐射传输方程的最底角积分。增加该值意味着使用更多计算时间获得更准确的结果（增加NDA**2.5规则）。对计算时间敏感的用户应该通过比较NDA的几个值的结果来调整NDA。
>
>   对于通量计算，NDA=2-4对于大多数应用来说就足够了。
>   对于辐射率计算，NDA=6-10对于TM/IMS方法中的大多数应用来说已经足够了。

> - NDS: 半球中用于积分海洋辐射传输方程纳迪亚尔角积分的高斯正交点的数目。

> - NA0: 太阳天顶角数（大于0）。

> - TH0（1:NA0）：太阳天顶角（度）。仅当NA0>0时指定。

> - NA1：出现辐射的天顶角数（大于0）。

> - TH1（1:NA1）：出现辐射的天顶角（度）。
>   透射辐射<90，反射辐射>90。

> - NFI：方位角数。

> - FI（1：NFI）：天顶角（度）。
>   0表示前向散射方向。

> - NW0：用于计算响应函数的亚波长网格数。

> - RX（1：NW0+1）：DW*RX=微米波长位移对于子小波网格。
>   -0.5<=RX<=0.5

> - RF（1:NW0）：辐射计组件的综合响应功能RX功能（相对单位正常）。

> - 对于单色计算，给出NW0=1，RX（1:2）=0，RF=1。

> - 平均辐射率：
>   L=总和（I=1，N；辐射率（I）*射频（I））/总和（I=1，N；射频（I））

> - NWL：中心波长数。

> - WL：中心波长（微米）。

> - GALB：INDG=0时，Lmabert表面的通量反照率。

> - 如果INDG=1，则海面以上10 m处的风速（m/s）。
>   （如果u10>0.01，可以进行计算。）

> - MATM：大气数（与AFGL lowtran相同（Kneizys等人，1988年））。
>
>   1： 热带，
>   2： 中纬度夏季
>   3：中纬度冬季
>   4： 高纬夏季
>   5：高纬冬季
>   6： 美国标准

> - NLNA：定义大气的子层数。

> - NLNO：定义海洋的子层数。

> - IPBF（1：NLNA+1）：定义要构造的子层的接口号大气。从上到下，即必须按照从上到下的顺序给出：
>   IPBF（1）=50，IPBF（NLN+1）=1。如果>0，则计算辐射场；如果<0，则无辐射场计算层编号在大气模型中定义MLATMD。

对于IR计算，最好有多个层以获得更高的精度。

默认值如下:

IPBF的表格：

| 接口数量 | 高度(km) | 接口数量 | 高度(km) |
| :------: | :------: | :------: | :------: |
|    50    |  120.0   |    25    |   24.0   |
|    49    |  115.0   |    24    |   23.0   |
|    48    |  110.0   |    23    |   22.0   |
|    47    |  105.0   |    22    |   21.0   |
|    46    |  100.0   |    21    |   20.0   |
|    45    |   95.0   |    20    |   19.0   |
|    44    |   90.0   |    19    |   18.0   |
|    43    |   85.0   |    18    |   17.0   |
|    42    |   80.0   |    17    |   16.0   |
|    41    |   75.0   |    16    |   15.0   |
|    40    |   70.0   |    15    |   14.0   |
|    39    |   65.0   |    14    |   13.0   |
|    38    |   60.0   |    13    |   12.0   |
|    37    |   55.0   |    12    |   11.0   |
|    36    |   50.0   |    11    |   10.0   |
|    35    |   47.5   |    10    |   9.0    |
|    34    |   45.0   |    9     |   8.0    |
|    33    |   42.5   |    8     |   7.0    |
|    32    |   40.0   |    7     |   6.0    |
|    31    |   37.5   |    6     |   5.0    |
|    30    |   35.0   |    5     |   4.0    |
|    29    |   32.5   |    4     |   3.0    |
|    28    |   30.0   |    3     |   2.0    |
|    27    |   27.5   |    2     |   1.0    |
|    26    |   25.0   |    1     |   0.0    |

> - IFRH: 0: R.H.从模型大气中使用
>   		  1: R.H.使用总R.H.（TRH）

> - TRH: 总相对湿度（0-1）

> - NPOLY：粒子多分散体的数量。例如如果有水云和气溶胶，值为2。

> - ICN：如果CNPT是每个多分散体的总柱干体积，则为0。
>
>   1如果CNPT是每个多分散体的总柱体积
>   2如果CNPT是标度波长WLCN处的光学厚度
>   3如果CNPT是每个波长的光学厚度

> - WLCN：CNPT作为光学元件的缩放波长（厘米）测量厚度。

重复多分散体的数量

> - NCOMP：组成多分散体的粒子模型数

> - CNPT：ICN定义的每个多分散体的总体积
>   如果ICN=0,1，总体积（cm3/cm2）
>   当ICN=2,3时，WLCN处的光学厚度

> - MPTC：每个多分散体的粒子型号（请参阅AERDB7一节中的更多信息）

> - VPTC：颗粒模型外部混合的相对干体积浓度*结束重复

> - DPTW：各海洋层的地质厚度【m】

> - 叶绿素a：各海洋层的叶绿素a浓度【mg/m3】（Bricaud等人（1995），Morel和Maritorena（2001））

> - ###粒子模型类型###
>   1： 水
>   2： 冰
>   3： 粉尘类
>   4： 烟尘
>   5： 火山灰
>   6： 75%H2SO4
>   7： 乡村
>   8： 海上浪花
>   9： 城市
>   10：对流层
>   11：黄沙

> - ISPH注释
>   为了使用椭球核数据，需要选择内核数据（FN\u PKRNL1），它取决于球体的纵横比粒子和用户的计算机体系结构（小/大端）。内核数据在模块GTPH1（src/share/01gtph1.f90）中指定，以及可从PKRNL中选择。OUT\u asp{033048069100144207299}in数据库/目录。诸如“033”之类的数字表示球状颗粒（“033”表示0.33），由a/b定义，其中a是球体长轴的半径，b是短轴的半径。椭球核数据与提供的数据相同rstar7.pack，这是一种RT代码，可从open Slactr网站获得。与rstar7数据的唯一区别是偏振分量。Pstar3除了提供P11数据外，还提供P22、P33、P44、P12和P34数据，配备rstar7。有关内核数据的详细信息，请参见rstar7的描述和Dubovik et al.（2002）的一篇论文。以下read语句用于设置用户定义相对湿度下的水汽分布。
>   读取标题
>   读取（CNG（L，1），L=1，NL）

> 使用子程序INITS5，在第L层和第M分子的CONG（L，M）数组中设置PPMV单元中的气体浓度分布。Geseus数M定义如下：
>
> 1: H2O  2: CO2   3: O3   4: N2O   5: CO   6: CH4   7: O2  8: NO   9: SO2  10: NO2  11: NH3  12: HNO3 13: OH   14: HF  15: HCL  16: HBR  17: HI   18: CLO  19: OCS  20: H2CO  21: HOCL   22: N2  23: HCN  24: CH3CL 25: H2O2  26: C2H2 27: C2H6  28: PH3
>
> 在许多应用程序中，用户可能希望在相对湿度，不以PPMV为单位。在主程序中，这种情况假设将相对湿度数据放入数据文件中，然后
> 设定模型大气PPMV浓度后，读取CONG（L，1从数据文件中获取相对湿度值。进入前主程序rstr5，该相对湿度剖面被转换通过常规WVCAL进入PPMV单元。如果你不需要这种情况，只需在主程序中删除此部分。如本例行程序所示，最好修改已装运的干管为您的应用程序编写更好的例程。自结构主程序很简单，用户可以很容易地自己制作一个。

# 气体参数文件：MLATMD

数据文件MLATMD包括常规MLATM读取的Lowtran-7大气模型参数，读取顺序如下：

```fortran
 read NM1,NM2,NATM,NL
     NM=NM1+NM2
     read header
     read AIRM
     read header
     DO 2 I=1,NM
       read IDM(I)
       read NS
       read (IDMS(I,J),J=1,NS)
       read (WMOL(I,J),J=1,NS)
   2   read (RAMS(I,J),J=1,NS)
     read header
     read (ALT(I),I=1,NL)
     DO 4 J=1,NATM
       read header
   4   read (PMATM(I,J),I=1,NL)
     DO 5 J=1,NATM
       read header
   5   read (TMATM(I,J),I=1,NL)
     DO 6 K=1,NM1
     DO 6 J=1,NATM
       read header
   6   read (AMOL(I,K,J),I=1,NL)
     DO 7 J=1,NATM
       read header
   7   read (DNSTY(I,J),I=1,NL)
     DO 8 K=1,NM2
       read header
   8   read (TRAC(I,K),I=1,NL)

```



说明：有关详细讨论，请参阅AFGL/Lowtran文档

> - NM1：第一类分子的数目。

> - NM2：第二类分子的数量。

> - NATM：模型大气的数量。

> - NL：高度级别数。

> - AIRM：空气分子量

> - IDM（1:NM）：分子代码（A8）。

> - NS：同位素数量。

> - IDMS（1:nm，1:ns）：同位素代码。

> - WMOL（1:nm，1:ns）：同位素分子量。

> - RAMS（1:nm，1:ns）：同位素相对丰度。

> - 高度（1:50）：从底部到顶部的高度（km）。

> - PMATM（1:nl，1:natm）：水平大气压力（hPa）。

> - TMATM（1:nl，1:natm）：水平的大气温度（K）。

> - AMOL（1:nl，1:nm1，1:natm）：第一类分子的体积混合比。

> - DNSTY（1:nl，1:natm）：模型的空气分子密度（1/cm3）。

> - TRAC（1:NL，1:NM1）：第二类分子的体积混合比。



# 粒子参数文件：AERDB

数据文件AERDB包括由例程GETPAR读取的粒子模型参数，读取顺序如下：

```fortran
read header
     read RMIN,RMAX
     read NPTC
     DO 6 M=1,NPTC
       read header
   6   read (CNPRF(L,M),L=1,NL)
     DO 1 M=1,NPTC
       read header
       read (ISPCV(I,M),I=1,3)
       read (RFRAC(I,M),I=1,3)
       read RHO(M)
       read NMODE
       DRYAER(1,2,M)=NMODE
       DRYAER(1,3,M)=RMIN
       DRYAER(1,4,M)=RMAX
       DO 3 J=1,NMODE
   3     read (DRYAER(I,J,M),I=2,6)
       read NAW(M)
       IF(NAW(M).GT.0) then
         read header
         DO 7 I=1 ,NAW(M)
   7       read (AWCR(I,M,K),K=1,3)
       endif
   1 continue
     read header
     read NV,NWLV
     read (WLV(I),I=1,NWLV)
     DO 4 IV=1,NV
       read header
       read (RFI(I,IV,1),I=1,NWLV)
   4   read (RFI(I,IV,2),I=1,NWLV)


```



说明：

> - RMIN：最小粒子半径（cm）。

> - RMAX：最大粒子半径（cm）。

> - NPTC：粒子模型的数量。

> - AERDB中的默认型号集如下所示：

> - 粒子模型类型
>   1： 水2：冰
>   3： 粉尘类4：烟尘
>   5： 火山灰6：75%H2SO4
>   7： 乡村8：海上浪花
>   9： 城市10：对流层
>   11： 黄沙

（（CNPRF（L，M），L=1，NL），M=1，NPTC）：以相对单位表示的干颗粒体积浓度的垂直剖面。
（摘自d'Almeida等人）
（（ISPCV（I，M），I=1,3），M=1，NPTC）：我们假设每个模型都有三种成分的内部混合物。ISPCV定义了混合物的基本材料（1-9）。

> - 基础材料（无生长机制）
>   1： 水2：冰
>   3： 粉尘4：水溶性
>   5： 海盐6：烟尘
>   7： 火山灰8：75%H2SO4
>   9： 黄沙

> （（RFRAC（I，M），I=1,3），M=1，NPTC）：RFRAC定义混合物的干组分体积分数。
> （ρ（M），M=1，NPTC）：干混合物的颗粒密度（g/cm3）。
> （（DRYAER（I，J，M），I=2,6，J=1，NMODE），M=1，NPTC）：卷大小分布（dV/dln r）的参数包。
> 其中NMODE是大小分布的模式数。
> 此参数包用于例程VLSPC2定义卷参数包PR的大小分布。

> PR（1,1）=r粒子半径（cm）
> PR（1,2）=模半径的NMODE数
> PR（1,3）=rmin最小粒子半径（cm）
> PR（1,4）=rmax最大粒子半径（cm）
> 对于每个第j个模式（<=4）
> PR（2，j）：模式的功能类型（ITP）。
> ITP=1：幂律
> PR（3，j）=C，PR（4，j）=R0，PR（5，j）=P
> vj=C*（R/R0）**（4-P），如果R>R0；=C*（R/R0）

> **4如果R<R0
> ITP=2：对数正常
> PR（3，j）=C，PR（4，j）=S，PR（5，j）=RM
> vj=C*exp（（ln（R/RM）/ln（S））**2/2）
> ITP=3：修正伽马射线
> PR（3，j）=C，PR（4，j）=α，PR（5，j）=β，PR（6，j）=γ
> vj=C*（R1）**（阿尔法+4）经验（-β*R1**γ），其中R1=R*1.0E4
> （NAW（M），M=1，NPTC）：定义颗粒生长的相对湿度数。如果为0，则无增长。
> （（AWCR（I，M，K），K=1,3，I=1，NAW（M）），M=1，NPTC）：Shettle&amp;Fenn的生长参数（AW、CAW、RMMD）

> AW水活性解释RMMD的CAW系数。

> RMMD Hanel的吸水率数据。

> NV：基本材料的数量。

> NWLV：定义折射率的波长。

> （WLV（I），I=1，NWLV）：波长，单位为微米。
> （（RFI（I，IV，1），I=1，NWLV），IV=1，NV）
> （（RFI（I，IV，2），I=1，NWLV），IV=1，NV）：粒子的真实和吸收指数（Mr，Mi）复折射率=Mr-i Mi。

# 分层设计

rstar6b采用了三种垂直分层系统。

> - （1） 分层以定义大气模型。默认为50层layerign公司。

> - （2） 分层定义用于辐射传输计算的层系统。可以通过在（1）中的50个层中设置IPBF来设置此分层。

> - （3） 如果IPBF>0，则rstar6b将计算通量和强度（如果设置INDA）。

> 采用这种相当复杂的分层策略来实现rstar6b在许多应用中的最高效率。一些用户想要计算许多角度方向，而其他一些用户希望
> 设置多个图层。在这些情况下，计算机内存可能会不足如果rstar6b必须记住所有计算值。例如，数组强度的AI0是一个四维数组。对于这些情况，高级用户可以通过调整这些分层来调整最大内存效率保存计算机内存。有关调整方式，请参阅'参数调整' 。



# 主程序结构

主例程RSTR5需要许多输入数据才能运行。这些数据是读取三个数据文件：data、MLATMD、AERDB和KRNL。退出。设置数据的步骤
我们准备了一个数据初始化例程INITS5。

> - 主程序结构如下：
>   （1） 从数据中读取数据
>   （2） 初始化5b
>   （3） pstr4
>   （4） 将结果输出到out

> - 用户有两种方法来输入参数，而不是默认值
>   参数：
>   （a） 更改数据文件中的参数。
>   （b） 更换步骤（2）和（3）之间的参数。
>   方法（b）将是暂时更改参数的更简单方法，而方法（a）将是将模型设置为默认值的更好方法参数。

> - 主程序RSTR6的输入参数如下：
>   初始化1：初始化例程
>   0：跳过波长独立部分
>   内核文件的IUK设备号
>   INDG-1：无地面
>   0：Lambert曲面
>   1： 初始化的海洋表面
>   2： 无初始化的海面
>   当INDG>0且IMTHD>0时，则进行单次散射校正用于海洋表面反射
>   3： 带初始化的平坦海面
>   4： 无初始化的平坦海面
>   INDA 0：通量
>   1： 通量和辐射
>   IMTHD-1:NT，0:DMS-强度/通量法
>   1： MS，2:TMS，3:IMS-强度法。
>   当INDG>0且IMTHD>0时，则进行单次散射校正用于海洋表面反射
>   IMS方法不能应用于IPOL=4。
>   ISOL 0：夜间
>   1： 白天
>   NDA：半球中的流数
>   NA0：太阳入射次数
>   TH0（NA0）: 太阳天顶角（0-90度）
>   NA1: 球体中出现的最底角数
>   TH1（NA1）: 紧急最底角（0-90：向下；90-180：向上）NFI方位角数
>   FI（NFI）: 方位角（度）（0方向=前向散射）
>   WL: 中心波长（微米）
>   DW: 缩放波长RX的DW缩放因子，单色计算取0
>   NW0： 用于计算响应函数的亚波长网格数
>   RX（NW0）DW*RX=亚波长网格的波长位移（微米）-0.5<=RX<=0.5
>   radiomter的RF（NW0）集成响应功能作为RX的功能（相对单位正常）。
>   对于单色计算，给出NW0=1、RX=0、RF=1。
>   平均辐射率：
>   L=总和（I=1，N；辐射率（I）*射频（I））/总和（I=1，N；射频（I））
>   如果INDG=0，GALB地面反照率
>   如果INDG>0，则为U10（米/秒）
>   ICN 0，1：CNPT为体积
>   2，3:CNPT是WLCN处的光学厚度
>   ICN=2，3的WLCN缩放波长
>   NPOLY多分散体数
>   CNPT（NPOLY）总体积（ICN=0,1）或光学厚度（ICN=2,3）
>   对于每个多分散体。
>   NL定义模型大气的大气层数
>   层间界面高度（km），从下到上
>   各层界面处的PRS（NL）压力（mb）
>   各层界面的TMP（NL）温度（K）
>   NMOL气体数
>   CNG（NL，NMOL）气体浓度（ppmv）
>   CNP（NL，NPOLY）干体积浓度曲线（相对单位）
>   ISPCVP（3，NPOLY）3压缩机基本材料。内部混合物（1-8）
>   RFRACP（3，NPOLY）干混合物的干体积分数
>   ROP（NPOLY）颗粒相对于水的密度
>   干混料的DRYAP（6,4，KPOLY）dV/dlnr参数
>   见VLSPC2
>   C值（体积谱系数）是相对的
>   AW的NAWP（NPOLY）编号
>   AWCRP R（NAW，NPOLY，3）1：AW水活性（见Shettle和Fenn。）
>   2： 解释RMMD的CAW系数
>   3： RMMD RMMD
>   基本物种的NV数量（1-8）
>   折射率表的NWLV波长数
>   基波折射率的WLV（NWLV）波长
>   材料（微米）
>   RFI（NWLV，NV，2）基本材料的折射率（mr，mi）
>   =mr-i mi
>   具有对数规则波长间隔
>   NLN用于辐射传输的大气层数。
>   IPBF（NLN+1）接口编号，用于定义要构造的子层
>   MLATM中的传输气氛。
>   必须按照从上到下的顺序给出：
>   IPBF（1）=50，IPBF（NLN+1）=1
>   如果>0，则计算辐射场
>   如果<0，则无辐射场计算

# 来自R-Pstar3的输出

> - THK0（NLN，10）
>
> （L，1）：总光学厚度（从大气顶层到地面）
> （L，2）：粒子光学厚度
> （L，3）：瑞利光学厚度
> （L，4）：单次散射反照率

> - 太阳入射辐照度（W/m2/微米）
>   FLXD0（KNA0，KNTAU）： 向下通量（W/m2/微米）
>   IPBF>0时
>
>   FLXD00（KNA0，KNTAU）:直接入射通量（W/m2/微米）
>   IPBF>0时
>
>   FLXU0（KNA0，KNTAU）:向上通量（W/m2/微米）
>   IPBF>0时
>
>   AI0（KNA1U、KNA0、KNFI、KNTAU、1）
>   辐射率:（W/m2/微米/str）
>   IPBF>0时

> - PL:（KNA1U、KNA0、KNFI、KNTAU）
>   偏振度=sqrt（Q**2+U**2+V**2）/I

# 调整参数大小

> - 您可能需要更改应用程序的参数设置。
>   参数的含义如下：
>   KNA0：最大太阳入射次数。
>   KNA1U：球体中的最大出射角数。
>   KNFI：最大方位角数。
>   KNW0：最大接收数。
>   KNW：最大波长数。
>   KNLN：辐射传输计算的最大层数。它应该等于或小于49。
>   KNTAU：辐射场所在层界面的最大数量计算它应等于或小于KNLN。
>   以下参数调整需要详细了解rstar6b编码,不建议普通用户更改。
>   KNDM：辐射传输的最大流数。
>   KNL：模型大气水平的最大数量（一般用户不应更改此设置）
>   KNM0：最大GESE数。
>   KPOLY：辐射传输的最大粒子多色散数。
>   KAW：水活动的最大数量。
>   KWLV：定义折射率的最大波长数
>   基本材料。
>   KNV：粒子基本材料的最大数量。
>   KLGN1：相位函数勒让德展开的最大阶数+1
>   在IMS方法中。
>   kptc：粒子类型的最大数量
>   kp：用于吸收的压力格栅数量（与ckd.g\U ch2相关）
>   kt：用于吸收的温度网格数（与ckd.g\U ch2相关）
>   kmol：吸收气体种类数（与ckd、g\U ch2相关）
>   knang：散射角网格数（与KRNL.OUT、pyphsf、dkrnl相关）
>   kplk1：多项式拟合普朗克函数的最大阶数
>   kww：气体吸收的最大波数积分数
>   kch：k分布的积分点数（与ckd.g\U ch2相关）
>   kintvl：KRNL的最大大小参数网格数。外出
>   kpol：最大极化数（=1表示rstar）
>   krvis:pyphsf\u vis的波长网格数
>   krir:pyphsf\u ir的波长网格数
>   kintvl\U du：dkrnl的尺寸参数网格数
>   knm：最大气体种类数

# 注意事项

> - 此包是从Rstar7 ocean修改而来的，因此存在一些差异来自下面列出的原始Pstar3包。
>   *LBL计算部分不包含此包。
>   *IMS方法不适用于极化辐射场。
>   *太阳光谱仅包含2个（将更新）。
>   *平坦的海面对于蒸发辐射场来说是不好的。
>   （可能有一些未知的bug…）

# 参考文献

[1]d'Almeida, G. A., P. Koepke, and E. P. Shettle, 1991: Atmospheric aerosols.

 Global climatology and radiative characteristics. A. Deepak Publishing.

 

[2]Dubovik, O., B. N. Holben, T. Lapyonok, A. Sinyuk, M. I. Mishchenko, P. Yang,

 and I. Slutsker 2002: Non-spherical aerosol retrieval method employing 

 light scattering by spheroids, Geophys. Res. Lett., 29(10), 1415, 

 doi:10.1029/2001GL014506.

 

[3]Hanel, G., 1976: The properties of atmospheric aerosol particles as functions

 of the relative humidity as a thermodynamic equillibrium with the surrounding

 moist air. Advances in Geophys., 19, 73-188.

 

[4]Kneizys, F. X., E. P. Shettle, L. W. Abreu, J. H. Chetwynd, G. P. Anderson,

 W. O. Gallery, J. E. A. Selby, and S. A. Clough, 1988: Users Guide to

 LOWTRAN 7. AFGL-TR-88-0177.

 

[5]Nakajima, T., and M. Tanaka, 1986: Matrix formulations for the transfer

 of solar radiation in a plane-parallel scattering atmosphere. J.

 Quant. Spectrosc. Radiat. Transfer, 35, 13-21.

 

[6]Nakajima, T., and M. Tanaka, 1988: Algorithms for radiative intensity

 calculations in moderately thick atmospheres using a truncation

 approximation. J. Quant. Spectrosc. Radiat. Transfer , 40, 51-69.

 

[7]Nakajima, T., M. Tsukamoto, Y. Tsushima, A. Numaguti, and T. Kimura, 2000: 

 Modeling of the radiative process in an atmospheric general circulation model.

 Appl. Opt., 39, 4869-4878.

 

[8]Ota, Y., A. Higurashi, T. Nakajima and T. Yokota, 2010: Matrix formulations

 of radiative transfer including the polarization effect in a coupled

 atmosphere-ocean system, J. Quant. Spectrosc. Radiat. Transfer,

 111, 878-894, doi:10.1016/j.jqsrt.2009.11.021.

 

[9]Sekiguchi, M., and T. Nakaima, 2008: A study of the absorption process and

 its computational optimization in an atmospheric general circulation model.

 J. Quant. Spectrosc. Radiat. Transfer, 109, 2779-2793,

 doi:10.1016/j.jqsrt.2008.07.013.

 

[10]Shettle, E. P., and R. W. Fenn, 1979: Models for the aerosols of the lower

 atmosphere and the effects of humidity variations on their optical

 properties. AFGL-TR-79-0214.

 

[11]Yang, P., K. N. Liou, K. Wyser, and D. Mitchell 2000: Parameterization of 

 the scattering and absorption properties of individual ice crystals, 

 J. Geophys. Res., 105(D4), 4699–4718, doi:10.1029/1999JD900755.

 

[12]Yang, P., H. Wei, H.-L. Huang, B. A. Baum, Y. X. Hu, G. W. Kattawar, 

 M. I. Mishchenko, and Q. Fu, 2005: Scattering and absorption property 

 database for nonspherical ice particles in the near- through far-infrared

 spectral region Appl. Opt. 44, 5512-5523.

# 出资者

> - Higurashi，Akiko（海面）
>   国家环境研究所
>   电话：+81-29-850-2423；传真：+81-29-850-2960
>   电子邮件：hakiko@nies.go.jp

> - 中岛，Teruyuki（辐射传输）
>   国家环境研究所
>   电子邮件：terry-nkj@nifty.com

> - Ota，Yoshifumi（海洋辐射传输）
>   日本气象厅
>   电子邮件：otayoshi@met.kishou.go.jp

> - Sekiguchi，Miho（气体吸收模型和辐射传输）
>   东京海洋科技大学
>   电话和传真：+81-3-5245-7463
>   电子邮件：miho@kaiyodai.ac.jp
