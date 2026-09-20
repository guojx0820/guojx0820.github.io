---
title: RF-DETR：从 DETR 到实时目标检测的通俗入门与实战解析
tags:
  - 深度学习
  - 目标检测
  - Transformer
  - 计算机视觉
  - RF-DETR
description: 这篇文章用小白也能看懂的方式解释 RF-DETR：它为什么把 DETR 带到实时目标检测，和 YOLO 的思路有什么不同，如何用 Python 推理、训练自定义数据集、导出 ONNX，并结合官方 benchmark 表格给出工程选型建议。
cover: /images/posts/rf-detr/cover.svg
categories: 程序代码
sticky: 1
mathjax: true
abbrlink: c7e42a91
date: 2026-09-20 20:00:00
---

# 前言：目标检测到底在解决什么问题

如果说图像分类是在回答“这张图里主要是什么”，那么目标检测（Object Detection）回答的是一个更接近真实世界的问题：这张图里有哪些东西，它们分别在哪里。

比如一张路口照片里可能同时有汽车、行人、红绿灯、斑马线和交通牌。分类模型只能告诉你“这是一张交通场景图”，而检测模型要输出一组结构化结果：

```text
car        x1=930, y1=348, x2=1178, y2=518, score=0.88
person     x1=548, y1=176, x2=888,  y2=616, score=0.91
dog        x1=142, y1=236, x2=392,  y2=606, score=0.94
```

![RF-DETR 检测示意图](/images/posts/rf-detr/example-detection.svg)

这组结果可以被后续系统继续使用：自动驾驶要判断行人距离，工业质检要定位缺陷，遥感解译要统计建筑物和车辆，安防系统要追踪人员轨迹，农业场景要数果实、数牲畜。也就是说，目标检测不是“看图说话”，而是把图像变成机器可以处理的对象列表。

RF-DETR 是 Roboflow 推出的实时 Detection Transformer。官方项目介绍中把它定位为面向目标检测、实例分割和关键点检测的实时 Transformer 架构，使用 DINOv2 视觉 Transformer 作为 backbone，并在 Microsoft COCO 与 RF100-VL 等 benchmark 上给出了速度与精度结果。本文的目标不是简单翻译官方 README，而是把它拆成几个普通读者也能理解的问题：

1. YOLO 已经很快了，为什么还需要 DETR？
2. DETR 思路优雅，为什么过去不够“实时”？
3. RF-DETR 到底把哪些环节做得更适合工程使用？
4. 新手如何用它推理、训练和部署？
5. 读 benchmark 时应该关注哪些陷阱？

# 一句话理解 RF-DETR

RF-DETR 可以粗略理解为：用 DINOv2 这类强视觉特征提取器读图，再用 DETR 式的 object queries 直接预测一组目标框，尽量减少传统检测器里复杂的候选框、正负样本分配和 NMS 后处理规则，同时把速度优化到实时可用。

![RF-DETR 封面图](/images/posts/rf-detr/cover.svg)

这句话里有三个关键词。

第一，DINOv2 backbone。Backbone 是图像模型的“眼睛”，负责把原始像素转换成语义特征。好的 backbone 能把边缘、纹理、部件、形状和上下文逐层抽象出来。DINOv2 是自监督视觉表征学习里的代表模型之一，它能提供很强的通用视觉特征。

第二，DETR。DETR 的全称是 Detection Transformer。传统检测器往往先生成大量候选位置，再通过分类、回归、NMS 等步骤筛掉重复框；DETR 更像是让模型直接回答“图里有哪些对象”。它把检测看成集合预测（set prediction），用一组可学习的 object queries 去图像特征里“询问”目标。

第三，实时。早期 DETR 结构非常优雅，但训练慢、收敛慢、小目标不够强、推理速度也常常不占优势。RF-DETR 的价值在于把 DETR 的端到端思路推进到更实际的实时检测场景。

# 从 YOLO 到 DETR：两种完全不同的检测哲学

为了理解 RF-DETR，先把传统密集检测和 DETR 式检测放在一起看。

![传统检测与 RF-DETR 流程对比](/images/posts/rf-detr/detr-vs-rfdetr-flow.svg)

