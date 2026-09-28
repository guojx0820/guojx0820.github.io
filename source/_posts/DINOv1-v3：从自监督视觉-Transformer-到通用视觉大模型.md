---
title: DINOv1~v3：从自监督视觉 Transformer 到通用视觉大模型
tags:
  - 深度学习
  - 计算机视觉
  - 自监督学习
  - Transformer
  - DINO
description: 这篇文章用通俗语言系统梳理 DINOv1、DINOv2、DINOv3 的演进：为什么视觉模型可以不用人工标签学习语义，teacher-student 自蒸馏如何工作，DINOv2 为什么成为通用视觉特征，DINOv3 又如何走向 dense feature 和视觉基础模型，并给出代码、图解、表格和参考资料。
cover: /images/posts/dino-v1-v3/cover.svg
categories: 程序代码
sticky: 1
mathjax: true
abbrlink: d1a0f123
date: 2026-09-28 20:00:00
---

# 前言：为什么视觉大模型不一定需要人工标签

过去我们训练图像模型，经常默认需要大量人工标签：这张图是猫，那张图是狗，这个框是汽车，那个区域是道路。标签当然有用，但它也贵、慢、容易出错，而且很难覆盖世界的全部变化。人类看世界并不是先拿到几千万张人工标注图片再学会视觉。我们更多是在持续观察：同一个物体换个角度还是它，局部遮住也能认出来，背景变化不应该改变主体语义。

DINO 系列正是沿着这个方向前进：让模型从无标签图像中学习视觉语义。它不是让模型背诵类别名，而是让模型学会一种更底层、更通用的视觉表征。这个表征可以拿去做分类、检索、检测、分割、深度估计，甚至成为 RF-DETR 这类实时检测器的 backbone。

![DINOv1~v3 封面](/images/posts/dino-v1-v3/cover.svg)

本文会从 DINOv1 讲到 DINOv3。为了让第一次接触自监督学习的读者也能跟上，我会尽量少堆术语，多用“老师和学生”“看同一张图的不同裁剪”“patch 自己聚类”等直觉解释。

# 一句话理解 DINO

DINO 可以理解为：让两个网络看同一张图的不同增强版本，teacher 给出稳定目标，student 学着靠近 teacher；虽然没有人工标签，但模型为了保持不同视角下的一致性，会慢慢学出物体、部件和语义区域。

它的名字来自 self-distillation with no labels。蒸馏通常是大模型教小模型，而 DINO 更像是“自己教自己”。teacher 不是人工标注员，也不是另一个完全独立的强模型，而是 student 参数的指数滑动平均版本。student 快速学习，teacher 慢慢跟上，于是训练目标更稳定。

![DINO 架构图](/images/posts/dino-v1-v3/architecture.svg)

这个设计有点像学习摄影。你从不同角度看同一个物体，虽然光照、裁剪、颜色都变了，但你知道它们应该对应相似的语义。模型也被迫学习这种“不随表面变化而改变”的东西。

# DINOv1：无标签语义的惊喜

DINOv1 的代表论文是 *Emerging Properties in Self-Supervised Vision Transformers*。它最让人兴奋的一点是：Vision Transformer 在自监督训练后，注意力图会自然关注到物体主体。也就是说，模型没有被告诉“这是鸟”“这是狗”“这是前景”，但它的 patch token 已经开始形成语义结构。

![DINO 特征可视化示意](/images/posts/dino-v1-v3/example-visualization.svg)

DINOv1 的核心组件有四个。

第一，多视角增强。模型会看到同一张图的 global crop 和 local crop。global crop 保留整体，local crop 只看局部。student 要从局部和整体中学到一致表示。

第二，teacher-student。student 接收更多视图并反向传播；teacher 通常只看 global view，它的参数由 student 的 EMA 更新：

<script type="math/tex; mode=display">
\theta_t \leftarrow m\theta_t + (1-m)\theta_s
</script>

这里 $\theta_t$ 是 teacher 参数，$\theta_s$ 是 student 参数，$m$ 是动量系数。teacher 变化更慢，因此输出更稳定。

第三，防止坍缩。如果模型把所有图片都输出成同一个向量，那一致性损失也可能很低，但这显然没学到东西。DINO 用 centering、sharpening 等技巧让输出分布保持健康。

第四，ViT patch 表征。ViT 把图像切成 patch，每个 patch 像一句话里的 token。自监督训练后，这些 patch token 会带有很强的语义信息。

# DINOv2：从“有趣现象”到“通用视觉特征”

