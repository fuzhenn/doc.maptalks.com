# Geo3DTilesLayer

3DTiles渲染图层插件，用于加载Cesium的3DTiles格式数据。

如果有什么bug或建议，可以在[这里](https://github.com/fuzhenn/3dtiles-issues/)提交给开发组。

特点：
* 个头小：gzip压缩前只有100多K（目前200多K是因为开启了源代码格式化）
* 性能高：可以通过调整maximumScreenSpaceError来获得很高的渲染性能
* 支持全：对所有3DTiles 1.0的格式均提供了支持
* 测试全：包含了Cesium所有相关格式的测试用例，以及实际项目中的数据用例，您提交的错误数据在您的允许下也会增加到测试用例中，保证未来的稳定性。
* 可与其他maptalks三维图层（例如矢量瓦片图层）融合渲染

支持的功能:
- [X] [B3DM格式](https://github.com/CesiumGS/3d-tiles/tree/main/specification/TileFormats/Batched3DModel) 批量模型格式，一般用于倾斜摄影
- [X] [PNTS格式](https://github.com/CesiumGS/3d-tiles/tree/main/specification/TileFormats/PointCloud)，点云格式
- [X] [I3DM格式](https://github.com/CesiumGS/3d-tiles/tree/main/specification/TileFormats/Instanced3DModel)，示例三维模型格式，一般用于大量重复的小品模型加载
- [X] [CMPT格式](https://github.com/CesiumGS/3d-tiles/tree/main/specification/TileFormats/Composite)，复合格式，其中包含单个或多个其他格式瓦片
- [X] [3DTiles的Draco扩展](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_draco_mesh_compression/README.md) Draco压缩扩展
- [X] [KHR_techiniques_webgl扩展](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Archived/KHR_techniques_webgl) 一个已经废弃的GLTF 2.0自定义shader扩展，但不少历史3dtiles数据仍在使用
- [X] CRN图片纹理格式
- [X] [KTX2图片纹理格式](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_texture_basisu/README.md)

它是[maptalks.Layer](https://maptalks.org/maptalks.js/api/0.x/Layer.html)的子类，继承了 Layer 上所有的方法。

## 示例代码

```html
<!DOCTYPE html>
<html>
<head>
<title>3dtiles viewer</title>
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl/dist/maptalksgl.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.draco/dist/transcoders.draco.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.crn/dist/transcoders.crn.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.ktx2/dist/transcoders.ktx2.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/3dtiles/dist/maptalks.3dtiles.js"></script>
<style>
   #map { width: 100vw; height: 100vh; }
</style>
</head>
<body>
<div id="map"></div>
<script>
const map = new maptalks.Map("map", {
    center: [0, 0],
    zoom: 2
});
const layer = new maptalks.Geo3DTilesLayer('3dtiles', {
    maxGPUMemory: 512, //最大缓存数，单位 M bytes
    // loadingLimitOnInteracting : 1, //地图交互过程中瓦片请求最大数量
    // loadingLimit : 0, //瓦片请求最大数量
    services : [
        {
            url: 'path/to/tileset.json',
            // maximumScreenSpaceError值越小，加载的模型越清晰，但加载的数据量会变大
            // 清晰度可以接受的情况下，推荐把这个值设得越大越好，性能会越好
            maximumScreenSpaceError: 24.0,
            // 数据请求的额外参数
            // urlParams: 'v=0.0',
            // fetch请求的额外参数
            // fetchOptions : { credentials : 'include' },
            // 把模型降低指定高度，单位米
            heightOffset: 0,
            // 环境光照值，倾斜摄影可以设为[1.0, 1.0, 1.0]获得最清晰的效果，非倾斜摄影可以适当降低，例如设为 [0.2, 0.2, 0.2]
            // 如果不设置，则采用地图上的默认光照值
            ambientLight: [1.0, 1.0, 1.0],
            // maxExtent: maxExtent
        },
        // 其他的3dtiles数据源
    ]
});
// 添加到GroupGLLayer中
// GroupGLLayer能实现抗锯齿等后处理，也能加入其他三维图层，让子图层都融合到同一个三维空间中
const groupLayer = new maptalks.GroupGLLayer('group', [layer]);
groupLayer.addTo(map);

layer.once('loadtileset', e => {
    const extent = layer.getExtent(e.index);
    map.fitExtent(extent, 0, { animation: false });
});
</script>
</body>
</html>
```

## npm安装
```
npm i @maptalks/3dtiles
```
### 使用
esm方式:
```js
import { GroupGLLayer } from '@maptalks/gl';
// 可选的draco插件
// import '@maptalks/transcoders.draco';
// 可选的crn纹理解析插件
// import '@maptalks/transcoders.crn';
// 可选的ktx2纹理解析插件
// import '@maptalks/transcoders.ktx2';
import { Geo3DTilesLayer } from '@maptalks/3dtiles';
```
commonjs方式：
```js
const { GroupGLLayer } = require('@maptalks/gl');
// 可选的draco插件
// require('@maptalks/transcoders.draco');
// require('@maptalks/transcoders.crn');
// require('@maptalks/transcoders.ktx2');
const { Geo3DTilesLayer } = require('@maptalks/3dtiles');
```

## 坐标系适配

我们可以通过给图层设置一个动态的 `offset` 选项，来适配不同的坐标系，例如 `cgcs2000`, `gcj02` 等。

坐标系转换已经有不少库，例如 [coordtransform](https://github.com/wandergis/coordtransform), [gcoord](https://github.com/hujiulong/gcoord)。

示例中用的是 [chinese_coordinate_conversion](https://github.com/fuzhenn/chinese_coordinate_conversion)。

示例代码：

```js
<script type="text/javascript" src="https://fuzhenn.github.io/chinese_coordinate_conversion/chncrs.js"></script>
<script>
const layer = new maptalks.Geo3DTilesLayer('3dtiles', {
    // 动态 offset 选项
    offset : function (center) {
        const res = map.getGLRes();
        // 坐标由 WGS84 转为 GCJ02
        const c = maptalks.CRSTransform.transform(center.toArray(), 'WGS84', 'GCJ02');
        const coord = map.coordToPointAtRes(new maptalks.Coordinate(c), res);
        const offset = map.coordToPointAtRes(center, res)._sub(coord);
        return offset._round().toArray();
    },
    services : [
        {
            url : 'path/to/tileset.json',
            //模型载入精度，在可接受尽量设置的大一些，以提升效率
            maximumScreenSpaceError : 16.0,
            //额外的模型url请求参数
            // urlParams : '',
            //高度偏移量，单位米，可以把模型整体
            heightOffset : 0,
            //环境光参数
            ambientLight : [1.0, 1.0, 1.0],
        },
    ]
});
</script>
```

## Draco解码插件
因为Draco解码程序体积较大，采用通用插件形式提供，即所有maptalks的插件都共用同一个Draco插件。

默认情况下，没加载解码插件时，如果模型是Draco格式编码，控制台会报错无法找到draco解码插件。
```
KHR_draco_mesh_compression is required but @maptalks/transcoders.draco is not loaded
```
此时加载draco解码插件即可。
```html
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl/dist/maptalksgl.js"></script>
<!-- draco插件，必须写在gl后面，其他插件的前面，es方式加载时同理 -->
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.draco/dist/transcoders.draco.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/3dtiles/dist/maptalks.3dtiles.js"></script>
```
npm安装draco插件
```
npm i @maptalks/transcoders.draco
```
esm方式:
```js
import { GroupGLLayer } from '@maptalks/gl';
import '@maptalks/transcoders.draco';
import { Geo3DTilesLayer } from '@maptalks/3dtiles';
```
commonjs方式：
```js
const { GroupGLLayer } = require('@maptalks/gl');
require('@maptalks/transcoders.draco');
const { Geo3DTilesLayer } = require('@maptalks/3dtiles');
```
## CRN纹理支持
和Draco一样，crn纹理也是采用通用插件方式实现的，添加crn解码插件即可。
因为crn插件是umd格式，采用esm载入时，需要webpack或rollup的commonjs插件支持。
```html
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl/dist/maptalksgl.js"></script>
<!-- crn插件，必须写在gl后面，其他插件的前面，es方式加载时同理 -->
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.crn/dist/transcoders.crn.js"></script>
```
npm安装crn插件
```
npm i @maptalks/transcoders.crn
```
esm加载方式:
```js
import { GroupGLLayer } from '@maptalks/gl';
import '@maptalks/transcoders.crn';
import { Geo3DTilesLayer } from '@maptalks/3dtiles';
```
commonjs方式：
```js
const { GroupGLLayer } = require('@maptalks/gl');
require('@maptalks/transcoders.crn');
const { Geo3DTilesLayer } = require('@maptalks/3dtiles');
```
## KTX2纹理支持
和Draco一样，ktx2纹理也是采用通用插件方式实现的，添加ktx2解码插件即可。
因为ktx2插件是umd格式，采用esm载入时，需要webpack或rollup的commonjs插件支持。
```html
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/@maptalks/gl/dist/maptalksgl.js"></script>
<!-- ktx2插件，必须写在gl后面，其他插件的前面，es方式加载时同理 -->
<script type="text/javascript" src="https://unpkg.com/@maptalks/transcoders.ktx2/dist/transcoders.ktx2.js"></script>
```
npm安装ktx2插件
```
npm i @maptalks/transcoders.ktx2
```
esm方式加载:
```js
import { GroupGLLayer } from '@maptalks/gl';
import '@maptalks/transcoders.ktx2';
import { Geo3DTilesLayer } from '@maptalks/3dtiles';
```
commonjs方式：
```js
const { GroupGLLayer } = require('@maptalks/gl');
require('@maptalks/transcoders.ktx2');
const { Geo3DTilesLayer } = require('@maptalks/3dtiles');
```
## 抗锯齿
默认情况下3dtiles绘制时会有很多锯齿，可以在GroupGLLayer上开启抗锯齿来解决。
```js
    const sceneConfig = {
        //开启后处理
        postProcess: {
            enable: true,
            //开启抗锯齿后处理
            antialias: {
                enable: true
            }
        }
    };

    const groupLayer = new maptalks.GroupGLLayer(id, [layer], { sceneConfig });
    groupLayer.addTo(map);
```


## 构造函数

```javascript
import { Geo3DTilesLayer } from '@maptalks/3dtiles';

const layer = new maptalks.Geo3DTilesLayer('3dtiles', {
    maxGPUMemory: 512,
    services : [
        {
            url: 'path/to/tileset.json',
            maximumScreenSpaceError: 24.0,
            heightOffset: 0,
            ambientLight: [1.0, 1.0, 1.0],
        },
    ]
});
```
<details><summary>详细信息</summary>
<div>
参数：

* id\* **String** 图层id
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名                     |  类型   |  描述                     | 默认值 |
|  ------                   | :----:  | ----                      |   :-----------:  |
|maxGPUMemory               | Number  | 最大缓存数，单位M bytes        | 512 |
|loadingLimitOnInteracting  | Number  | 地图交互过程中瓦片请求最大数量  | 1   |
|loadingLimit               | Number  | 瓦片同时请求最大数量，0为不限制 | 0   |
|offset                     | Number/Function | 模型的绘制偏移量，如果是函数则会动态调用计算，函数的参数为模型的参考坐标： function (center) { }，可以用于计算 | [0, 0] |
|services                   | Object[]  | 3dtiles数据源定义             | [] |
|services.url               | String    | 3dtiles数据集根json文件的url地址     | null |
|services.urlParams         | String    | 额外的url请求参数               | null |
|services.fetchOptions      | Object    | fetch请求[参数](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)        | null |
|services.heightOffset      | Number    | 数据的高度偏移量，单位米，可以用于升高或降低模型 | 0 |
|services.ambientLight      | Number[]  | 三位归一化数组，手动设置模型的环境光值，可以用于提亮或变暗模型，没有设置时则默认读取map的环境光值 | null |
|services.polygonOffset     | Object    | 手动设置模型的[polygon offset](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/polygonOffset)，可用于解决z-fighting | { factor: 0, unit: 0 } |
</div>
</details>

## 成员方法

<details><summary>getExtent(idx)</summary>
<div>
<br/>

获取序号为idx的service的地理范围。

```js
layer.once('loadtileset', e => {
  const extent = layer.getExtent(e.index);
  map.fitExtent(extent);
});
```

参数：

* idx **Number** service序号

返回：

* Extent

</div>
</details>

<details><summary>getTiles()</summary>
<div>
<br/>

获取所有的3dtiles 瓦片。


返回：

* Object

</div>
</details>


{@include: ../vt/includes/layer-methods.md}

## 静态方法

<details><summary>fromJSON(json)</summary>
<div>
<br/>

从图层的json对象创建一个Geo3DTilesLayer对象。

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

<details><summary>rootready</summary>
<div>
<br/>

初始化根节点结束事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "rootready"  |
|target   | Geo3DTilesLayerr |   this            |
|roots    | Object[]         |   根节点对象       |

</div>
</details>

<details><summary>loadtileset</summary>
<div>
<br/>

成功加载tileset.json事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "loadtileset"  |
|target   | Geo3DTilesLayerr |   this            |
|tileset  | Object          |  tileset对象 | tileset |
|index    | Number          |  tileset对应的3dtiles service的序号 | 序号 |
|url      | String          |  tileset.json的url，绝对地址 | url |

</div>
</details>

<details><summary>tileload</summary>
<div>
<br/>

瓦片载入事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "tileload"  |
|target   | Geo3DTilesLayer |   this            |
|node     | Object          |   瓦片对象          |

</div>
</details>


<details><summary>tileerror</summary>
<div>
<br/>

瓦片载入错误事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "tileerror"  |
|target   | Geo3DTilesLayer |   this            |
|error    | Object          |   错误信息          |
|node     | Object          |   瓦片对象          |

</div>
</details>

<details><summary>canvasisdirty</summary>
<div>
<br/>

图层画布产生绘制的事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "canvasisdirty"  |
|target   | Geo3DTilesLayer |   this     |

</div>
</details>

### 继承自Layer的事件

{@include: ../vt/includes/layer-events.md}