# PointLayer

PointLayer是基于WebGL图形技术的的点数据绘制图层。 PointLayer和[VectorTileLayer](../vector-tile-layer)采用同样的绘制逻辑，共享同样的Symbol样式。

PointLayer的用法和maptalks核心库中[VectorLayer](https://maptalks.org/maptalks.js/api/0.x/VectorLayer.html)完全一样，但得益于WebGL技术，性能有着显著提升。

PointLayer仅支持添加[Marker](https://maptalks.org/maptalks.js/api/0.x/Marker.html) 和 [MultiPoint](https://maptalks.org/maptalks.js/api/0.x/MultiPoint.html)，添加其他数据时会报错。

PointLayer支持[Symbol样式](../../../style/symbols)中的所有marker和text样式。

它是[maptalks.OverlayLayer](https://maptalks.org/maptalks.js/api/0.x/OverlayLayer.html)的子类，继承了 OverlayerLayer 上所有的方法。

:::info
PointLayer默认把所有Marker拼装成一个三维Mesh进行绘制，Marker部分样式的更新会导致图层重新构造Mesh，频繁操作会出现性能问题，具体说明请见[矢量图层的性能优化](../vector-perf)文档。
:::

## 构造函数

```javascript
import { PointLayer } from '@maptalks/vt';

const layer = new PointLayer('point0');
```
<details><summary>详细信息</summary>
<div>
参数：

* id\* **String** 图层id
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型   |  描述                     | 默认值 |
|  ------             | :----:  | ----                      |   :-----------:  |
|iconErrorUrl         | String  | 出现错误的图标替代图标       | null |
|collision            | Boolean | 是否开启碰撞检测            | false |
|collisionFrameLimit  | Number  | 每帧参与碰撞检测计算的时间限制，单位ms | 1 |
|sceneConfig          | Object  | 点渲染程序的sceneConfig     | 默认配置 |
|sceneConfig.fading   | Boolean | 是否开启碰撞检测的渐隐渐变   | false |
|sceneConfig.fadingDuration | Number | 碰撞检测渐隐渐变持续时间，单位ms | 16 * 14 |
|sceneConfig.fadeInDelay    | Number | 通过碰撞检测后，显示前的延迟时间，单位ms | 600 |
|sceneConfig.fadeOutDelay   | Number | 未通过碰撞检测，隐藏前的延迟时间，单位ms | 100 |
|sceneConfig.fadingDuration | Number | 碰撞检测渐隐渐变持续时间，单位ms | 16 * 14 |
|sceneConfig.depthFunc| String  | 深度测试函数，可选的值有:'always', '<=', '<', '>=', '>', '=', '!=', 'never' | 'always' |
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

从图层的json对象创建一个PointLayer对象。

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
```

返回：

* PointLayer

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