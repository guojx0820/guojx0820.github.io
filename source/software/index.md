---
title: 软件
date: 2026-10-08 14:00:00
type: "software"
top_img: https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/about.jpeg
---

# RF-DETR 缺陷检测平台

这是一套面向工业缺陷检测的 Windows 本地软件平台：前端是 **Tauri + React + TypeScript** 桌面软件，后端是 **Go Vision Core**，算法侧使用 **Python `.venv` + RF-DETR** 完成训练、导出 ONNX 和批量推理。

![RF-DETR 缺陷检测平台架构](/images/software/vision-platform-rfdetr.svg)

## 一、下载

> 当前推荐使用 GitHub Release 下载。软件包不直接放在博客仓库里，避免大型二进制文件拖慢博客构建和 Git 历史。

| 文件 | 用途 | 下载 |
| --- | --- | --- |
| `VisionPlatform_RFDETR_Windows_x64_v0.1.0.zip` | Windows 用户版软件包，不含模型权重 | [下载软件包](https://github.com/guojx0820/guojx0820.github.io/releases/download/vision-platform-v0.1.0/VisionPlatform_RFDETR_Windows_x64_v0.1.0.zip) |
| `rf-detr-nano.pth` | 入门和 CPU Smoke 推荐权重 | [下载 Nano 权重](https://github.com/guojx0820/guojx0820.github.io/releases/download/vision-platform-v0.1.0/rf-detr-nano.pth) |
| `rf-detr-medium.pth` | 常规训练/推理推荐权重 | [下载 Medium 权重](https://github.com/guojx0820/guojx0820.github.io/releases/download/vision-platform-v0.1.0/rf-detr-medium.pth) |
| `rf-detr-large.pth` | 高精度大模型权重，文件较大 | [下载 Large 权重](https://github.com/guojx0820/guojx0820.github.io/releases/download/vision-platform-v0.1.0/rf-detr-large.pth) |

如果 GitHub 下载较慢，后续会补充阿里云 OSS 镜像链接。

## 二、软件包包含什么

```text
app/Vision Platform.exe              桌面软件本体
software/go-core/vision-core.exe     Go 后端服务
software/workers/rfdetr/             RF-DETR Worker 适配层
scripts/ tools/ configs/             训练、推理、数据整理脚本
requirements-gpu.txt                 Python GPU 环境依赖
models/                              模型权重放这里
datasets/                            数据集放这里
outputs/                             训练和推理结果输出目录
```

这个下载包不包含前端源码、Go 后端源码、`.git`、`node_modules`、Rust `target` 编译缓存、`.venv`、本机私有数据集和历史训练输出。

## 三、第一次使用

### 1. 解压

把 ZIP 解压到一个路径简单的位置，例如：

```text
D:\VisionPlatform_RFDETR\
```

路径尽量不要包含中文、空格或特殊符号。

### 2. 配置 Python 算法环境

双击：

```text
配置 Python 算法环境.bat
```

它会创建 `.venv`，并安装 PyTorch、RF-DETR、ONNX Runtime、OpenCV 等依赖。

如果你只想在普通电脑上做 CPU 测试，可以打开 `配置 Python 算法环境.ps1`，把 PyTorch 安装命令改成 CPU 版本：

```powershell
python -m pip install torch torchvision --index-url https://download.pytorch.org/whl/cpu
```

如果你有 NVIDIA GPU，推荐使用 CUDA 版本：

```powershell
python -m pip install torch torchvision --index-url https://download.pytorch.org/whl/cu128
```

### 3. 下载模型权重

双击：

```text
下载模型权重.bat
```

或者手动下载上表中的权重文件，放到：

```text
models\rf-detr\
```

### 4. 启动桌面软件

双击：

```text
启动 RF-DETR 缺陷检测平台.bat
```

这个脚本只是启动器：它会先拉起 Go 后端，再打开真正的软件本体：

```text
app\Vision Platform.exe
```

## 四、适用场景

- 工业表面缺陷检测；
- 小样本缺陷数据训练；
- RF-DETR 检测模型训练、评估和导出；
- ONNX 批量推理；
- 本地 Windows 电脑快速部署，不依赖 Docker。

## 五、常见问题

### 软件打开后提示后端连接失败

后端默认地址是：

```text
http://127.0.0.1:18080
```

请确认启动器打开的后端窗口没有被关闭。如果端口被占用，可以在任务管理器里结束旧的 `vision-core.exe` 后重新启动。

### `.venv` 配置失败

先确认系统已安装 Python 3.10 或 3.11，并且 `python` 命令可以在 PowerShell 中运行。然后重新双击：

```text
配置 Python 算法环境.bat
```

### GPU 不可用

在软件目录打开 PowerShell，执行：

```powershell
.venv\Scripts\python.exe -c "import torch; print(torch.__version__); print(torch.cuda.is_available()); print(torch.version.cuda)"
```

如果输出 `False`，说明当前 PyTorch 没识别到 CUDA，需要检查 NVIDIA 驱动或重新安装匹配 CUDA 的 PyTorch。

## 六、版本记录

- `v0.1.0`：首个 Windows 用户版，包含 Tauri 桌面前端、Go 后端、RF-DETR 本地 Worker、`.venv` 配置流程和权重下载流程。
