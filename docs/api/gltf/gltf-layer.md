# GLTFLayer

GLTFLayer是基于WebGL图形技术的的[GLTF三维模型](../ide/guide/basic/gltf)绘制图层。

GLTFLayer仅支持添加[GLTFMarker](gltf-marker) 和 [MultiGLTFMarker](multi-gltf-marker)，添加其他数据时会报错。

它是[maptalks.OverlayLayer](https://maptalks.org/maptalks.js/api/0.x/OverlayLayer.html)的子类，继承了 OverlayerLayer 上所有的方法。

## 构造函数

```javascript
import { GLTFLayer } from '@maptalks/gltf-layer';

const layer = new GLTFLayer('gltf0');
```
<details><summary>详细信息</summary>
<div>
参数：

* id\* **String** 图层id
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型   |  描述                     | 默认值 |
|  ------             | :----:  | ----                      |   :-----------:  |
{@include: ../vt/includes/layer-options.md}

</div>
</details>

{@include: ../vt/includes/overlay-layer-methods.md}

{@include: ../vt/includes/layer-methods.md}

## 静态方法

<details><summary>fromJSON(json)</summary>
<div>
<br/>

从图层的json对象创建一个GLTFLayer对象。

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
```

返回：

* GLTFLayer

</div>
</details>

## 事件

{@include: ../vt/includes/js-events-example.md}

### 图层事件

{@include: includes/gltf-layer-events.md}

### 继承自OverlayLayer的事件

{@include: ../vt/includes/overlay-layer-events.md}

### 继承自Layer的事件

{@include: ../vt/includes/layer-events.md}