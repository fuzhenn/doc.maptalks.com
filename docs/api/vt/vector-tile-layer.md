# VectorTileLayer

矢量瓦片图层 VectorTileLayer 用于在地图上加载并绘制[矢量瓦片](../guide/basic/vt)数据，并提供了必要的数据交互方法。

它是 [maptalks](https://maptalks.org)核心库 [TileLayer](https://maptalks.org/maptalks.js/api/0.x/TileLayer.html)的子类，同样继承了TileLayer上的方法和配置。

:::note
参数或配置名称上带 \* 表示该参数或配置不能为空，例如下面id后的\*号表示参数id是不能为空的：

* id* **String** 图层id

:::

## 构造函数

```javascript
import { VectorTileLayer } from '@maptalks/vt';

new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt'
});
```
<details><summary>详细信息</summary>
<p>

参数：

* id\* **String** 图层id
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名           |  类型           |  描述                 | 默认值 |
|  ------         | :----:  | ----  |   :-----------:  |
|urlTemplate\*    | String          | url模板               |  null  |
{@include: includes/vtlayer-options.md}

</p>
</details>


## 成员方法

{@include: includes/vtlayer-methods.md}

{@include: includes/tilelayer-methods.md}

{@include: includes/layer-methods.md}

## 静态方法

<details><summary>compressStyleJSON(style)</summary>
<p>
<br/>

通过合并相同定义的渲染插件，把style JSON压缩为尺寸更小的JSON对象。

```js
const compressedStyle = VectorTileLayer.compressStyleJSON(style);
````

参数：

* style **Object** 样式对象

返回：

* **Object**

</p>
</details>

<details><summary>registerPlugin(Plugin)</summary>
<p>
<br/>

注册新的渲染插件。

```js
VectorTileLayer.registerPlugin(PluginClazz);
````

参数：

* PluginClazz **PainterPlugin** 要注册的渲染插件类

</p>
</details>

<details><summary>getPlugins()</summary>
<p>
<br/>

获取所有注册的渲染插件。

```js
const pluginClasses = VectorTileLayer.getPlugins();
````

返回：

* PainterPlugin[]

</p>
</details>

<details><summary>fromJSON(json)</summary>
<p>
<br/>

从图层的json对象创建一个VectorTileLayer对象。

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
````

返回：

* VectorTileLayer

</p>
</details>

## 事件

{@include: includes/js-events-example.md}

### 图层事件

{@include: includes/vtlayer-events.md}

### 继承自TileLayer的事件

{@include: includes/tilelayer-events.md}

### 继承自Layer的事件

{@include: includes/layer-events.md}

