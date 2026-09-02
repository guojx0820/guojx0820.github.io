---
title: 从 Transformer 到大语言模型：预训练、对齐、LoRA、RAG 与推理优化
tags:
  - 深度学习
  - 大语言模型
  - Transformer
  - RAG
  - LoRA
description: 这篇文章从 Transformer 的自注意力机制出发，系统梳理大语言模型的预训练、对齐、参数高效微调、检索增强生成和推理优化方法，并给出可运行的 NumPy 自注意力示例与低配置本地推理实践建议。
cover: /images/posts/llm-transformer-rag/cover.png
categories: 程序代码
sticky: 1
mathjax: true
abbrlink: 9d6a35f0
date: 2026-09-02 17:30:00
---

# 前言

过去几年，大语言模型（Large Language Model, LLM）从论文里的预训练模型，变成了普通开发者每天可以调用、部署和二次开发的基础设施。表面上看，它像一个“会聊天的程序”；深入一点看，它是一套由数据、模型结构、训练目标、对齐方法、检索系统、推理引擎和产品约束共同组成的工程系统。

我写这篇文章的目标，不是追逐某一个模型榜单，而是把大模型技术栈中最容易混在一起的概念拆开：Transformer 为什么能成为主干结构，预训练到底学到了什么，指令微调和 RLHF/DPO 在改变什么，LoRA/QLoRA 为什么能让普通显卡做定制化，RAG 为什么常常比微调更适合知识问答，推理优化又为什么会决定一个系统能不能真正上线。

![大语言模型技术封面](/images/posts/llm-transformer-rag/cover.png)

# 语言模型的本质：预测下一个 token

今天主流自回归大语言模型的训练目标可以写得很朴素：给定已经出现的 token 序列 $x_1, x_2, \ldots, x_{t-1}$，预测下一个 token $x_t$ 的概率分布：

$$
P(x_1,\ldots,x_T)=\prod_{t=1}^{T}P(x_t|x_{<t})
$$

这里的 token 不一定等同于汉字、英文单词或标点。现代 tokenizer 往往使用 BPE、SentencePiece 或类似子词算法，把文本切成频繁片段。中文里一个 token 可能是一个字、一个词的一部分，也可能是一段常见字符组合；代码里一个 token 也可能是缩进、括号或关键字片段。

这种训练目标看似简单，但规模足够大时会产生很强的压缩效果。模型为了预测下一个 token，必须在参数中沉淀语法、常识、风格、推理路径、代码模式和大量世界知识的统计结构。注意，这不是说模型“像数据库一样记住事实”，而是它在高维参数空间中学习了生成文本分布的函数近似。因此，大模型既能表现出惊人的泛化能力，也会出现幻觉、过时知识和无法可靠追溯来源的问题。

# Transformer 为什么重要

早期序列建模常用 RNN、LSTM 或 GRU。它们按时间顺序处理文本，天然适合序列，但长距离依赖和并行训练效率受限。Transformer 的突破在于用自注意力（self-attention）直接建模序列中任意两个位置的关系，让每个 token 都能根据上下文动态选择“该看谁”。

![Transformer 数据流](/images/posts/llm-transformer-rag/transformer-flow.svg)

Transformer 的输入通常经过三步：先分词得到 token ID，再通过 embedding 矩阵映射成向量，最后加入位置编码或旋转位置嵌入，让模型知道顺序。随后，向量进入多层 Transformer Block。对 decoder-only 大模型来说，每一层一般包含 masked multi-head attention、前馈网络、残差连接和归一化。

自注意力的核心公式是：

$$
Attention(Q,K,V)=softmax(\frac{QK^T}{\sqrt{d_k}})V
$$

其中 $Q$ 是 query，$K$ 是 key，$V$ 是 value。直观理解：当前位置用 query 去和所有历史位置的 key 做相似度匹配，softmax 得到权重，再对 value 加权求和。除以 $\sqrt{d_k}$ 是为了控制点积尺度，避免维度变大后 softmax 过于尖锐。

多头注意力则是把这件事在多个子空间里并行做。一个头可能更关注局部语法，一个头可能更关注变量引用，一个头可能更关注长距离主题一致性。我们不应该把每个头机械解释成固定功能，但多头结构确实增加了模型捕捉不同关系模式的能力。

# Decoder-only 成为主流的原因

