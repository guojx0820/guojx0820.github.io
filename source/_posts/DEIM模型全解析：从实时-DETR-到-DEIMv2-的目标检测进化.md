---
title: DEIM 模型全解析：从实时 DETR 到 DEIMv2 的目标检测进化
tags:
  - 深度学习
  - 目标检测
  - DETR
  - DEIM
  - 计算机视觉
description: 这篇文章用通俗方式解释 DEIM 与 DEIMv2：它们为什么关注 Dense O2O 匹配，如何改进实时 DETR 的训练效率和精度，和 YOLO、RT-DETR、RF-DETR 有什么关系，并给出架构图、训练流程、推理部署代码、官方 model zoo 表格和工程选型建议。
cover: /images/posts/deim-series/cover.svg
categories: 程序代码
sticky: 1
mathjax: true
abbrlink: de102026
date: 2026-09-28 20:30:00
---

# 前言：DETR 很优雅，为什么还需要 DEIM

目标检测模型有两条很有代表性的路线。一条是 YOLO 这类密集预测模型，速度快、部署成熟、生态丰富；另一条是 DETR 这类端到端 Transformer 检测器，结构更统一，不太依赖 NMS 这类后处理规则。DETR 的问题也很明显：早期版本训练慢、收敛慢，实时部署压力大。

DEIM 的全称是 DETR with Improved Matching for Fast Convergence。看名字就知道，它不是单纯换个 backbone，也不是只堆参数，而是盯住 DETR 训练中的一个关键点：匹配机制。更具体地说，DEIM 试图让 one-to-one matching 的训练信号更充分、更密集，从而让实时 DETR 更快收敛，精度和速度更好平衡。

![DEIM 封面](/images/posts/deim-series/cover.svg)

如果你刚看完 RF-DETR 那篇文章，可以这样连接起来理解：RF-DETR 强调 DINOv2 backbone 与实时 Detection Transformer；DEIM 强调实时 DETR 的匹配与训练机制；DEIMv2 进一步把 DINOv3 的强视觉特征引入实时检测。它们不是完全割裂的名字，而是现代目标检测在不同方向上的共同演进。

# 一句话理解 DEIM

DEIM 可以理解为：在实时 DETR 框架里，用更充分的 Dense O2O 匹配与监督方式，让更多 query 学到有效目标信息，从而提升训练效率、收敛速度和检测精度。

![DEIM 架构图](/images/posts/deim-series/architecture.svg)

传统 DETR 训练时会做一对一匹配：一个真实目标匹配一个预测。这种设计很优雅，可以避免重复框，但也意味着每轮训练中真正获得正样本监督的 query 相对稀疏。DEIM 的核心动机就是：能不能保持端到端检测的简洁性，同时让训练信号更密、更有效？

# 从 YOLO、RT-DETR、RF-DETR 到 DEIM

![检测模型理解地图](/images/posts/deim-series/comparison.svg)

先把几个名字放到同一张地图里：

| 模型路线 | 核心思路 | 优点 | 注意点 |
| --- | --- | --- | --- |
| YOLO | 密集网格/点预测 | 快、部署成熟、生态强 | 后处理和样本分配规则多 |
| DETR | object queries + 一对一匹配 | 端到端、结构统一 | 早期收敛慢、实时性弱 |
| RT-DETR | 实时化 DETR | DETR 思路更工程可用 | 仍需要继续优化训练和结构 |
| RF-DETR | DINOv2 backbone + 实时 DETR | 强视觉特征，检测/分割表现好 | 不同尺寸许可证和资源要看清 |
| DEIM | 改进匹配与监督 | 快收敛、提升实时 DETR 精度 | 要结合具体实现与硬件测试 |
| DEIMv2 | Real-Time Object Detection Meets DINOv3 | 更强视觉基础模型特征 | 新版本生态仍在发展 |

YOLO 像很多巡逻兵在网格上密集观察；DETR 像一组侦探，每个 query 负责找一个目标；DEIM 则像改进侦探训练制度：让更多侦探在训练阶段得到有效反馈，而不是只有少数 query 学到东西。

