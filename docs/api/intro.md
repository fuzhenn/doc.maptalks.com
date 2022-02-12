---
id: intro
title: API概述
---

## @maptalks/vt 库

### 安装
```
npm i @maptalks/vt
```

### 包含的图层

* [VectorTileLayer](vt/vector-tile-layer): 矢量瓦片图层
* [GeoJSONVectorTileLayer](vt/geojson-vector-tile-layer): GeoJSON矢量瓦片切片图层
* [PointLayer](vt/point-layer): WebGL技术渲染的点图层
* [LineStringLayer](vt/linestring-layer): WebGL技术渲染的线图层
* [PolygonLayer](vt/linestring-layer): WebGL技术渲染的面图层

-----------

## @maptalks/gltf 库

### 安装
```
npm i @maptalks/gltf-layer
```

### 包含的图层

* [GLTFLayer](gltf/gltf-layer): GLTF模型渲染和交互图层

-----------

## @maptalks/3dtiles 库

### 安装
```
npm i @maptalks/3dtiles
```

### 包含的图层

* [Geo3DTilesLayer](3dtiles/3dtiles-layer): 3DTiles渲染和交互图层

-----------

## @maptalks/gl

### 安装
```
npm i @maptalks/gl
```

### 包含的图层

* [GroupGLLayer](gl/group-gl-layer): GroupGLLayer图层，提供统一的WebGL容器，让多个webgl图层在同一个三维空间里统一融合渲染。
