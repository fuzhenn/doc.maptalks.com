---
id: intro
title: SDK概述
---

MapTalks的三维SDK是基于2017年发布的[maptalks.js开源库](https://maptalks.org)的高级图层插件，在使用MapTalks三维SDK前，您需要先熟悉一下 maptalks.js 的[示例](https://maptalks.org/examples/cn/map/load/)，[API](https://maptalks.org/maptalks.js/api/0.x/Map.html)和[文档](https://github.com/maptalks/maptalks.js/wiki)。

MapTalks的三维SDK目前包含以下几个前端库，涵盖了[矢量瓦片](../../ide/guide/basic/vt/)，[3dtiles](https://github.com/CesiumGS/3d-tiles)，[GLTF](../../ide/guide/basic/gltf/)等最常用三维数据格式的加载功能。

| 库名称     |  功能         | 示例 | 项目 |
| :-------   |:-------------| ----- | --- |
|maptalks.js | maptalks开源核心库，以下所有功能的基础库。 | [示例](https://maptalks.org/examples/cn/map/load/) | [源代码](https://github.com/maptalks/maptalks.js) |
|@maptalks/gl-layers | WebGL图层汇总包，包含以下所有插件 | [示例](http://examples.maptalks.com) | [源代码](https://github.com/fuzhenn/maptalks-gl-layers/) |

## 技术交流群

* 程序员交流QQ群： 971657972
* 设计师交流QQ群： 965857373

## 技术路线

SDK采用JavaScript ES6语法开发，用户可以在HTML页面中加载运行。

SDK中的库均提供了typescript类声明支持。

## 如何安装

SDK中的库均发布到了npm上，用户可以使用npm或yarn等包管理软件安装使用。

### 安装

```
npm i @maptalks/gl-layers
```