传统 YOLO 系列的基本思路可以理解为“网格巡逻”：把图像划成很多位置，每个位置负责预测附近可能出现的目标。它的工程优点非常明显：速度快、部署成熟、生态丰富、边缘设备支持好。但它也带来不少规则：

- 训练时要决定哪个网格、哪个 anchor 或哪个点负责哪个目标。
- 一个目标可能被多个位置预测，需要 NMS 去掉重复框。
- 小目标、密集目标、遮挡目标往往对分配规则比较敏感。
- 不同任务和数据集上，经常需要调阈值、调增强、调后处理。

DETR 的思路更像“派出一组侦探”：模型里有固定数量的 object queries，每个 query 学着去图像特征里寻找一个可能的目标。训练时用匈牙利匹配（Hungarian matching）把预测结果和真实标注做一对一配对。这样每个真实目标只对应一个预测，天然减少重复检测。

可以用一个非常简化的数学形式理解：

<script type="math/tex; mode=display">
\hat{Y}=f_{\theta}(I,Q)
</script>

其中 $I$ 是输入图像，$Q$ 是一组 object queries，$\hat{Y}$ 是预测出来的目标集合。目标集合里的每个元素通常包含类别 $c$、边界框 $b$ 和置信度 $s$：

<script type="math/tex; mode=display">
\hat{y}_i=(c_i,b_i,s_i)
</script>

DETR 的美感在于它把目标检测变成了端到端集合预测；RF-DETR 的工程意义在于，它让这种美感更接近“可直接拿来训练和部署”。

# RF-DETR 网络结构：图像如何变成检测框

下面这张图是一个面向理解的结构示意，不是逐层源码复刻，但它抓住了 RF-DETR 的主干数据流。

![RF-DETR 网络结构图](/images/posts/rf-detr/rf-detr-architecture.svg)

## 1. 输入图像与预处理

图片进入模型前通常会被 resize、normalize，并整理成 batch。不同模型尺寸对应不同输入分辨率。分辨率越高，小目标信息越容易保留，但显存和延迟也会上升。

## 2. DINOv2 视觉骨干

Backbone 的任务是把像素变成特征。传统 CNN backbone 比如 ResNet 更偏局部卷积；Vision Transformer 则通过注意力机制建模更大范围的关系。DINOv2 作为自监督视觉模型，优势在于通用表征能力强，迁移到下游任务时往往更稳。

RF-DETR 使用 DINOv2 作为视觉特征提取器，可以理解为先用一个强大的视觉编码器把图像“读懂”，再把这些特征交给检测 Transformer 去定位对象。

## 3. 特征投影与 Transformer 检测头

Backbone 输出的特征不能直接当检测结果，还需要投影到检测 Transformer 可以处理的维度。随后，object queries 通过注意力机制从图像特征里读取信息。

注意力机制可以用下面的公式描述：

