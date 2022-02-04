---
id: gltf
title: 什么是GLTF
---

![GLTF Logo](./assets/GLTF_logo.svg.png)

[GLTF](https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html) 全称 GL Transmission Format (GL 传输格式)，是由[Khronos开放组织](https://www.khronos.org)（opengl，webgl等通用图形标准制定者）推出的全新3D模型存储格式。

基于web端通用的JSON格式与二进制格式数据，GLTF易于解析，性能高，数据紧凑，且能方便的与其他三维数据格式（obj，fbx等）互相转换，被Khronos定位为三维数据中的 jpeg 格式。

## 存储形式

GLTF有三种存储形式：
* gltf 文件 + bin文件 + 纹理图片

由 JSON 格式的 gltf、二进制格式的 bin 与纹理图片组合而成，並在 gltf 里使用 url 去指向 bin 和 纹理图片。

这种格式的优点是能利用浏览器的并发能力同时请求多个资源，加载速度更快。

* 单个 gltf 文件

即所有数据都存储在JSON格式的 gltf 文件中，原本的 bin 和纹理图片会转为 base64 形式存储于 gltf 中。

这种格式的优点是易于分享。

* 单个 glb 文件

将全部数据用二进制形式存储于 glb 文件中。

这种格式与单gltf格式一样易于分享的同时，得益于二进制的存储效率，文件也会比单个gltf格式更小一些。

## 如何查看GLTF？

windows 10操作系统上自带的3D查看器就提供了GLTF 2.0模型的查看功能。

您可以在sketchfab上免费下载一些[很炫酷的GLTF模型](https://sketchfab.com/features/gltf)。


## 版本

* GLTF 1.0

2012年由Khronos在 SIGGRAPH 2012 会议上第一次公布，并在2015年正式发布正式标准。 2016年 facebook的Oculus和微软相继宣布加入GLTF格式工作组。

* GLTF 2.0

GLTF 2.0标准于2017年正式发布，是一次与1.0版不兼容的全新升级。除了更合理的数据组织方式，还增加了Physically based rendering (PBR)支持，更强大的三维动画等功能。

到2019年，GLTF 2.0已经获得了世界一线公司的广泛支持，包括UX3D, Sketchfab, Facebook, Microsoft, Oculus, Google, Adobe, Box, TurboSquid, Unreal Engine。

三维工业领域的一线产品如  Autodesk Maya, Autodesk 3ds Max 以及 Poly 也都对GLTF提供了原生支持。

## 扩展

GLTF 用扩展的形式提供基础版本之上的高级功能，包括 [KTX2 纹理压缩](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_texture_basisu/README.md)，[Draco数据压缩](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_draco_mesh_compression/README.md) 等近两年最新的三维数据技术都以扩展的形式在GLTF上提供了支持。

这里是[GLTF全部扩展列表](https://github.com/KhronosGroup/glTF/blob/main/extensions/README.md)。

## 一些转换工具

* FBX转为GLTF https://github.com/facebookincubator/FBX2glTF
* Obj转为GLTF https://github.com/CesiumGS/obj2gltf
* Assimp（一个多种三维格式互相转换软件） https://github.com/assimp/assimp

