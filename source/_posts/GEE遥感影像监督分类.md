---
title: GEE遥感影像监督分类
description: >-
  美好的四月已经结束，五月在悄悄拉开帷幕，夏季承载着毕业生的所有期望悄悄展露头脚，毕业设计将成为她最美的画卷……我们之所以努力地推动科技的进步，就是希望每个人都能活得更有尊严，这才应是科研者和技术人所应有的本心。
cover: >-
  https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/bg_beauty.jpg
abbrlink: 1abb07a6
date: 2022-05-06 18:58:02
tags: 遥感影像分类
categories: 遥感与大数据
---

# 引言

## 写本文的初衷

美好的四月已经结束，五月在悄悄拉开帷幕，夏季承载着毕业生的所有期望悄悄展露头脚，毕业设计将成为她最美的画卷。前几天看到一位师妹做毕设时，用线下软件处理数据时的万般无奈与纠结，对于这种线下下载式的遥感处理方法，在GEE（Google Earth Engine, 谷歌地球引擎）出现之后便以逐步被很多科研工作者所弃用抑或是被淘汰，也许是这种云端处理模式之于遥感大数据而言，就本该是绝配。大数据时代的到来，也预示着这种线下处理模式的凋零，5G与互联网技术的进步正使得遥感数据云端处理成为可能。

## 解决了什么问题

本文是一个技术博客，主要解决某线下处理软件不中用的问题。这种依赖于个人电脑配置以及付费软件版本功能的遥感大数据处理方式，本就应该逐步被云端处理所替代。当然，在此声明，并非针对某E姓软件，此软件在线下处理遥感数据的能力至今无软件可以匹敌，主要还是由于其对遥感数据具有强大的解析能力，但很无奈随着软件的升级，并非所有电脑都可以适配，因此云端处理数据就显得尤为重要。

## GEE的优势

GEE（Google Earth Engine），第一次听到这个美好的名字时还是在读大二，记得那时候有一位不近学长强烈推荐使用GEE进行数据处理。然而当时年少轻狂，不知学长的苦心。坚持用某种E姓线下处理软件处理遥感大数据，要知道一景高分辨率遥感数据的数据量就高达1个G，是不是还有好几个G的，当时的电脑配置处理速度一个上午也处理不了几景。之后听说该软件加入了批处理功能，只要在刚开始设置好处理流程和相应的参数，就能一键三连，甚至一键好多连。但是，软件设计者却没有考虑到，一旦进入了这种批处理模式，电脑不能多线程工作，依然需要等一上午，才能把流程走完，才能处理之后的数据。不得不说这是一种巨大的进步呀！解放了人的双手，本就是科技革命的本质目的呢！

GEE具有如下优势：

（1）GEE可以实现远程云端处理，提供非常巨大的服务器，不需要担心个人电脑配置问题；

（2）GEE可以进行多线程处理遥感数据，可以同时开多个网页端，进行编程计算，效率大大提提升；

（3）GEE利用Javascript动态语言，灵活多变，且简单易学；

（4）GEE中集成了大量遥感数据处理模型与函数API，可以随时调用，不用自行编写；

（5）GEE还提供了Python接口，利用Python脚本就可以实现相应功能；

……

# 数据源与预处理

## GEE SR数据集介绍

SR数据集是某些卫星传感器的大气校正表面反射率以及其他经过与处理之后的的卫星遥感数据的集合。这些图像包含可见光、近红外（VNIR）波段、短波红外（SWIR）波段被处理成正交的表面反射率，以及热红外（TIR）波段被处理成正交的亮度温度的数据。这些数据已经进行了大气校正，包括用CFMASK制作的云、影、水和雪掩码，以及每个像素的饱和掩码。收集的数据条被打包成重叠的 "场景"，使用标准化的参考网格，覆盖大约170公里x183公里。另见美国地质调查局关于SR质量保证带的网页。SR只能为处理到L1TP级别的Landsat资产制作。

——来自数据提供者

