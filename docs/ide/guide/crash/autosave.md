---
id: autosave
title: 自动保存
---

除了[崩溃恢复](../crashRecovery)，IDE同时提供了自动存档机制，帮助您在一些特殊情况下（例如电脑断电），保护您的设计工作。

## 自动保存路径
IDE会在msd文件的相同文件夹中，创建一个 MSD名称.bak.msd 文件，例如：

![错误恢复对话框](./assets/autosave-files.jpg)

其中`黑客帝国.bak.msd`即`黑客帝国.msd`的自动存档

## 自动保存机制
目前自动保存为每隔两分钟保存一次。