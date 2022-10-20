# LineStringLayer

LineStringLayer是基于WebGL图形技术的的线数据绘制图层。 LineStringLayer和[VectorTileLayer](../vector-tile-layer)采用同样的绘制逻辑，共享同样的Symbol样式。

LineStringLayer的用法和maptalks核心库中[VectorLayer](https://maptalks.org/maptalks.js/api/0.x/VectorLayer.html)完全一样，但得益于WebGL技术，性能有着显著提升。

LineStringLayer仅支持添加[LineString](https://maptalks.org/maptalks.js/api/0.x/LineString.html) 和 [MultiLineString](https://maptalks.org/maptalks.js/api/0.x/MultiLineString.html)，添加其他数据时会报错。

LineStringLayer支持[Symbol样式](../../../style/symbols)中的所有marker，text和line样式。 marker和text样式主要用于在线端点或线段中段指定位置绘制图标或沿线文字。

![沿线文字](./assets/line-text.jpg)

它是[maptalks.OverlayLayer](https://maptalks.org/maptalks.js/api/0.x/OverlayLayer.html)的子类，继承了 OverlayerLayer 上所有的方法。

:::info
LineStringLayer默认把所有LineString拼装成一个三维Mesh进行绘制，Marker部分样式的更新会导致图层重新构造Mesh，频繁操作会出现性能问题，具体说明请见[矢量图层的性能优化](../vector-perf)文档。
:::

## 构造函数

```javascript
import { LineStringLayer } from '@maptalks/gl-layers';

const layer = new LineStringLayer('line0');
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

* LineStringLayer

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