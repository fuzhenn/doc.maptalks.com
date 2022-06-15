---
id: intro
title: SDK概述
---

MapTalks的三维SDK是基于2017年发布的[maptalks.js开源库](https://maptalks.org)的高级图层插件，在使用MapTalks三维SDK前，您需要先熟悉一下 maptalks.js 的[示例](https://maptalks.org/examples/cn/map/load/)，[API](https://maptalks.org/maptalks.js/api/0.x/Map.html)和[文档](https://github.com/maptalks/maptalks.js/wiki)。

MapTalks的三维SDK目前包含以下几个前端库，涵盖了[矢量瓦片](../../ide/guide/basic/vt/)，[3dtiles](https://github.com/CesiumGS/3d-tiles)，[GLTF](../../ide/guide/basic/gltf/)等最常用三维数据格式的加载功能。

| 库名称     |  功能         | 示例 | 项目 |
| :-------   |:-------------| ----- | --- |
|maptalks.js | maptalks开源核心库，以下所有功能的基础库。 | [示例](https://maptalks.org/examples/cn/map/load/) | [源代码](https://github.com/maptalks/maptalks.js) |
|@maptalks/gl | WebGL基础设施，材质，抗锯齿，阴影等全局后处理和空间分析 | [示例](http://examples.maptalks.com) | bug报告 |
|@maptalks/vt | 加载矢量瓦片数据，同时提供矢量点，线，面的三维绘制能力 | [示例](http://examples.maptalks.com) | bug报告 |
|@maptalks/gltf-layer         | 加载GLTF三维模型数据      | [示例](http://examples.maptalks.com) | bug报告 |
|@maptalks/transform-control  | GLTF模型的交互操作控件    | [示例](http://examples.maptalks.com) | bug报告 |
|@maptalks/3dtiles            | 加载3dtiles三维模型数据   | [示例](http://examples.maptalks.com) | [bug报告](https://github.com/fuzhenn/3dtiles-issues) |
|@maptalks/video-layer              | 视频融合绘制              | [示例](http://examples.maptalks.com) | bug报告 |
|@maptalks/msd-json-loader    | IDE MSD设计成果加载工具   | [示例](http://examples.maptalks.com) | [源代码](https://github.com/maptalks/msd-json-loader)  |

## 技术交流群

* 程序员交流QQ群： 971657972
* 设计师交流QQ群： 965857373

## 技术路线

SDK采用JavaScript ES6语法开发，用户可以在HTML页面中加载运行。

SDK中的库均提供了typescript类声明支持。

## 如何安装

SDK中的库均发布到了npm上，用户可以使用npm或yarn等包管理软件安装使用。

## @maptalks/gl

### 安装
```
npm i @maptalks/gl
```

### 包含的图层

* [GroupGLLayer](../gl/group-gl-layer/): GroupGLLayer图层，提供统一的WebGL容器，让多个webgl图层在同一个三维空间里统一融合渲染，并提供了抗锯齿，阴影，天空盒，天气效果等后处理功能。
* [ViewshedAnalysis](../gl/viewshed-analysis/): 可视域分析类。
* [FloodAnalysis](../gl/flood-analysis/): 水淹分析类。
* [SkylineAnalysis](../gl/skyline-analysis/): 天际线分析类。

-----------

## @maptalks/vt 库

### 安装
```
npm i @maptalks/vt
```

### 包含的图层

* [VectorTileLayer](../vt/vector-tile-layer): 矢量瓦片图层
* [GeoJSONVectorTileLayer](../vt/geojson-vector-tile-layer): GeoJSON矢量瓦片切片图层
* [PointLayer](../vt/point-layer): WebGL技术渲染的点图层
* [LineStringLayer](../vt/linestring-layer): WebGL技术渲染的线图层
* [PolygonLayer](../vt/linestring-layer): WebGL技术渲染的面图层

### 示例

-----------

## @maptalks/gltf 库

### 安装
```
npm i @maptalks/gltf-layer
```

### 包含的图层

* [GLTFLayer](../gltf/gltf-layer): GLTF模型渲染和交互图层

### 示例

-----------

## @maptalks/3dtiles 库

### 安装
```
npm i @maptalks/3dtiles
```

### 包含的图层

* [Geo3DTilesLayer](../3dtiles/geo-3dtiles-layer): 3DTiles渲染和交互图层

------------

## @maptalks/msd-json-loader