# Dense O2O：为什么“匹配”这么重要

DETR 系列通常把检测看成集合预测。给定图片 $I$ 和一组 object queries $Q$，模型输出目标集合：

<script type="math/tex; mode=display">
\hat{Y}=f_{\theta}(I,Q)
</script>

训练时要把预测集合 $\hat{Y}$ 和真实标注集合 $Y$ 对齐。经典做法是匈牙利匹配：找到一个总代价最小的一对一分配。

<script type="math/tex; mode=display">
\sigma^*=\arg\min_{\sigma}\sum_i \mathcal{C}(y_i,\hat{y}_{\sigma(i)})
</script>

这里 $\mathcal{C}$ 通常包含分类代价、边界框 L1 代价和 GIoU 代价。问题在于，如果正向监督太稀疏，很多 query 在训练早期学不到足够目标信息，收敛就会慢。

DEIM 的 Dense O2O 思路可以通俗理解为：仍然保持一对一训练目标的干净性，但通过更密集的匹配/监督设计，让模型在训练过程中获得更多有效正样本信号。它不是简单变成 one-to-many，也不是回到传统密集检测，而是在 DETR 框架中更聪明地分配训练信息。

![DEIM 训练流程](/images/posts/deim-series/training-pipeline.svg)

# DEIM 官方 model zoo 怎么看

下面整理自 DEIM 官方 README。官方表格报告 COCO 上的 AP、参数量、延迟和 GFLOPs。不同硬件、TensorRT/ONNX/PyTorch 后端、输入尺寸和 batch 设置都会影响速度，所以这里更适合作为模型尺寸对比，而不是你本机速度的保证。

## DEIM-D-FINE 系列

| 模型 | 数据集 | D-FINE AP | DEIM AP | 参数量 | 延迟 | GFLOPs |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| N | COCO | 42.8 | 43.0 | 4M | 2.12ms | 7 |
| S | COCO | 48.7 | 49.0 | 10M | 3.49ms | 25 |
| M | COCO | 52.3 | 52.7 | 19M | 5.62ms | 57 |
| L | COCO | 54.0 | 54.7 | 31M | 8.07ms | 91 |
| X | COCO | 55.8 | 56.5 | 62M | 12.89ms | 202 |

这个表格可以看出，DEIM 相比对应 D-FINE 版本通常带来一定 AP 提升。小模型 N 适合边缘和实时场景，大模型 X 更适合服务器上追求精度。

## DEIMv2 系列

DEIMv2 官方标题是 Real-Time Object Detection Meets DINOv3。它把实时检测与 DINOv3 这类更强视觉特征结合起来。官方 model zoo 中的一部分模型如下：

| 模型 | 数据集 | AP | 参数量 | GFLOPs | 延迟 |
| --- | --- | ---: | ---: | ---: | ---: |
| Atto | COCO | 23.8 | 0.5M | 0.8 | 1.10ms |
| Femto | COCO | 31.0 | 1.0M | 1.7 | 1.45ms |
| Pico | COCO | 38.5 | 1.5M | 5.2 | 2.13ms |
| N | COCO | 43.0 | 3.6M | 6.8 | 2.32ms |

Atto/Femto/Pico 这几个名字很有意思：它们比传统 Nano 还要小，明显是面向极低算力和极低延迟场景设计的。对于嵌入式设备、轻量边缘盒子、实时视频流，这类模型比盲目追大模型更实际。

# 推理：先跑通，再优化

DEIM 仓库通常采用配置文件驱动训练和推理。不同版本命令会随仓库更新而变化，下面给出一个通用理解版流程。

```bash
# 1. 克隆仓库
git clone https://github.com/ShihuaHuang95/DEIM.git
cd DEIM

# 2. 安装依赖
pip install -r requirements.txt

# 3. 下载官方 checkpoint 后执行推理或评估
python tools/infer.py \
  -c configs/deim_dfine/deim_hgnetv2_n_coco.yml \
  -r output/deim_n_coco.pth \
  --input demo.jpg
```

