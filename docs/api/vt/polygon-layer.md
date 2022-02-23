# PolygonLayer

PolygonLayer是基于WebGL图形技术的的线数据绘制图层。 PolygonLayer和[VectorTileLayer](vector-tile-layer)采用同样的绘制逻辑，共享同样的Symbol样式。

PolygonLayer的用法和maptalks核心库中[VectorLayer](https://maptalks.org/maptalks.js/api/0.x/VectorLayer.html)完全一样，但得益于WebGL技术，性能有着显著提升。

PolygonLayer仅支持添加[Polygon](https://maptalks.org/maptalks.js/api/0.x/Polygon.html) 和 [MultiPolygon](https://maptalks.org/maptalks.js/api/0.x/MultiPolygon.html)，添加其他数据时会报错。

PolygonLayer支持[Symbol样式](../../style/symbols)中的所有marker，text，line和polygon样式。 line样式用于指定面边框的样式，marker和text样式主要用于在面的可达性极点绘制图标或沿线文字。

它是[maptalks.OverlayLayer](https://maptalks.org/maptalks.js/api/0.x/OverlayLayer.html)的子类，继承了 OverlayerLayer 上所有的方法。

:::info
PolygonLayer默认把所有Polygon拼装成一个三维Mesh进行绘制，Marker部分样式的更新会导致图层重新构造Mesh，频繁操作会出现性能问题，具体说明请见[矢量图层的性能优化](vector-perf)文档。
:::

## 构造函数

```javascript
import { PolygonLayer } from '@maptalks/vt';

const layer = new PolygonLayer('polygon0');
```
<details><summary>详细信息</summary>
<div>
参数：

* id\* **String** 图层id
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型   |  描述                     | 默认值 |
|  ------             | :----:  | ----                      |   :-----------:  |
{@include: includes/vector3d-layer-options.md}
{@include: includes/layer-options.md}

</div>
</details>

## 成员方法

{@include: includes/vector3d-layer-methods.md}

{@include: includes/overlay-layer-methods.md}

{@include: includes/layer-methods.md}

## 静态方法

<details><summary>fromJSON(json)</summary>
<div>
<br/>

从图层的json对象创建一个LineStringLayer对象。

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
````

返回：

* PolygonLayer

</div>
</details>

## 事件

{@include: includes/js-events-example.md}

### 图层事件

{@include: includes/vector3d-layer-events.md}

### 继承自OverlayLayer的事件

{@include: includes/overlay-layer-events.md}

### 继承自Layer的事件

{@include: includes/layer-events.md}