<script type="math/tex; mode=display">
\operatorname{Attention}(Q,K,V)=\operatorname{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
</script>

在检测场景里，可以直观理解为：query 在问“有没有一个目标像我正在寻找的东西”，key/value 则来自图像特征。相似度越高，query 越会关注那一块区域。

## 4. 预测头与集合输出

最后，每个 query 输出一个候选对象，包括类别概率和边界框坐标。训练时通过匈牙利匹配把预测和真实框对应起来，损失函数通常包括分类损失、边界框 L1 损失、GIoU 损失等。

简化写法如下：

<script type="math/tex; mode=display">
\mathcal{L}=\lambda_{cls}\mathcal{L}_{cls}+\lambda_{box}\mathcal{L}_{1}+\lambda_{giou}\mathcal{L}_{giou}
</script>

这不是 RF-DETR 训练代码的完整形式，但足够帮助我们理解：检测模型不仅要猜对类别，还要把框画准。

# 官方 benchmark 怎么看

下面的表格整理自 RF-DETR 官方 README。官方说明中，COCO 精度使用完整 `val2017` 评估，延迟在 NVIDIA T4、TensorRT、FP16、batch size 1 条件下测量。不同硬件、导出方式、输入分辨率、后处理实现都会影响实际速度，所以这些数据应该用于“横向理解模型规模”，不要直接等同于你自己电脑上的速度。

## 检测模型

| 尺寸 | Python 类 | COCO AP50 | COCO AP50:95 | RF100-VL AP50:95 | 延迟 ms | 参数量 M | 分辨率 | 许可证 |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| N | `RFDETRNano` | 67.6 | 48.4 | 57.7 | 2.3 | 30.5 | 384x384 | Apache 2.0 |
| S | `RFDETRSmall` | 72.1 | 53.0 | 60.2 | 3.5 | 32.1 | 512x512 | Apache 2.0 |
| M | `RFDETRMedium` | 73.6 | 54.7 | 61.2 | 4.4 | 33.7 | 576x576 | Apache 2.0 |
| L | `RFDETRLarge` | 75.1 | 56.5 | 62.2 | 6.8 | 33.9 | 704x704 | Apache 2.0 |
| XL | `RFDETRXLarge` | 77.4 | 58.6 | 62.9 | 11.5 | 126.4 | 700x700 | PML 1.0 |
| 2XL | `RFDETR2XLarge` | 78.5 | 60.1 | 63.2 | 17.2 | 126.9 | 880x880 | PML 1.0 |

这里有几个很有意思的现象。

首先，N 到 L 都是 Apache 2.0，适合多数开源和商用场景；XL 和 2XL 需要 `rfdetr_plus` 扩展，许可证是 PML 1.0，正式商用前要认真读协议。

其次，N、S、M、L 的参数量差距不大，但分辨率逐步提升，精度和延迟也随之上升。这说明它们不是简单地“越大参数越多”，而是经过架构和分辨率权衡。

再次，2XL 能到官方表里的 60.1 COCO AP50:95，但延迟也到 17.2ms。对追求极致精度的服务器场景很有吸引力；但对低功耗边缘设备，N/S/M 往往更现实。

## 实例分割模型

RF-DETR 也提供 Seg 版本，用于输出 mask，而不只是矩形框。

| 尺寸 | Python 类 | COCO AP50 | COCO AP50:95 | 延迟 ms | 参数量 M | 分辨率 | 许可证 |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- |
| N | `RFDETRSegNano` | 63.0 | 40.3 | 3.4 | 33.6 | 312x312 | Apache 2.0 |
| S | `RFDETRSegSmall` | 66.2 | 43.1 | 4.4 | 33.7 | 384x384 | Apache 2.0 |
| M | `RFDETRSegMedium` | 68.4 | 45.3 | 5.9 | 35.7 | 432x432 | Apache 2.0 |
| L | `RFDETRSegLarge` | 70.5 | 47.1 | 8.8 | 36.2 | 504x504 | Apache 2.0 |
| XL | `RFDETRSegXLarge` | 72.2 | 48.8 | 13.5 | 38.1 | 624x624 | Apache 2.0 |
| 2XL | `RFDETRSeg2XLarge` | 73.1 | 49.9 | 21.8 | 38.6 | 768x768 | Apache 2.0 |

分割任务比检测更细：检测只要画框，分割要勾出像素级轮廓。因此分割模型的延迟一般更高一些，但在工业缺陷、医学图像、遥感地物边界、实例级计数等任务里更有价值。

# 快速上手：安装与推理

官方安装方式很简单，要求 Python 3.10 或以上：

```bash
pip install rfdetr
```

如果只是跑检测，可以参考下面的最小示例。这里我加了比较多注释，便于第一次接触目标检测的读者理解每一步。

```python
import supervision as sv
from rfdetr import RFDETRMedium
from rfdetr.assets.coco_classes import COCO_CLASSES

# 1. 加载 COCO 预训练模型。
#    Medium 是精度和速度比较均衡的选择。
model = RFDETRMedium()

# 2. 对图片做推理。
#    threshold 是置信度阈值，越高越保守，越低越容易多检。
detections = model.predict(
    "https://media.roboflow.com/dog.jpg",
    threshold=0.5
)

# 3. COCO 预训练模型可以直接用 COCO_CLASSES 解析类别名。
#    如果是自己训练的模型，优先使用 detections.data["class_name"]。
labels = [
    f"{COCO_CLASSES[class_id]} {confidence:.2f}"
    for class_id, confidence in zip(detections.class_id, detections.confidence)
]

# 4. 把检测框画回原图，方便肉眼检查。
image = detections.metadata["source_image"]
image = sv.BoxAnnotator().annotate(image, detections)
image = sv.LabelAnnotator().annotate(image, detections, labels)

# 5. 保存可视化结果。
sv.plot_image(image)
```

推理时最常见的三个调参旋钮是：

| 参数 | 作用 | 新手建议 |
| --- | --- | --- |
| `threshold` | 置信度阈值 | 先用 0.5；漏检多就降到 0.3，误检多就升到 0.6 |
| 模型尺寸 | N/S/M/L/XL/2XL | 先用 M 或 L；低算力用 N/S，高精度用 XL/2XL |
| 输入分辨率 | 影响小目标和速度 | 小目标多时提高分辨率，但要关注显存和延迟 |

# 自定义数据集训练：从“能跑”到“有用”

RF-DETR 支持使用 COCO 格式数据集训练。COCO 格式的典型目录结构如下：

```text
dataset/
  train/
    _annotations.coco.json
    image_001.jpg
    image_002.jpg
  valid/
    _annotations.coco.json
    image_101.jpg
  test/
    _annotations.coco.json
    image_201.jpg
```

训练流程可以概括为下面这张图。

![RF-DETR 训练流程](/images/posts/rf-detr/training-pipeline.svg)

一个最小训练脚本大致如下：

```python
from rfdetr import RFDETRBase

# 1. 选择一个预训练模型作为起点。
#    如果数据集不大，不建议从零开始训练。
model = RFDETRBase()

# 2. 训练自定义 COCO 数据集。
#    dataset_dir 指向包含 train/valid/test 的目录。
model.train(
    dataset_dir="dataset",
    epochs=50,
    batch_size=4,
    grad_accum_steps=4,
    lr=1e-4,
    output_dir="runs/rf-detr-exp01",
)
```

这些参数对新手很重要：

| 参数 | 通俗解释 | 调参建议 |
| --- | --- | --- |
| `epochs` | 模型完整看多少遍训练集 | 小数据集 50 到 100 起步；过拟合就提前停 |
| `batch_size` | 一次喂多少张图 | 显存够就大一点；显存爆了就降 |
| `grad_accum_steps` | 梯度累积 | 小显存模拟大 batch，很实用 |
| `lr` | 学习率 | 太大会震荡，太小会学得慢；先用官方推荐或 `1e-4` 附近 |
| `resolution` | 输入分辨率 | 小目标多时提高，但速度会下降 |
| `output_dir` | 训练输出目录 | 每次实验单独命名，便于对比 |

训练不是只看 loss 下降。目标检测更应该看：

- mAP 是否提高；
- 漏检样本集中在哪些类别；
- 误检是不是来自相似背景；
- 小目标、遮挡目标、边缘目标表现如何；
- 训练集好、验证集差，是否过拟合；
- 类别分布是否严重不均衡。

如果你发现模型总是漏掉小目标，可能不是模型“不聪明”，而是图片 resize 后目标只剩几个像素，或者标注质量不稳定。目标检测里，数据质量常常比模型名字更重要。

# TensorBoard 与 W&B：训练时不要“盲飞”

训练深度学习模型最怕的不是报错，而是它看似在跑，实际上没有学到东西。建议每次训练都记录日志。

如果使用 TensorBoard，可以在训练输出目录附近启动：

```bash
tensorboard --logdir runs
```

然后打开浏览器查看 loss、mAP、学习率曲线。如果你看到训练 loss 一直下降，但验证 mAP 不升反降，说明模型可能在记训练集，而不是学通用规律。

如果使用 Weights & Biases，可以用它管理多次实验：

```bash
pip install wandb
wandb login
```

W&B 适合记录：

- 每次实验的超参数；
- 最佳 checkpoint；
- 验证集图片预测结果；
- 多模型横向对比；
- 训练失败原因和备注。

新手最容易犯的错误是把实验文件夹命名成 `test1`、`test2`、`final`、`final_new`、`really_final`。更推荐这样命名：

```text
runs/
  rfdetr_base_50e_bs4_lr1e-4_res576_v1/
  rfdetr_large_80e_bs2_lr5e-5_res704_small-object/
```

半年后你再看，也能知道当时到底做了什么。

# ONNX 导出与部署思路

训练好模型后，下一步是部署。部署时要考虑的不是“这模型论文精度多高”，而是它在你的机器上是否足够快、足够稳、足够省资源。

![RF-DETR 推理部署链路](/images/posts/rf-detr/inference-pipeline.svg)

典型导出方式如下：

```python
from rfdetr import RFDETRBase

model = RFDETRBase(pretrain_weights="runs/rf-detr-exp01/checkpoint_best_total.pth")

# 导出 ONNX，便于后续接 TensorRT、ONNX Runtime 等推理后端。
model.export()
```

部署前建议做一张表，把离线评估和线上指标分开。

| 指标 | 离线验证集 | 线上服务 |
| --- | --- | --- |
| 精度 | mAP、召回率、误检率 | 业务漏检率、人工复核通过率 |
| 速度 | 单张平均推理时间 | P50/P95/P99 延迟 |
| 稳定性 | 是否能完整跑完测试集 | 长时间运行是否显存泄漏 |
| 资源 | 显存、CPU 占用 | 单机吞吐、并发数、功耗 |
| 可维护性 | 模型版本、数据版本 | 失败样本回流、灰度发布 |

如果是在 Windows 本机做学习实验，可以先跑 PyTorch 原生推理；如果要上线服务器，再考虑 ONNX Runtime 或 TensorRT；如果要上边缘设备，建议先做小规模真实样本压测，不要只看官方 T4 表格。

# 一个简化版“核心源码”：DETR 检测头在做什么

下面不是 RF-DETR 官方源码，而是一个教学版伪实现，用来帮助理解 DETR 类检测器的核心数据流。

```python
import torch
import torch.nn as nn

class TinyDETRHead(nn.Module):
    """教学版 DETR 检测头：只展示核心思想，不代表 RF-DETR 真实实现。"""

    def __init__(self, hidden_dim=256, num_queries=300, num_classes=80):
        super().__init__()

        # 每个 query 可以理解成一个“找目标的探针”。
        self.query_embed = nn.Embedding(num_queries, hidden_dim)

        # Transformer decoder 会让 query 去读取图像特征。
        decoder_layer = nn.TransformerDecoderLayer(
            d_model=hidden_dim,
            nhead=8,
            batch_first=True,
        )
        self.decoder = nn.TransformerDecoder(decoder_layer, num_layers=6)

        # 分类头：判断这个 query 找到的是什么类别。
        self.class_head = nn.Linear(hidden_dim, num_classes + 1)

        # 回归头：输出归一化边界框 cx, cy, w, h。
        self.box_head = nn.Sequential(
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, 4),
            nn.Sigmoid(),
        )

    def forward(self, image_features):
        """
        image_features: [batch, tokens, hidden_dim]
        return:
          logits: [batch, num_queries, num_classes + 1]
          boxes:  [batch, num_queries, 4]
        """
        batch_size = image_features.shape[0]

        queries = self.query_embed.weight.unsqueeze(0).repeat(batch_size, 1, 1)
        hs = self.decoder(tgt=queries, memory=image_features)

        logits = self.class_head(hs)
        boxes = self.box_head(hs)
        return logits, boxes
```

传统检测器里，“哪个位置负责哪个目标”常常由人工设计规则决定；DETR 系列则把这件事交给 query 和匹配损失学习。RF-DETR 的真实工程实现会复杂得多，包括更强的 backbone、更细的特征处理、更高效的训练和部署细节，但上面的代码已经能表达它最核心的抽象：用一组 query 从图像特征中直接读出目标集合。

# 什么时候该选 RF-DETR

我会这样做工程选型：

| 场景 | 推荐选择 | 原因 |
| --- | --- | --- |
| 只是快速做 Demo | RF-DETR-M 或 RF-DETR-L | 精度和速度比较均衡 |
| 显存很小、延迟很敏感 | RF-DETR-N 或 RF-DETR-S | 输入分辨率低，速度更友好 |
| 追求开源商用友好 | N/S/M/L | Apache 2.0 更清晰 |
| 极致检测精度 | XL 或 2XL | 官方 COCO AP 更高，但许可证和资源要评估 |
| 需要像素级轮廓 | RF-DETR-Seg | 检测框不够时使用实例分割 |
| 已有成熟 YOLO 产线 | 先做 A/B 测试 | 不要因为新模型名就推翻稳定产线 |
| 小目标特别多 | 提高分辨率并重点验证 | 小目标更依赖分辨率和标注质量 |

如果你是第一次做目标检测，我建议从 RF-DETR-M 开始。它不会像 Nano 那样因为太小而限制上限，也不会像 2XL 那样让显存和部署压力过大。先把数据、标注、训练和评估闭环跑通，再谈模型尺寸。

# 常见问题

## 1. RF-DETR 会完全替代 YOLO 吗？

短期不会。YOLO 系列生态成熟，部署工具多，边缘端经验丰富。RF-DETR 的优势在于端到端思路、强视觉 backbone 和优秀的精度-延迟权衡。实际项目里，最稳妥的方式是拿同一份数据、同一套评估脚本做对比，而不是只看模型名。

## 2. 为什么官方延迟很低，我本机却很慢？

官方延迟通常是在特定硬件和推理后端下测的，比如 T4、TensorRT、FP16、batch size 1。你在 Windows + PyTorch + CPU 或普通显卡上跑，速度可能完全不同。部署前一定要在目标机器上压测。

## 3. 数据集小，可以训练吗？

可以，但要更谨慎。小数据集建议从预训练模型微调，不要从零训练；同时使用数据增强、交叉验证、失败样本分析。更重要的是检查标注质量：框是否紧贴目标，类别是否一致，漏标是否严重。

## 4. 训练时 mAP 很低怎么办？

先不要急着换模型。按顺序检查：

1. COCO 标注格式是否正确；
2. 类别 ID 是否从合法范围开始；
3. train/valid 是否分布一致；
4. 图片路径是否能被训练脚本读到；
5. 标注框是否越界；
6. 小目标 resize 后是否太小；
7. 学习率是否过高或过低。

目标检测项目里，很多“模型不行”最后都会被证明是“数据管线有问题”。

# 小结

RF-DETR 最值得关注的地方，不只是它在 benchmark 表格上的数字，而是它代表了一条清晰路线：把 Transformer 的集合预测思想带入实时目标检测，并用强视觉 backbone、架构搜索和工程优化把它变成可用工具。

对于学习者来说，它是理解现代目标检测的一扇好门：你可以通过它理解 YOLO 与 DETR 的差别，理解 object query、匈牙利匹配、mAP、延迟和部署后端；也可以直接用 `rfdetr` 包完成推理、微调和导出。

对于工程实践来说，我最建议记住三句话：

1. 先跑通数据闭环，再追求模型上限。
2. 先在你的硬件上测速度，再相信任何延迟表格。
3. 先保证标注质量，再怀疑模型能力。

好的目标检测系统不是“一个模型文件”，而是一条从数据、训练、评估、部署到失败样本回流的完整流水线。RF-DETR 给了我们一个很强的新工具，但真正决定效果的，依然是你如何使用它。

# 参考资料

- RF-DETR 官方 GitHub：<https://github.com/roboflow/rf-detr>
- RF-DETR 官方文档：<https://rfdetr.roboflow.com/latest/>
- RF-DETR 训练文档：<https://rfdetr.roboflow.com/latest/learn/train/>
- RF-DETR 官方博客：<https://blog.roboflow.com/rf-detr/>
- RF-DETR 论文：<https://arxiv.org/abs/2511.09554>
- DINOv2：<https://github.com/facebookresearch/dinov2>
- Deformable DETR：<https://arxiv.org/abs/2010.04159>
- LW-DETR：<https://arxiv.org/abs/2406.03459>
- Microsoft COCO：<https://cocodataset.org/>
- RF100-VL：<https://github.com/roboflow/rf100-vl>