如果你使用 DEIMv2，则优先以 DEIMv2 官方 README 中的 quick start 为准。新仓库更新较快，命令名称可能变化，最稳的方式是看当前仓库的 `tools/` 目录和配置文件。

Python 侧的推理逻辑可以理解为：

```python
import torch
from PIL import Image
from torchvision import transforms

device = "cuda" if torch.cuda.is_available() else "cpu"

# 伪代码：真实加载方式以官方仓库为准。
model = build_deim_model(config_path="deim_hgnetv2_n_coco.yml")
checkpoint = torch.load("deim_n_coco.pth", map_location="cpu")
model.load_state_dict(checkpoint["model"])
model.to(device).eval()

transform = transforms.Compose([
    transforms.Resize((640, 640)),
    transforms.ToTensor(),
])

image = Image.open("demo.jpg").convert("RGB")
x = transform(image).unsqueeze(0).to(device)

with torch.no_grad():
    outputs = model(x)

# outputs 通常包含 pred_logits 和 pred_boxes。
scores, labels, boxes = postprocess(outputs, score_threshold=0.5)
```

重点不是背这段伪代码，而是理解推理链路：图片预处理、模型前向、阈值过滤、坐标还原、结果可视化。

![DEIM 推理部署流程](/images/posts/deim-series/inference-pipeline.svg)

# 训练自定义数据集

训练 DEIM/DEIMv2 之前，建议先把数据转换成 COCO 格式：

```text
dataset/
  train/
    images/
    annotations.json
  val/
    images/
    annotations.json
```

训练命令大致会包含：

```bash
python tools/train.py \
  -c configs/deim_dfine/deim_hgnetv2_n_coco.yml \
  --data-path /path/to/dataset \
  --output-dir output/my_deim_exp
```

新手训练时最应该关注的是：

| 问题 | 现象 | 处理建议 |
| --- | --- | --- |
| 标注格式错 | 训练一开始报错或 AP 为 0 | 用 COCO API 检查 json |
| 类别不均衡 | 大类很好，小类很差 | 补数据或重采样 |
| 小目标漏检 | AP 小目标低 | 提高分辨率，检查标注框 |
| 过拟合 | train loss 降，val AP 不升 | 数据增强、早停、减小模型 |
| 推理慢 | AP 高但无法实时 | 换小模型、ONNX/TensorRT、降低分辨率 |

# 导出 ONNX / TensorRT

实时检测最终通常要导出部署格式。一般流程是：

```bash
# 导出 ONNX，具体脚本名以仓库 tools 为准
python tools/export_onnx.py \
  -c configs/deim_dfine/deim_hgnetv2_n_coco.yml \
  -r output/deim_n_coco.pth \
  --output deim_n.onnx

# 使用 TensorRT 构建 engine
trtexec --onnx=deim_n.onnx --saveEngine=deim_n_fp16.engine --fp16
```

部署时不要只看平均延迟。更应该记录：

| 指标 | 含义 |
| --- | --- |
| P50 延迟 | 一般情况下多快 |
| P95/P99 延迟 | 高峰和异常情况下是否卡顿 |
| 显存占用 | 是否能长期稳定运行 |
| 吞吐 | 每秒能处理多少帧 |
| 失败样本 | 哪些场景容易漏检/误检 |

# 教学版核心源码：Dense O2O 的直觉

下面不是官方源码，只是一个帮助理解的简化版本。它展示了训练时如何从预测和真实框之间计算匹配代价。

