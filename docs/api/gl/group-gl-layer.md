# GroupGLLayer

在maptalks中，默认情况下每个WebGL图层独占一个canvas画布，由map按照图层的层叠顺序依次叠加，但这个模式带来的问题是，如果层叠关系上A图层在B图层上面，不管A，B图层中三维物体的真实三维前后关系如何，A图层中的物体会永远绘制在B图层中的物体上。

GroupGLLayer就是为了解决不同WebGL图层中物体无法按真实三维前后关系渲染的问题而常见的。

GroupGLLayer是一个WebGL容器图层，它可以添加多个WebGL子图层，添加进的子图层会共享一个WebGL上下文，这样不同图层绘制的三维物体就能融合绘制，维持正确的三维前后关系了。

同时GroupGLLayer上实现了一些常见的全局效果，例如阴影，hdr全局环境光，天空盒，天气效果，常用后处理等：

* shadowmap 阴影绘制
* hdr hdr环境光
* skybox 背景天空盒
* weather 天气效果
* 后处理
  * FXAA抗锯齿，依靠邻近像素混合实现抗锯齿。
  * TAA抗锯齿，依靠历史渲染帧的混合来实现抗锯齿。
  * bloom 泛光，通过高斯模糊后混合，实现物体的发光效果。
  * SSAO 屏幕空间环境光遮蔽，通过计算场景中的深度变化，在物体拐角处绘制阴影，增强场景的深度感。
  * SSR 屏幕空间反射效果，在屏幕空间中对物体反射，用于实现水体，地面等反射效果。
  * sharpen 锐化效果，实现画面的锐化。
  * outline 物体高亮，能实现指定物体轮廓的高亮效果。

你可以通过GroupGLLayer.options.sceneConfig来设置上述全局效果。