DINOv2 的目标更工程化：学习 robust visual features without supervision。相比 DINOv1，它不只是证明自监督 ViT 会涌现语义，而是把特征质量、数据规模、训练稳定性和下游迁移都推进了一大步。

![DINO 演进路线](/images/posts/dino-v1-v3/evolution-timeline.svg)

DINOv2 的关键不只是“模型更大”，还包括数据工程。视觉自监督很吃数据质量：如果数据重复、噪声大、分布偏，模型会学到奇怪捷径。DINOv2 强调大规模 curated data，也就是从海量图像中筛出更适合预训练的数据。这个思路很像语言模型里的高质量语料筛选。

DINOv2 学到的特征特别适合做“通用底座”。它可以接一个很轻的头去做下游任务，比如：

- 线性分类；
- k-NN 图像检索；
- 语义分割；
- 单目深度估计；
- 目标检测 backbone；
- 医学、遥感、工业视觉迁移。

可以这样理解：DINOv1 让大家看到“无标签 ViT 居然会自己看主体”，DINOv2 则把这件事变成了更可靠的视觉基础能力。

# DINOv3：从图像级表征走向 dense feature

DINOv3 延续了 DINOv2 的路线，但更强调 dense feature 和视觉基础模型。所谓 dense feature，就是不只要一张图的全局向量，还要图中每个 patch、每个位置都有可用的语义特征。

这对视觉任务非常关键。分类只需要知道“图里是什么”，但检测要知道“东西在哪里”，分割要知道“每个像素属于什么”，深度估计要知道“空间结构如何”。因此，视觉基础模型不能只输出一个漂亮的 CLS token，它还要提供细粒度、位置敏感、可迁移的 dense representation。

官方 DINOv3 仓库中已经提供了多种 backbone 和下游 head 的使用方式，包括检测、分割、深度估计等示例。它也和生态工具结合得更紧，比如 Hugging Face Transformers、Torch Hub 风格加载和专门任务 head。

# DINO 系列和 CLIP、MAE、SAM 有什么区别

这几个名字经常一起出现，但它们的训练目标很不同。

| 模型 | 核心训练信号 | 学到什么 | 更擅长什么 |
| --- | --- | --- | --- |
| DINO | 图像不同视角的一致性 | 无标签视觉语义特征 | 检索、分类、检测/分割 backbone |
| DINOv2 | 大规模 curated data + 自监督 | 更稳健的通用视觉特征 | 多下游迁移、dense feature |
| DINOv3 | 视觉基础模型与 dense representation | 更强位置级特征 | 检测、分割、深度、遥感等 |
| CLIP | 图像-文本对齐 | 视觉和语言共同空间 | 零样本分类、图文检索 |
| MAE | 遮住 patch 后重建像素 | 图像结构和补全能力 | 预训练 backbone |
| SAM | 大规模提示分割 | 可提示的分割能力 | 交互式/自动分割 |

DINO 和 CLIP 最大区别在于：CLIP 学的是图像和文本对齐，DINO 学的是图像内部的一致性。CLIP 更容易零样本说出类别名，DINO 的视觉特征则常常更适合作为下游视觉任务 backbone。

# DINO 自监督训练流程

![DINO 训练流程](/images/posts/dino-v1-v3/training-pipeline.svg)

简化的训练循环可以写成这样：

```python
import torch
import torch.nn.functional as F

@torch.no_grad()
def update_teacher(student, teacher, momentum=0.996):
    """用 student 的指数滑动平均更新 teacher。"""
    for ps, pt in zip(student.parameters(), teacher.parameters()):
        pt.data.mul_(momentum).add_(ps.data, alpha=1 - momentum)

def dino_loss(student_logits, teacher_logits, temp_s=0.1, temp_t=0.04):
    """教学版 DINO loss：让 student 分布接近 teacher 分布。"""
    student_logprob = F.log_softmax(student_logits / temp_s, dim=-1)

    # teacher 不反向传播，作为稳定训练目标。
    with torch.no_grad():
        teacher_prob = F.softmax(teacher_logits / temp_t, dim=-1)

    return -(teacher_prob * student_logprob).sum(dim=-1).mean()

for images in dataloader:
    global_view, local_view = augment(images)

    teacher_logits = teacher(global_view)
    student_logits_1 = student(global_view)
    student_logits_2 = student(local_view)

    loss = dino_loss(student_logits_1, teacher_logits)
    loss = loss + dino_loss(student_logits_2, teacher_logits)

    loss.backward()
    optimizer.step()
    optimizer.zero_grad()

    update_teacher(student, teacher)
```