```python
import torch
import torch.nn.functional as F
from scipy.optimize import linear_sum_assignment

def box_l1_cost(pred_boxes, gt_boxes):
    """计算预测框和真实框之间的 L1 距离。"""
    return torch.cdist(pred_boxes, gt_boxes, p=1)

def cls_cost(pred_logits, gt_labels):
    """分类代价：真实类别概率越高，代价越低。"""
    prob = pred_logits.softmax(-1)
    return -prob[:, gt_labels]

def hungarian_match(pred_logits, pred_boxes, gt_labels, gt_boxes):
    """经典 DETR 一对一匹配。"""
    cost = cls_cost(pred_logits, gt_labels)
    cost = cost + 5.0 * box_l1_cost(pred_boxes, gt_boxes)

    row_ind, col_ind = linear_sum_assignment(cost.detach().cpu().numpy())
    return torch.as_tensor(row_ind), torch.as_tensor(col_ind)

def dense_o2o_training_hint(preds_multi_layer, targets):
    """
    教学版 Dense O2O 直觉：
    不只在最后一层监督，也尽量让更多中间预测得到有效匹配信号。
    """
    total_loss = 0
    for layer_pred in preds_multi_layer:
        pred_logits = layer_pred["pred_logits"]
        pred_boxes = layer_pred["pred_boxes"]

        row, col = hungarian_match(
            pred_logits,
            pred_boxes,
            targets["labels"],
            targets["boxes"],
        )

        matched_logits = pred_logits[row]
        matched_boxes = pred_boxes[row]
        gt_labels = targets["labels"][col]
        gt_boxes = targets["boxes"][col]

        loss_cls = F.cross_entropy(matched_logits, gt_labels)
        loss_box = F.l1_loss(matched_boxes, gt_boxes)
        total_loss = total_loss + loss_cls + 5.0 * loss_box

    return total_loss
```

真实 DEIM 实现会复杂得多，但直觉就是：让训练过程里更多预测分支、更密集位置、更早阶段获得有意义的监督，别让大量 query 长时间“陪跑”。

# 如何选 DEIM 版本

| 场景 | 建议 |
| --- | --- |
| 只是学习 DETR 实时化 | 先看 DEIM-N 或 DEIM-S |
| 低功耗边缘设备 | DEIMv2 Atto/Femto/Pico |
| 普通 GPU 服务器 | DEIM-M/L 或 DEIMv2 N 以上 |
| 追求精度 | 大模型，但要实测延迟 |
| 数据集很小 | 先用预训练微调，不要从零训练 |
| 遥感/工业质检 | 关注小目标、尺度变化、标注质量 |
| 已有 YOLO 产线 | 做 A/B 测试，不要盲目替换 |

DEIM 的价值不在于“名字更新”，而在于它提醒我们：端到端检测的瓶颈不只是 backbone，也可能是训练监督机制。匹配怎么做、正样本怎么给、query 怎么学，会直接影响收敛和最终精度。

# 小结

DEIM 系列可以看作实时 DETR 方向的一次重要训练机制升级：

- DETR 提供端到端集合预测框架；
- RT-DETR 让这个框架更接近实时工程；
- DEIM 改进匹配，让训练更快、更有效；
- DEIMv2 进一步结合 DINOv3 等强视觉特征，把实时检测推向更强精度/速度平衡。

如果你是目标检测新手，建议先把 YOLO、DETR、RT-DETR、RF-DETR 和 DEIM 放在同一张地图里理解。它们不是互相孤立的名词，而是在同一个问题上做不同权衡：速度、精度、训练效率、部署成本和工程稳定性。

# 参考资料

- DEIM 官方仓库：<https://github.com/ShihuaHuang95/DEIM>
- DEIM 论文：<https://arxiv.org/abs/2412.04234>
- DEIMv2 官方仓库：<https://github.com/Intellindust-AI-Lab/DEIMv2>
- DEIMv2 论文：<https://arxiv.org/abs/2509.20787>
- RT-DETR：<https://arxiv.org/abs/2304.08069>
- RT-DETRv2：<https://arxiv.org/abs/2407.17140>
- D-FINE：<https://arxiv.org/abs/2410.13842>
- DETR：<https://arxiv.org/abs/2005.12872>
- Deformable DETR：<https://arxiv.org/abs/2010.04159>
- DINOv3 官方仓库：<https://github.com/facebookresearch/dinov3>