它是[maptalks.Layer](https://maptalks.org/maptalks.js/api/0.x/Layer.html)的子类，继承了 Layer 上所有的方法。

## 构造函数

```javascript
import { GroupGLLayer } from '@maptalks/gl';

const layer = new GroupGLLayer('group', [layer0, layer1, layer2], options);
```
<details><summary>详细信息</summary>
<div>
参数：

* id\* **String** 图层id
* layers\* **Layer[]** 子图层列表
* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型   |  描述                     | 默认值 |
|  ------             | :----:  | ----                      |   :-----------:  |
|antialias            | Boolean | 是否开启WebGL原生抗锯齿，但因为原生抗锯齿性能较低，推荐默认关闭，采用FXAA和TAA抗锯齿后处理获得更好的性能 | false |
|geometryEvents       | Boolean  | 是否允许子图层上的Geometry响应事件                           | true |
|extensions           | String[] | 必须开启的webgl扩展， [所有的扩展列表](https://github.com/regl-project/regl/blob/master/API.md#extensions)   | [] |
|optionalExtensions   | String[] | 可以选择开启的webgl扩展， [所有的扩展列表](https://github.com/regl-project/regl/blob/master/API.md#extensions) | 见下方注解 |
|sceneConfig          | Object   | 全局效果设置，[配置说明](#sceneconfig配置说明)          | null |
{@include: ../vt/includes/layer-options.md}

默认的optionalExtensions:

```
['ANGLE_instanced_arrays','OES_element_index_uint','OES_standard_derivatives','OES_vertex_array_object','OES_texture_half_float', 'OES_texture_half_float_linear','OES_texture_float', 'OES_texture_float_linear','WEBGL_depth_texture', 'EXT_shader_texture_lod','WEBGL_compressed_texture_astc','WEBGL_compressed_texture_etc','WEBGL_compressed_texture_etc1','WEBGL_compressed_texture_pvrtc','WEBGL_compressed_texture_s3tc','WEBGL_compressed_texture_s3tc_srgb']
```

</div>
</details>

## SceneConfig配置说明

SceneConfig的示例和配置说明如下：

```js
const sceneConfig = {
  environment: {
    enable: true,                                   // 是否开启环境天空盒绘制
    mode: 1,                                        // 天空盒模式： 0: 氛围模式， 1: 实景模式
    level: 0,                                       // 实景模式下的模糊级别，0-3
    brightness: 1                                   // 天空盒的明亮度，-1 - 1， 默认为0
  },
  shadow: {
    type: 'esm',                                    // 阴影模式，固定为esm
    enable: true,                                   // 是否开启
    quality: 'high',                                // 阴影质量，可选的值：high, medium, low
    opacity: 1,                                     // 阴影的透明度，0 - 1
    color: [0, 0, 0],                               // 阴影的颜色，归一化三位rgb颜色值
    blurOffset: 1                                   // 阴影模糊偏移量，值越高阴影越模糊
  },
  ground: {
    enable: true,                                   // 是否开启地面绘制
    renderPlugin: {                                 // 地面的绘制插件，取值范围 lit 或者 fill
      type: 'lit'
    },
    symbol: {
      ssr: true,                                    // 是否开启ssr，屏幕空间反射
      material: litMaterial,                        // 如果绘制插件为lit，设置pbr材质
      polygonFill: [1, 1, 1, 1],                    // 四位归一化颜色值
      polygonOpacity: 1                             // 透明度 0-1
    }
  },
  postProcess: {
    enable: true,                                   // 是否开启后处理
    antialias: {
      enable: true,                                 // 是否开启FXAA后处理
      taa: true                                     // 是否开启taa后处理
    },
    ssr: {
      enable: true                                  // 是否开启屏幕空间反射
    },
    ssao: {
      enable: true,                                 // 是否开启屏幕空间环境光遮蔽
      bias: 0.03,                                   // 阴影偏移值，越大，阴影就越清晰，0.05 - 1
      radius: 0.08,                                 // 遮蔽半径，越大，阴影就越清晰， 0.05 - 1
      intensity: 1.5                                // 强度因子， 0.1 - 5
    },
    sharpen: {
      enable: false,                                // 是否开启锐化
      factor: 0.2                                   // 强度因子，0 - 1
    },
    bloom: {
      enable: true,                                 // 是否开启泛光
      factor: 1,                                    // 强度因子 0.1 - 5
      threshold: 0,                                 // 最小阈值（亮度低于阈值的区域不发光） 0 - 1
      radius: 1                                     // 泛光半径 0.1 - 4
    },
    outline: {
      enable: true                                  // 是否开启高亮后处理
    }
  }
};

const groupLayer = new GroupGLLayer('group', [layer], { sceneConfig });
```

## 成员方法

<details><summary>setSceneConfig(sceneConfig)</summary>
<div>
<br/>

设置SceneConfig。

参数：

* sceneConfig **Object** sceneConfig参数

返回：

* this

</div>
</details>

<details><summary>getSceneConfig()</summary>
<div>
<br/>

获取SceneConfig设置。

返回：

* Object

</div>
</details>

<details><summary>getGroundConfig()</summary>
<div>
<br/>

获取sceneConfig.ground设置。

返回：

* Object

</div>
</details>

<details><summary>addLayer(layer, idx)</summary>
<div>
<br/>

添加一个子图层。

参数：

* layer* **Layer** 图层对象
* idx **Number** 可选的图层添加到的序号

返回：

* this

</div>
</details>

<details><summary>removeLayer(layer)</summary>
<div>
<br/>

移除子图层。

参数：

* layer* **Layer** 图层对象

返回：

* this

</div>
</details>

<details><summary>getLayer(id)</summary>
<div>
<br/>

获取给定id的子图层。

参数：

* id **String** 图层id。

返回：

* Layer

</div>
</details>

<details><summary>getLayers()</summary>
<div>
<br/>

获取所有子图层。

返回：

* Layer[]

</div>
</details>

<details><summary>addAnalysis(analysis)</summary>
<div>
<br/>

添加一个空间分析对象。

参数：

* analysis* **Analysis** 空间分析对象

返回：

* this

</div>
</details>

<details><summary>removeAnalysis(analysis)</summary>
<div>
<br/>

移除空间分析对象。

参数：

* analysis* **Analysis** 空间分析对象

返回：

* this

</div>
</details>

<details><summary>identify(coordinates, options)</summary>
<div>
<br/>

在所有子图层上查询给定坐标处的数据。
需要注意的是，只有绘制出来的数据才能被查询到。

```js
layer.identify([121.23, 39.34], { tolerance: 2 })
```

参数：

* coordinates **Number[]** 坐标值
* options **Object** 设置，可能的属性：
| 属性名           |  类型           |  描述                 | 默认值 |
|  ------         | :----:  | ----  |   :-----------:  |
| tolerance       | Number  | 查询时的像素冗余值 | 3 |
| count           | Number  | 返回的数据条数 | 1 |
| filter          | Function | 结果过滤函数 | null |
| orderByCamera   | Boolean | 是否按照相机距离排序，更近的在前面 | false |
| childLayers     | Layer[] | 指定的子图层 | [] |

返回：

* Object[]

</div>
</details>


<details><summary>identifyAtPoint(containerPoint, options)</summary>
<div>
<br/>

在所有子图层上查询给定屏幕坐标处的数据

```js
layer.identifyAtPoint([400, 300], { tolerance: 2 })
```

参数：

* coordinates **Number[]** 坐标值
* options **Object** 设置，可能的属性：

| 属性名           |  类型           |  描述                 | 默认值 |
|  ------         | :----:  | ----  |   :-----------:  |
| tolerance       | Number  | 查询时的像素冗余值 | 3 |
| count           | Number  | 返回的数据条数 | 1 |
| filter          | Function | 结果过滤函数 | null |
| orderByCamera   | Boolean | 是否按照相机距离排序，更近的在前面 | false |
| childLayers     | Layer[] | 指定的子图层 | [] |

返回：

* Object[]

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

获取图层的JSON序列化对象。

该对象可以用 Layer.fromJSON 方法反序列化一个图层对象。

```js
const json = layer.toJSON();
const copiedLayer = maptalks.Layer.fromJSON(json);
````


返回：

* Object

</div>
</details>


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

* GroupGLLayer

</div>
</details>

## 事件

{@include: ../vt/includes/js-events-example.md}

### 图层事件

<details><summary>postprocessstart</summary>
<div>
<br/>

后处理开始事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type           | String          |   "postprocessstart"  |
|target         | GroupGLLayer        |   this            |
</div>
</details>

<details><summary>postprocessend</summary>
<div>
<br/>

后处理结束事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type           | String          |   "postprocessend"  |
|target         | GroupGLLayer        |   this            |
</div>
</details>

<details><summary>taastart</summary>
<div>
<br/>

TAA抗锯齿开始事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type           | String          |   "taastart"  |
|target         | GroupGLLayer        |   this            |
</div>
</details>

<details><summary>taaend</summary>
<div>
<br/>

TAA抗锯齿结束事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type           | String          |   "taaend"  |
|target         | GroupGLLayer        |   this            |
</div>
</details>

### 继承自Layer的事件

{@include: ../vt/includes/layer-events.md}