Transformer 原始论文同时包含 encoder 和 decoder。机器翻译常见 encoder-decoder 架构，BERT 是 encoder-only 的代表，GPT 系列则是 decoder-only。大语言模型领域最终更偏向 decoder-only，不是因为它在所有任务上天然最优，而是因为它非常适合统一为“给定上下文继续生成”的任务形式。

问答、摘要、代码补全、文本改写、工具调用、结构化输出，都可以被组织为输入上下文加目标输出。模型只需要沿着 token 序列从左到右生成即可。这个统一接口带来很强的工程优势：训练目标简洁，推理方式统一，prompt 能作为轻量任务描述层，对接应用也更自然。

# 预训练：大模型的底座

预训练阶段通常消耗最多数据和算力。模型在海量语料上学习预测下一个 token，这些语料可能包含网页、书籍、论文、代码、问答、百科和经过授权的数据集。预训练的关键不只是“更多数据”，还包括质量过滤、去重、语言比例、代码比例、敏感内容处理、版权边界和评测集污染控制。

Scaling Laws 指出，在一定范围内，模型性能会随着参数量、数据量和计算量呈现可预测的幂律改进。后来 Chinchilla 一类研究进一步强调：在给定计算预算下，参数量和训练 token 数之间要平衡，模型不是越大越好，训练 token 不足的大模型会浪费算力。

这对工程实践有一个直接启示：当我们训练或微调模型时，不要只问“参数量多大”，还要问“数据是否足够干净、任务分布是否匹配、训练步数是否合适、评测是否覆盖真实场景”。一个小而干净的数据集，常常比一堆噪声样本更有价值。

# 对齐：让模型更像一个可用助手

预训练模型学会了续写，但未必知道如何成为“助手”。如果用户问“帮我总结这段材料”，预训练模型可能续写材料，也可能模仿网页语气，而不是给出清晰答案。指令微调（Supervised Fine-tuning, SFT）通过人工或模型生成的指令-回答样本，让模型学习“看到任务后应该按要求回答”。

SFT 之后，还需要处理偏好问题。两份答案都可能语法正确，但哪一份更有帮助、更诚实、更简洁、更安全？RLHF 使用人类偏好数据训练奖励模型，再用强化学习优化语言模型。DPO 则把偏好优化写成更直接的分类式目标，避免显式训练奖励模型和复杂的 PPO 过程，因此在工程上更轻便。

![大模型训练与对齐流程](/images/posts/llm-transformer-rag/training-alignment.svg)

对齐不是给模型“安装价值观”这么简单，它更像是把模型输出分布往可用产品形态上推：遵循指令、承认不确定性、拒绝明显危险请求、保持格式、减少胡编乱造。但对齐也有代价。如果偏好数据过窄，模型会变得啰嗦、保守，甚至在专业问题上“看似礼貌但不够锋利”。好的对齐需要评测闭环，而不是只看聊天体验。

# LoRA 与 QLoRA：让微调变得可负担

全量微调需要更新模型全部参数。对 7B、13B 甚至更大的模型来说，这意味着显存、存储和训练成本都很高。LoRA 的想法很优雅：不直接更新原始权重 $W$，而是冻结 $W$，只学习一个低秩增量：

$$
W' = W + \Delta W,\quad \Delta W = BA
$$

如果 $W$ 的形状是 $d \times k$，而 $A$ 和 $B$ 的秩 $r$ 远小于 $d,k$，那么可训练参数量会大幅下降。模型主体保持不变，任务特定能力被压缩进少量 adapter 权重中。部署时可以动态加载不同 LoRA，也可以把 LoRA 合并回基座权重。

QLoRA 更进一步：把基座模型量化到 4-bit 等低精度表示，训练时只更新 LoRA 参数，并通过一系列量化和优化技巧降低显存占用。它让单卡训练更现实，尤其适合个人开发者、小团队和垂直场景快速实验。

不过，LoRA 不是万金油。它适合学习稳定风格、固定输出格式、领域术语、简单工具调用习惯和少量任务模式；如果目标是注入大量频繁变化的知识，把知识写进参数通常不是最优选择。知识更新应该优先考虑 RAG。

# RAG：把外部知识带进上下文