> 参考:
>
> [Google Earth Engine ——LANDSAT8_SR数据集](https://blog.csdn.net/qq_31988139/article/details/120402644)

## 研究区域

本文就选择青岛地区作为研究区进行数据处理。

![青岛地区Sentinel-2数据](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/GEE%E9%81%A5%E6%84%9F%E5%BD%B1%E5%83%8F%E7%9B%91%E7%9D%A3%E5%88%86%E7%B1%BB/S2Qingdao.png)


## 哨兵-2号数据

哨兵-2号卫星，又名Sentinel-2，是欧空局于2017年发射，搭载高分辨率多光谱卫星传感器的光学遥感卫星。空间分辨率可达10米。主要用于土地利用，资源探测，自然灾害监测以及定量反演的一种资源卫星。哨兵2A与2B两颗由空中巴士国防航天等多个产业团队共同研发及制造，两架卫星的设计大致相同，且绕行同一太阳同步轨道，惟彼此所在的位置相距180度。

哨兵2号将可在多方面提供关于地球陆地地表与海岸区域变化的应用。该任务主要提供农业与森林管理相关影像资料，并可协助管理食品安全。卫星影像可用以测定多种植生指数，例如植物叶面积、叶绿素与含水量指数。这对地球上的植物量与农作物收获量推估特别重要。哨兵2号监测植物生长的同时，也可以在影像中表示地表覆盖物变迁与监测全世界森林。它也可提供湖泊与沿海污染状况影像。卫星还可拍摄洪水、火山爆发与山崩等天灾影像进行测绘，以协助人道救援。哨兵2号影像应用的例子如下：

- 针对环境监测观察土地利用变化。
- 农业应用，例如作物监控与管理，协助粮食安全。
- 详细的植被与森林监测，与相关参数制作（例如叶面积指数、叶绿素含量、碳量估计）
- 观测沿海地区（海洋环境监测、沿海地区测绘）
- 内陆水域监测
- 冰川监测、海冰分布测绘、积雪监测
- 洪水区测绘与管理（风险分析、损害评估、洪水期间灾害管控）

哨兵计画的卫星观测网提供了简单的方式监测与分析基于哨兵2号拍摄影像的地表变迁。

——维基百科

以下是其波段设计：

![哨兵-2号波段设计（图源于维基百科）](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/GEE%E9%81%A5%E6%84%9F%E5%BD%B1%E5%83%8F%E7%9B%91%E7%9D%A3%E5%88%86%E7%B1%BB/Sentinel-2Bands.png)



# 方法原理

## 辐射校正

辐射校正包括辐射定标和大气校正，属于遥感数据预处理的内容。GEE中的SR数据集已经做了遥感数据预处理，所以在此只是利用FMASK进行云检测与去除即可（详见代码）。

## 地理校正

数据集已经做过几何校正与几何精校正。

## 机器学习——随机森林算法模型

随机森林模型可以理解为一种用多个决策树组成的随机数的投票机制进行模式识别的过程，属于机器学习中监督学习的一种。

## 其他模型

SVM（支持向量机）

决策树……

# GEE中的分类器与分类方法详解（代码与分析方法）

## JavaScript基础

## 代码与方法详解

样本选取（分类依据）：

```javascript
var water = /* color: #1238d6 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([120.20902134280091, 36.366615266547605]),
            {
              "landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([120.22859073977357, 36.423268311469755]),
            {
              "landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([120.22691705516193, 36.36163695583249]),
            {
              "landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([120.42535760691975, 36.46276088800295]),
            {
              "landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([119.93889828164347, 36.008296081362744]),
            {
              "landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([120.01065273720988, 36.01440578843647]),
            {
              "landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([120.04635830361613, 36.01176756392882]),
            {
              "landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([120.43683930490783, 36.95302971145465]),
            {
              "landcover": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([120.44782563303283, 36.94424971643165]),
            {
              "landcover": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([120.14089509104065, 36.86188806223697]),
            {
              "landcover": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([120.23496552561096, 36.96674642762685]),
            {
              "landcover": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([119.76976179656316, 35.76148094110215]),
            {
              "landcover": 1,
              "system:index": "11"
            })]),
    forest = /* color: #0c6c0d */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([119.94339981050962, 35.81958333441058]),
            {
              "landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([119.94558849306577, 35.82010313531279]),
            {
              "landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([119.82961706577312, 35.87820141012196]),
            {
              "landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([119.82956878601085, 35.878805584997174]),
            {
              "landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([120.0430490811918, 35.987221588668284]),
            {
              "landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([120.03816209636666, 35.98757317717099]),
            {
              "landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([120.04118066355771, 36.97603292697505]),
            {
              "landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([120.03922801539487, 36.97607149704851]),
            {
              "landcover": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([119.99538412831197, 35.78700580416246]),
            {
              "landcover": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([119.99416640541921, 35.78794574354011]),
            {
              "landcover": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([120.60185426463654, 36.199152594317674]),
            {
              "landcover": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([120.60916060199311, 36.198719701190235]),
            {
              "landcover": 2,
              "system:index": "11"
            })]),
    city = /* color: #d2b762 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([120.41650156503648, 36.129044116121754]),
            {
              "landcover": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([120.41429142480821, 36.129650704761204]),
            {
              "landcover": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([120.41075090890855, 36.13015330322532]),
            {
              "landcover": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([120.40731768136949, 36.13140111998]),
            {
              "landcover": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([120.40678123956651, 36.13245828253948]),
            {
              "landcover": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([120.40596584802599, 36.13261425613783]),
            {
              "landcover": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([120.41094402795763, 36.13259692575331]),
            {
              "landcover": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([120.43519119745226, 36.134035334643784]),
            {
              "landcover": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([120.3765044642064, 36.13712869094811]),
            {
              "landcover": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([120.36266426568956, 36.136175568950556]),
            {
              "landcover": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([120.41381935602159, 36.13368006742981]),
            {
              "landcover": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([120.42368131510972, 36.36322623928067]),
            {
              "landcover": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([120.42664247386216, 36.36450489817577]),
            {
              "landcover": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([120.42889552943467, 36.36379645462681]),
            {
              "landcover": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([120.43430286280869, 36.360668858459796]),
            {
              "landcover": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([120.1530537247987, 36.000872283292146]),
            {
              "landcover": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([120.1313628962036, 35.99522397160657]),
            {
              "landcover": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([120.00107276402414, 35.86535928375581]),
            {
              "landcover": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([120.00620559321929, 36.7583440992046]),
            {
              "landcover": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([119.95093062984039, 36.77374584237985]),
            {
              "landcover": 3,
              "system:index": "19"
            })]),
    cropland = /* color: #20ff0b */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([120.11102335818197, 36.619067818509706]),
            {
              "landcover": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([120.13436930544759, 36.62733409634618]),
            {
              "landcover": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([119.81873343673892, 36.69381851197602]),
            {
              "landcover": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([119.86147711960025, 36.688174860750884]),
            {
              "landcover": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([120.33817687859451, 36.58809087721563]),
            {
              "landcover": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([120.3939523804311, 36.61929112620923]),
            {
              "landcover": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([120.41438008428852, 36.620737784630805]),
            {
              "landcover": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([120.46562100530903, 36.60454744022903]),
            {
              "landcover": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([119.76090298257323, 36.09103938085209]),
            {
              "landcover": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([119.7595296915576, 36.08656564731201]),
            {
              "landcover": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([119.78566513619872, 36.099257902091296]),
            {
              "landcover": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([119.65844860243544, 35.70823232349895]),
            {
              "landcover": 4,
              "system:index": "11"
            })]),
    grassland = /* color: #abff46 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([119.98312553510928, 36.764253556519925]),
            {
              "landcover": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([119.96921023474002, 36.764562973144855]),
            {
              "landcover": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([119.96060296055511, 36.76853351705692]),
            {
              "landcover": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([119.9530015802069, 36.768331547359665]),
            {
              "landcover": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([119.99397598302684, 36.77292546571223]),
            {
              "landcover": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([119.99547571008006, 36.772754148239926]),
            {
              "landcover": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([120.40651565455876, 36.33991890340855]),
            {
              "landcover": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([120.4503965940424, 36.33621129204126]),
            {
              "landcover": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([120.54005730875981, 36.354946496140364]),
            {
              "landcover": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([120.52396457788124, 36.35739759356269]),
            {
              "landcover": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([120.39922041742305, 36.18777775513172]),
            {
              "landcover": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([119.93996242142477, 35.882724414600965]),
            {
              "landcover": 5,
              "system:index": "11"
            })]);
```



算法详解：

```javascript
//选择需要裁剪的矢量数据 
var aoi = ee.FeatureCollection("users/guojiaxiang0820/Qingdao");
//加载矢量边框，以便于在边界内选取样本点
var empty = ee.Image().toByte();
var outline = empty.paint({
 featureCollection:aoi, // 行政边界命名为fc
 color:0, //颜色透明
 width:3 //边界宽度
});
Map.addLayer(outline, {palette: "ff0000"}, "outline");
//Function to mask the clouds in Sentinel-2
function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).divide(10000);
}

//Build the Sentinel 2 collection, filtered by date, bounds and percentage of cloud cover 
var dataset = ee.ImageCollection('COPERNICUS/S2_SR')
                  .filterDate('2019-01-01','2020-12-31')
                  .filterBounds(aoi)
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',10))
                  .map(maskS2clouds);
print("Sentinel 2 Image Collection",dataset);
var dem = ee.Image("NASA/NASADEM_HGT/001") //添加dem数据 
// Construct Classfication Dataset
// RS Index Cacluate(NDVI\NDWI\EVI\BSI)
var add_RS_index = function(img){
  var ndvi = img.normalizedDifference(['B8', 'B4']).rename('NDVI').copyProperties(img,['system:time_start']);
  var ndwi = img.normalizedDifference(['B3', 'B8']).rename('NDWI').copyProperties(img,['system:time_start']);
  var evi = img.expression('2.5 * ((NIR - RED) / (NIR + 6 * RED - 7.5 * BLUE + 1))', 
  {
    'NIR': img.select('B8'),
    'RED': img.select('B4'),
    'BLUE': img.select('B2')
  }).rename('EVI').copyProperties(img,['system:time_start']);
  var bsi = img.expression('((RED + SWIR1) - (NIR + BLUE)) / ((RED + SWIR1) + (NIR + BLUE)) ', 
  {
    'RED': img.select('B4'), 
    'BLUE': img.select('B2'),
    'NIR': img.select('B8'),
    'SWIR1': img.select('B11'),

  }).rename('BSI').copyProperties(img,['system:time_start']);


  var ibi = img.expression('(2 * SWIR1 / (SWIR1 + NIR) - (NIR / (NIR + RED) + GREEN / (GREEN + SWIR1))) / (2 * SWIR1 / (SWIR1 + NIR) + (NIR / (NIR + RED) + GREEN / (GREEN + SWIR1)))', {
    'SWIR1': img.select('B11'),
    'NIR': img.select('B8'),
    'RED': img.select('B4'),
    'GREEN': img.select('B3')
  }).rename('IBI').copyProperties(img,['system:time_start']);
  return img.addBands([ndvi, ndwi, evi, bsi, ibi]);
};
var dataset = dataset.map(add_RS_index); 
var bands = ['B2','B3','B4','B5','B6','B7','B8','B8A','B11','NDVI','NDWI','BSI'];
var imgcol_median = dataset.select(bands).median(); //获取日期范围内的像素中值，以以减小误差
 
var aoi_dem = dem.select('elevation').clip(aoi).rename('DEM');//裁剪DEM
var construct_img = imgcol_median.addBands(aoi_dem).clip(aoi);
//分类样本
var train_points = cropland.merge(grassland).merge(city).merge(forest).merge(water);//分类样本，可以加类 
var train_data= construct_img.sampleRegions({
  collection: train_points,
  properties: ['landcover'],
  scale: 10
});
//精度评价
var withRandom = train_data.randomColumn('random');//样本点随机的排列
var split = 0.7; 
var trainingPartition = withRandom.filter(ee.Filter.lt('random', split));//筛选70%的样本作为训练样本
var testingPartition = withRandom.filter(ee.Filter.gte('random', split));//筛选30%的样本作为测试样本
//分类方法选择随机森林
var rf = ee.Classifier.smileRandomForest({
  numberOfTrees: 20,  
  bagFraction: 0.8
}).train({
  features: train_data,
  classProperty: 'landcover',
  // inputProperties: inputbands
});
//对哨兵数据进行随机森林分类
var img_classfication = construct_img.classify(rf); 
//运用测试样本分类，确定要进行函数运算的数据集以及函数
var test = testingPartition.classify(rf);
//计算混淆矩阵
var confusionMatrix = test.errorMatrix('landcover', 'classification');
print('confusionMatrix',confusionMatrix);//面板上显示混淆矩阵
print('overall accuracy', confusionMatrix.accuracy());//面板上显示总体精度
print('kappa accuracy', confusionMatrix.kappa());//面板上显示kappa值
Map.centerObject(aoi)
Map.addLayer(aoi);
Map.addLayer(img_classfication.clip(aoi), {min: 1, max: 4, palette: ['orange', 'blue', 'green','yellow']});
var class1=img_classfication.clip(aoi)
//导出分类图
Export.image.toDrive({  
       image: class1,  
       description: 'rfclass',  
       fileNamePrefix: 'rf',  //文件命名
       folder: "class",  //保存的文件夹
       scale: 10,  //分辨率
       region: aoi,  //研究区
       maxPixels: 1e13,  //最大像元素，默认就好
       crs: "EPSG:4326"  //设置投影
   });  
```



# 结果分析

## 结果图展示

![随机森林分类结果](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/GEE%E9%81%A5%E6%84%9F%E5%BD%B1%E5%83%8F%E7%9B%91%E7%9D%A3%E5%88%86%E7%B1%BB/%E5%88%86%E7%B1%BB%E7%BB%93%E6%9E%9C.png)

## 混淆矩阵

## KAPPA系数

# 结语

遥感数据本身就不该局限于个人电脑配置软件处理能力，大数据就应当为科学研究，工程项目等服务全人类的事业作出贡献，而不是固步自封，费用昂贵，阻碍科技的进步与生活的无限可能。未来的世界应当是一个大数据时代，数据共享时代，科研与应用相结合的时代。科技的进步需要所有人的共同努力，科技本身不是为个人制造利益的，而是为大众服务。我们之所以努力地推动科技的进步，就是希望每个人都能活得更有尊严，这才应是科研者和技术人所应有的本心。
