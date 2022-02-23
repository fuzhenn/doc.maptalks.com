# GeoJSONVectorTileLayer

GeoJSONVectorTileLayer 是用于在地图上绘制渲染GeoJSON数据的矢量瓦片图层。

该图层基于的 [geojson-vt](https://github.com/mapbox/geojson-vt) 开源库，在worker中对GeoJSON数据实时切片后返回给主线程渲染绘制。

采用矢量瓦片机制加载GeoJSON数据的优点：

* 性能高，轻松支持上百M GeoJSON文件的解析与渲染
* 体验好，数据处理都在worker中进行，不会造成主线程的卡顿

它是 [VectorTileLayer](vector-tile-layer)的子类，同样继承了VectorTileLayer上的方法和配置。

同样的，VectorTileLayer上的样式也无需修改应用到GeoJSONVectorTileLayer上，实现服务端矢量瓦片数据和本地GeoJSON数据的统一化。

:::note
参数或配置名称上带 \* 表示该参数或配置不能为空，例如下面id后的\*号表示参数id是不能为空的：

* id* **String** 图层id

:::

{@include: includes/vector-tile-layer-style.md}

## 构造函数

```javascript
import { GeoJSONVectorTileLayer } from '@maptalks/vt';

new GeoJSONVectorTileLayer('geojson0', {
  data: 'path/to/example.geojson'
});
```
<details><summary>详细信息</summary>
<div>

参数：

* id\* **String** 图层id
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名           |  类型           |  描述                 | 默认值 |
|  ------         | :----:  | ----  |   :-----------:  |
|data\*           | Object/String   | GeoJSON数据对象或者url  | null |
|features         | String          | 瓦片是否返回feature数据，默认只返回id | "id" |
{@include: includes/vtlayer-options.md}

</div>
</details>


## 成员方法

<details><summary>getData()</summary>
<div>
<br/>

获取GeoJSON数据。

```js
const layer = new GeoJSONVectorTileLayer('vt0', {
  data: 'path/to/example.geojson'
});
const data = layer.getData();
```

返回：

* String | Object

</div>
</details>


<details><summary>setData(data)</summary>
<div>
<br/>

更新图层数据。

```js
const layer = new GeoJSONVectorTileLayer('vt0', {
  data: 'path/to/example.geojson'
});
layer.setData('path/to/another.geojson');
```

参数：
* data **String | Object** GeoJSON数据或数据远程地址。

返回：

* this

</div>
</details>


<details><summary>getExtent()</summary>
<div>
<br/>

获取GeoJSON数据的Extent。

```js
const layer = new GeoJSONVectorTileLayer('vt0', {
  data: 'path/to/example.geojson'
});
const extent = layer.getExtent();
```

返回：

* maptalks.Extent

</div>
</details>


<details><summary>getFeature(id)</summary>
<div>
<br/>

获取给定ID的Feature。

```js
const layer = new GeoJSONVectorTileLayer('vt0', {
  data: 'path/to/example.geojson'
});
const feature = layer.getFeature(id);
```

返回：

* Object

</div>
</details>


## 继承自VectorTileLayer的方法
{@include: includes/vtlayer-methods.md}

{@include: includes/tilelayer-methods.md}

{@include: includes/layer-methods.md}

## 静态方法

<details><summary>compressStyleJSON(style)</summary>
<div>
<br/>

通过合并相同定义的渲染插件，把style JSON压缩为尺寸更小的JSON对象。

```js
const compressedStyle = GeoJSONVectorTileLayer.compressStyleJSON(style);
````

参数：

* style **Object** 样式对象

返回：

* **Object**

</div>
</details>


<details><summary>registerPlugin(Plugin)</summary>
<div>
<br/>

注册新的渲染插件。

```js
GeoJSONVectorTileLayer.registerPlugin(PluginClazz);
````

参数：

* PluginClazz **PainterPlugin** 要注册的渲染插件类

</div>
</details>


<details><summary>getPlugins()</summary>
<div>
<br/>

获取所有注册的渲染插件。

```js
const pluginClasses = GeoJSONVectorTileLayer.getPlugins();
````

返回：

* PainterPlugin[]

</div>
</details>


<details><summary>fromJSON(json)</summary>
<div>
<br/>

从图层的json对象创建一个GeoJSONVectorTileLayer对象。

```js
const json = layer.toJSON();

const layerCopied = maptalks.Layer.fromJSON(json);
````

返回：

* GeoJSONVectorTileLayer

</div>
</details>


## 事件

{@include: includes/js-events-example.md}

### 图层事件

<details><summary>dataload</summary>
<div>
<br/>

数据成功加载事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "dataload"  |
|target   | GeoJSONVectorTileLayer |   this     |
|extent   | Number[] |   数据Extent范围     |

</div>
</details>


<details><summary>dataerror</summary>
<div>
<br/>

数据加载错误事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "dataerror"  |
|target   | GeoJSONVectorTileLayer |   this     |
|error    | String |   错误信息     |

</div>
</details>


### 继承自VectorTilLayer的事件

{@include: includes/vtlayer-events.md}

### 继承自TileLayer的事件

{@include: includes/tilelayer-events.md}

### 继承自Layer的事件

{@include: includes/layer-events.md}