RAG（Retrieval-Augmented Generation）可以理解为“先检索，再生成”。系统收到问题后，先从文档库、数据库或知识库中检索相关片段，把这些片段连同问题一起放进 prompt，让模型基于可见材料回答。

典型 RAG 流程包括文档切分、向量化、索引构建、召回、重排、上下文拼接、生成和引用展示。这里每一步都影响效果。切分太短会丢上下文，切分太长会降低召回精度；embedding 模型不匹配会导致语义召回失败；只做向量召回可能漏掉关键词精确匹配；不做重排则容易把“看起来相关但回答不了问题”的材料塞进上下文。

![RAG 与微调选择图](/images/posts/llm-transformer-rag/rag-vs-finetune.svg)

我对 RAG 和微调的工程判断是：RAG 改变模型能看到什么，微调改变模型倾向怎么说、怎么做。如果知识会更新、需要引用来源、涉及企业内部文档，优先 RAG；如果输出格式、术语风格、业务动作和交互习惯需要稳定内化，再考虑 LoRA/QLoRA；如果两者都重要，可以先做 RAG，再用少量高质量交互样本做轻微调。

| 场景 | 优先方案 | 原因 |
|:--|:--|:--|
| 公司制度问答、论文库问答、项目文档助手 | RAG | 知识变化快，需要可追溯引用 |
| 固定格式报告、客服话术、代码风格迁移 | LoRA/QLoRA | 行为模式稳定，可用少量样本塑形 |
| 医疗、法律、金融等高风险咨询辅助 | RAG + 严格评测 | 必须保留来源、边界和人工复核 |
| 多租户个性化助手 | 多 LoRA 或 prompt/RAG 混合 | 不同用户需求差异大 |

# 推理优化：上线时真正昂贵的部分

训练很贵，但对一个持续运行的产品来说，推理成本可能更敏感。用户每发一次请求，模型都要把上下文 token 编码，并逐 token 生成回答。生成阶段无法完全并行，因为下一个 token 依赖上一个 token。

KV Cache 是最基础的优化之一。Transformer 每层会产生 key 和 value，如果每生成一个 token 都重新计算所有历史 token，成本会非常高。KV Cache 缓存历史 key/value，新 token 只需要和缓存交互，从而显著降低生成阶段重复计算。但它也带来显存压力，尤其在长上下文、多并发场景中，KV Cache 往往成为瓶颈。

量化通过降低权重精度减少显存和带宽压力。常见做法包括 8-bit、4-bit 权重量化，甚至更激进的混合量化。量化不只是“把模型压小”，它会影响速度、精度、硬件兼容和数值稳定。真实部署时要用业务数据评测，不要只看通用榜单。

FlashAttention 关注注意力计算的内存访问效率。它不改变精确 attention 的数学结果，而是通过分块和 IO-aware 设计减少高带宽内存读写，提升训练和长序列推理效率。PagedAttention 则从服务系统角度管理 KV Cache，把显存组织得更像分页内存，提升吞吐和并发。

推测解码（speculative decoding）使用一个小模型先草拟多个 token，再由大模型验证，从而减少大模型前向次数。它的收益取决于小模型和大模型分布接近程度、验证接受率、硬件利用率和批处理策略。实际工程里，连续批处理、请求调度、流式输出、超时取消和缓存复用同样重要。

# 一个可运行的 NumPy 自注意力示例

下面的代码演示单头 scaled dot-product attention。它不依赖深度学习框架，适合理解 $QK^T$、softmax 和加权求和的关系。

```python
import numpy as np

np.set_printoptions(precision=3, suppress=True)

def softmax(x, axis=-1):
    x = x - np.max(x, axis=axis, keepdims=True)
    exp_x = np.exp(x)
    return exp_x / np.sum(exp_x, axis=axis, keepdims=True)

# 3 个 token，每个 token 4 维表示
X = np.array([
    [1.0, 0.2, 0.1, 0.0],
    [0.1, 1.0, 0.3, 0.2],
    [0.0, 0.2, 1.0, 0.8],
])

d_model = X.shape[1]
W_q = np.random.default_rng(1).normal(size=(d_model, d_model))
W_k = np.random.default_rng(2).normal(size=(d_model, d_model))
W_v = np.random.default_rng(3).normal(size=(d_model, d_model))

Q = X @ W_q
K = X @ W_k
V = X @ W_v

scores = Q @ K.T / np.sqrt(d_model)

# decoder-only 模型使用因果 mask，禁止当前位置看到未来 token
mask = np.triu(np.ones_like(scores), k=1).astype(bool)
scores[mask] = -1e9

weights = softmax(scores, axis=-1)
output = weights @ V

print("attention weights:")
print(weights)
print("output:")
print(output)
```

