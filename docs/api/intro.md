---
id: intro
title: API概述
---

## @maptalks/vt 库

### 安装
```
npm i @maptalks/vt
```

### 矢量瓦片图层

矢量瓦片渲染和交互图层

* [VectorTileLayer](vt/vector-tile-layer): 矢量瓦片图层
* [GeoJSONVectorTileLayer](vt/geojson-vector-tile-layer): GeoJSON矢量瓦片切片图层

### 矢量点线面

用WebGL技术绘制点线面的矢量图层

* [PointLayer](vt/point-layer): 点图层
* [LineStringLayer](vt/linestring-layer): 线图层
* [PolygonLayer](vt/linestring-layer): 线图层


## @maptalks/gltf 库

### 安装
```
npm i @maptalks/gltf-layer
```

### GLTF图层

GLTF模型渲染和交互图层
* [GLTFLayer](gltf/gltf-layer): GLTF图层

## @maptalks/3dtiles 库

### 安装
```
npm i @maptalks/3dtiles
```

### 3DTiles图层

3DTiles渲染和交互图层
* [Geo3DTilesLayer](3dtiles/3dtiles-layer): Geo3DTilesLayer图层

## @maptalks/gl

### 安装
```
npm i @maptalks/gl
```

### GroupGLLayer图层

提供统一的WebGL容器，让多个webgl图层在同一个三维空间里统一融合渲染。
* [GroupGLLayer](gl/group-gl-layer): GroupGLLayer图层
