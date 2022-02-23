#GLTFMarker

GLTFMarker是[Marker](https://maptalks.org/maptalks.js/api/0.x/Marker.html)的子类，用于在指定地理坐标上添加GLTF模型和进行交互。

GLTFMarker能够用symbol设置模型的状态，例如缩放比例，透明度，旋转角度等，同时提供了方法用于更新模型，更新模型状态，开启暂停动画等。

## 构造函数

```javascript
import { GLTFMarker } from '@maptalks/gltf-layer';

const gltfMarker = new GLTFMarker([0, 0], {
  symbol: {
    url: 'path/to/gltf.gltf'
  }
});
```
<details><summary>详细信息</summary>
<div>
参数：

* coordinates\* **Number[]** 坐标
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型   |  描述                     | 默认值 |
|  ------             | :----:  | ----                      |   :-----------:  |
{@include: includes/gltf-marker-options.md}
{@include: includes/geometry-options.md}

</div>
</details>

## 样式说明

GLTFMarker的options.symbol中包含以下的设置和属性。

{@include: includes/gltf-marker-symbols.md}

## 成员函数

{@include: includes/gltf-marker-methods.md}

{@include: includes/geometry-methods.md}

## 静态方法

{@include: includes/geometry-static-methods.md}

## 事件

{@include: ../vt/includes/js-events-example.md}

### 图形事件

{@include: includes/gltf-marker-events.md}

### 继承自Geometry的事件

{@include: includes/geometry-events.md}