运行后，第一行 token 只能关注自己；第二行可以关注前两个 token；第三行可以关注全部历史 token。这就是自回归模型“只能看过去，不能偷看未来”的基础。

# 低配置本地推理示例

如果你只是想在普通 Windows 笔记本上体验本地推理，可以优先选择 1B 到 3B 级别的小模型，并使用量化版本。以 `llama.cpp` 为例，一般流程是：安装或下载可执行文件，准备 GGUF 格式模型，然后运行：

```powershell
.\llama-cli.exe -m .\models\qwen2.5-1.5b-instruct-q4_k_m.gguf -p "用三句话解释什么是RAG"
```

如果机器只有集成显卡或显存很小，不要一开始就尝试 7B 以上模型。更现实的起点是 1.5B 或 3B 的 4-bit 量化模型。它的回答质量不能和云端大模型相比，但足以用于学习 tokenizer、上下文窗口、温度、top-p、系统提示词和基础 RAG 流程。真正做产品时，仍然要根据延迟、吞吐、数据安全、成本和效果评测决定是本地部署、私有化部署还是调用云端 API。

# 评测比“感觉很好用”更重要

大模型系统最容易踩的坑，是靠少量手工对话判断质量。一个 prompt 在十个样例上表现很好，不代表它能抗住真实用户。建议建立最小评测集：覆盖高频问题、边界问题、恶意输入、过时知识、长上下文、空结果检索、格式约束和多轮对话。

对 RAG 系统，可以分别评估检索和生成：检索是否召回了正确文档，重排是否把答案片段放在前面，生成是否忠于材料，引用是否能追溯，模型是否在材料不足时承认不知道。对微调系统，则要评估旧能力是否退化、格式是否稳定、是否过拟合训练样本、是否引入新的安全问题。

技术博客里我们常讲模型结构，但工程里真正决定体验的往往是这些“外围系统”：数据清洗、提示词模板、检索索引、缓存、限流、日志、评测、回滚、监控和人工复核。大模型不是一个孤立函数，而是一条持续迭代的生产链路。

# 小结

Transformer 用自注意力解决了长距离依赖和并行训练问题，decoder-only 架构把大量任务统一成自回归生成。预训练提供底座能力，对齐让模型更适合做人机交互，LoRA/QLoRA 降低了定制成本，RAG 让模型连接可更新知识，推理优化决定了系统能否低延迟、低成本地服务真实用户。

如果用一句话概括这篇文章：预训练决定模型的“底层语言和世界压缩能力”，对齐决定它“如何回应人”，RAG 决定它“现在能看见什么资料”，LoRA 决定它“是否能以低成本学会稳定习惯”，推理系统决定它“能不能在真实流量下活下来”。

# 参考资料

- Vaswani et al., [Attention Is All You Need](https://arxiv.org/abs/1706.03762), 2017.
- Kaplan et al., [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361), 2020.
- Hoffmann et al., [Training Compute-Optimal Large Language Models](https://arxiv.org/abs/2203.15556), 2022.
- Ouyang et al., [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155), 2022.
- Rafailov et al., [Direct Preference Optimization](https://arxiv.org/abs/2305.18290), 2023.
- Hu et al., [LoRA: Low-Rank Adaptation of Large Language Models](https://arxiv.org/abs/2106.09685), 2021.
- Dettmers et al., [QLoRA: Efficient Finetuning of Quantized LLMs](https://arxiv.org/abs/2305.14314), 2023.
- Lewis et al., [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401), 2020.
- Dao et al., [FlashAttention](https://arxiv.org/abs/2205.14135), 2022.
- Kwon et al., [Efficient Memory Management for Large Language Model Serving with PagedAttention](https://arxiv.org/abs/2309.06180), 2023.
- Leviathan et al., [Fast Inference from Transformers via Speculative Decoding](https://arxiv.org/abs/2211.17192), 2023.
- llama.cpp, [GitHub Repository](https://github.com/ggml-org/llama.cpp).