这段代码省略了多 crop、centering、distributed training 等工程细节，但它抓住了核心：teacher 提供目标，student 学一致，teacher 慢慢跟随 student。

# 如何提取 DINO 特征

以 Torch Hub 风格为例，DINOv2 可以这样加载：

```python
import torch
from PIL import Image
from torchvision import transforms

device = "cuda" if torch.cuda.is_available() else "cpu"

# 加载 DINOv2 ViT-L/14 backbone。
model = torch.hub.load("facebookresearch/dinov2", "dinov2_vitl14")
model = model.to(device).eval()

transform = transforms.Compose([
    transforms.Resize(518),
    transforms.CenterCrop(518),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=(0.485, 0.456, 0.406),
        std=(0.229, 0.224, 0.225),
    ),
])

image = Image.open("demo.jpg").convert("RGB")
x = transform(image).unsqueeze(0).to(device)

with torch.no_grad():
    features = model(x)

print(features.shape)
```

这些特征可以做很多事情。比如最简单的图像检索：把图库每张图都提取成向量，查询图也提取向量，然后计算余弦相似度。

```python
import torch.nn.functional as F

def cosine_search(query_feature, gallery_features, topk=5):
    query_feature = F.normalize(query_feature, dim=-1)
    gallery_features = F.normalize(gallery_features, dim=-1)
    scores = query_feature @ gallery_features.T
    values, indices = scores.topk(topk, dim=-1)
    return values, indices
```

这就是很多“以图搜图”“相似图检索”“重复图片过滤”的底层逻辑。

# 下游任务：一次预训练，多处复用

![DINO 下游任务流程](/images/posts/dino-v1-v3/downstream-pipeline.svg)

DINO 特征可以服务很多任务：

| 任务 | 使用方式 | 直观理解 |
| --- | --- | --- |
| 图像分类 | 冻结 backbone，训练线性分类头 | 看整张图是什么 |
| 图像检索 | 提取全局向量，比相似度 | 找相似图片 |
| 目标检测 | 作为 backbone 输出多尺度特征 | 检测器借用强视觉表征 |
| 语义分割 | 使用 dense feature 接分割头 | 每个位置都有语义 |
| 深度估计 | 接 DPT 等 depth head | 从视觉结构推断距离 |
| 遥感/医学迁移 | 少量标注微调 | 用通用特征适配专业领域 |

RF-DETR 使用 DINOv2 作为视觉 backbone，正体现了这种趋势：检测器不一定要从零开始学图像特征，而是可以站在视觉基础模型肩膀上。

# 什么时候该用 DINO

如果你的任务标签少、领域变化大、或者你需要一个通用视觉特征抽取器，DINO 系列很值得尝试。尤其是下面几类场景：

1. 图像相似度检索；
2. 小样本分类；
3. 需要强 backbone 的检测/分割；
4. 遥感、工业、医学这类标注昂贵的领域；
5. 需要可解释 patch feature 的分析任务。

但也不要神化 DINO。它不是万能的。如果你需要“根据文字描述找图”，CLIP 可能更直接；如果你需要交互式分割，SAM 更合适；如果你已经有大量标注数据，监督训练或微调仍然很强。

# 小结

DINO 系列的主线非常清晰：

- DINOv1 证明：无标签自监督 ViT 会涌现语义。
- DINOv2 推进：高质量大规模数据让视觉特征更稳健、更通用。
- DINOv3 扩展：视觉基础模型需要更强 dense feature，服务检测、分割、深度等位置敏感任务。

它们共同回答了一个重要问题：视觉模型能不能不靠人工类别标签，也学到有用的世界结构？答案已经越来越明确：可以，而且这些特征正在成为现代视觉系统的重要地基。

# 参考资料

- DINO 官方仓库：<https://github.com/facebookresearch/dino>
- DINO 论文：<https://arxiv.org/abs/2104.14294>
- DINOv2 官方仓库：<https://github.com/facebookresearch/dinov2>
- DINOv2 论文：<https://arxiv.org/abs/2304.07193>
- DINOv3 官方仓库：<https://github.com/facebookresearch/dinov3>
- Vision Transformer：<https://arxiv.org/abs/2010.11929>
- MAE：<https://arxiv.org/abs/2111.06377>
- CLIP：<https://arxiv.org/abs/2103.00020>
- Segment Anything：<https://arxiv.org/abs/2304.02643>
