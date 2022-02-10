# VectorTileLayer

矢量瓦片图层 VectorTileLayer 用于在地图上加载并绘制[矢量瓦片](../guide/basic/vt)数据，并提供了必要的数据交互方法。

它是 [maptalks](https://maptalks.org)核心库 [TileLayer](https://maptalks.org/maptalks.js/api/0.x/TileLayer.html)的子类，同样继承了TileLayer上的方法和配置。

:::note
参数或配置名称上带 \* 表示该参数或配置不能为空，例如下面id后的\*号表示参数id是不能为空的：

* id* **String** 图层id

:::
## 构造函数

```javascript
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
|style            | Object          | 图层样式对象          |  null  |
|subdomains       | String[]        | subdomains, 用于替换url模板中的 {s} | null |
|tileSize         | Number[]        | 瓦片高宽，单位像素     | [512, 512] |
|offset           | Number[]/Function | 瓦片的偏移量，单位像素，二位数组或函数，函数的参数为 zoom，瓦片的zoom级别，offset(zoom) {} | null |
|features         | Boolean         | 瓦片是否返回feature数据 | true |
|schema           | Boolean         | 瓦片是否返回数据的属性schema | false |
|collision        | Boolean         | 是否开启点和文字的碰撞检测   | true |
|picking          | Boolean         | 是否允许图层用identify或identifyAtPoint方法查询数据 | true |
|pickingPoint     | Boolean         | identify或identifyAtPoint方法的查询结果是否返回查询点的三维空间坐标 | false |
|pickingGeometry  | Boolean         | identify或identifyAtPoint方法的查询结果是否包含Geometry | false |
|pickingGeometry  | Boolean         | identify或identifyAtPoint方法的查询结果是否包含Geometry | false |
|iconErrorUrl     | Boolean         | icon请求失败后的替换图片url                             | null |
|collisionFrameLimit | Number       | 每帧用于计算Collision的时间限制，单位ms                  | 1.5  |
|defaultRendering | Boolean         | 是否开启没有style时的默认样式绘制                        | true |
|textGamma        | Number          | 文字的Gamma值，可以用于调整文字清晰度                     | 1   |
|maxIconSize      | Number          | 图标最大尺寸限制                                        | 254  |
|styleScale       | Number          | 可以用来对图层图标和文字整体放大                          | 1    |
|spatialReference | String / Object | 图层的空间参考         | "preset-vt-3857" |
|tileSystem       | Number[]        | 一个四位数数组，用于描述 TileSystem，TileSystem用于定义瓦片的起始坐标和X/Y轴上的编号规律，具体含义参考该[链接](https://github.com/maptalks/maptalks.js/wiki/Tile-System) | [1, -1, -6378137 \* Math.PI, 6378137 * Math.PI] |maxAvailableZoom | Number          | 最大可用级别，当地图级别超过maxAvailableZoom后，则显示maxAvailableZoom级别的瓦片。 | null |
|repeatWorld      | Boolean         | 在低级别时，整个世界不满一屏时，是否重复显示世界  | true |
|crossOrigin      | String          | 瓦片数据的[cross origin](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)  | null |
|debug            | Boolean         | 是否开启调试信息，开启后地图上会绘制瓦片的编号和范围  | null |
|maxCacheSize     | Number          | 瓦片缓存的最大数量       | 72 |
|zoomOffset       | Number          | 瓦片zoom级别和地图zoom级别的差值    | 0 |
|errorUrl         | String          | 瓦片请求失败后的替代链接    | null |
|token            | String          | 用于替换url模板中的{token}，例如 http://foo/bar/{z}/{x}/{y}?token={token}   | null |

</p>
</details>

## 事件

### iblupdated

环境光更新事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "iblupdated"  |
|target   | VectorTileLayer |   this     |

</p>
</details>

-----------

### canvasisdirty

画布产生绘制的事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "canvasisdirty"  |
|target   | VectorTileLayer |   this     |

</p>
</details>

-----------

### workerready

worker准备就绪事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "workerready"  |
|target   | VectorTileLayer |   this     |

</p>
</details>

-----------

### datareceived

获取到瓦片数据事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "datareceived"  |
|target   | VectorTileLayer |   this     |

</p>
</details>

-----------

### pluginsinited

渲染插件初始化结束事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "pluginsinited"  |
|target   | VectorTileLayer |   this     |

</p>
</details>

-----------

### setstyle

设置样式事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "dataerror"  |
|target   | VectorTileLayer |   this     |
|styles   | Object[] |   样式对象     |
|computedStyles   | Object[] |   Feature样式对象     |

</p>
</details>

-----------

### updatesceneconfig

updatesceneconfig事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesceneconfig"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   样式序号              |
|sceneConfig | Object          |   scene config对象     |

</p>
</details>

-----------

### updatefeaturesceneconfig

updatefeaturesceneconfig事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesceneconfig"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   Feature样式序号        |
|styleIdx | Number          |   Feature渲染插件序号    |
|sceneConfig | Object          |   scene config对象     |

</p>
</details>

-----------

### updatedataconfig

updatedataconfig事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatedataconfig"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   样式序号              |
|dataConfig | Object        |   data config对象     |

</p>
</details>

-----------

### updatefeaturesdataconfig

updatefeaturesdataconfig事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesdataconfig"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   Feature样式序号        |
|styleIdx | Number          |   Feature渲染插件序号    |
|dataConfig | Object        |   data config对象     |

</p>
</details>

-----------

### updatesymbol

updatesymbol事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesymbol"  |
|target   | VectorTileLayer |   this            |
|index    | Number          |   样式序号        |
|symbol   | Object          |   symbol对象      |

</p>
</details>

-----------

### updatefeaturesymbol

updatefeaturesymbol事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesymbol"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   Feature样式序号        |
|styleIdx | Number          |   Feature渲染插件序号    |
|symbol   | Object          |     symbol对象     |

</p>
</details>

-----------

### tileload

瓦片载入事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesymbol"  |
|target   | VectorTileLayer |   this            |
|tile     | Object          |   瓦片对象          |
|tileImage| Object          |   瓦片数据     |

</p>
</details>

-----------

### tileerror

瓦片载入错误事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesymbol"  |
|target   | VectorTileLayer |   this            |
|error    | String          |   错误信息          |
|tile     | Object          |   瓦片对象          |
|symbol   | Object          |     symbol对象     |

</p>
</details>

-----------

### clear

图层被清除事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "clear"  |
|target   | VectorTileLayer |   this     |

</p>
</details>

-----------

### idchange

图层id变化事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "idchange"  |
|target   | VectorTileLayer |   this     |
|old      | String          |   旧的id     |
|new      | String          |   新的id     |

</p>
</details>

-----------

### renderercreate

renderer创建事件

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type       | String          |   "renderercreate"  |
|target     | VectorTileLayer |   this     |
|renderer   | VectorTileLayerRenderer |      |

</p>
</details>

-----------

### canvascreate

canvas创建事件

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "canvascreate"  |
|target   | VectorTileLayer |   this     |
|gl       | WebGLRenderingContext2D |      |

</p>
</details>

-----------

### renderstart

开始渲染事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "renderstart"  |
|target   | VectorTileLayer |   this     |

</p>
</details>

-----------

### renderend

结束渲染事件。

<details><summary>详细信息</summary>
<p>

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "renderend"  |
|target   | VectorTileLayer |   this     |

</p>
</details>

-----------


## 静态方法

### compressStyleJSON(stle)

通过合并相同定义的渲染插件，把style JSON压缩为尺寸更小的JSON对象。

<details><summary>详细信息</summary>
<p>

```js
VectorTileLayer.compressStyleJSON(style);
````

参数：

* style **Object** 样式对象

返回：

* **Object**

</p>
</details>

-----------


### registerPlugin

registerPlugin(Plugin)

注册新的渲染插件。

<details><summary>详细信息</summary>
<p>

```js
VectorTileLayer.registerPlugin(PluginClazz);
````

参数：

* PluginClazz **PainterPlugin** 要注册的渲染插件类

</p>
</details>

-----------

### getPlugins()

获取所有注册的渲染插件。

<details><summary>详细信息</summary>
<p>

```js
const pluginClasses = VectorTileLayer.getPlugins();
````

返回：

* PainterPlugin[]

</p>
</details>

###

## 成员方法
### setStyle(layerStyle)

设置图层的样式，样式说明请参考该链接。

<details><summary>详细信息</summary>
<p>

```js
const layer = new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt'
});
const style = {
  styles: [
    {
      filter : true,            // 数据的过滤条件
      renderPlugin: {           // 渲染插件
        type : 'native-point',
        dataConfig : {
          type : 'native-point'
        }
      },
      symbol: {                 // 样式定义
        markerSize: 6,
        markerType: 'circle',
        markerFill: '#0f0'
      }
    }
  ]
};
layer.setStyle(style);
```

参数：
* style **Object** 图层样式对象，可选的属性如下:

| 属性名        |  类型           |  描述                 | 默认值 |
|  ----         | :----:  | ----  |   :-----------:  |
| styles        | Object[] | 渲染插件数组              | [] |
| featureStyles | Object[] | 单个Feature的渲染插件列表  | [] |
| $root         | String   | 资源目录根路径 | null |

返回：

* this

</p>
</details>

-----------

### getStyle()

获取图层样式

返回：

* Object

-----------

### getComputedStyle()

获取处理后的图层样式，与style的区别主要是：
* 如果style中定义了$root, computedStyle中的资源路径都是合并后的路径
* style中的样式定义可能是被压缩后的，computedStyle中都是未压缩的

返回：

* Object

-----------

### outlineAll()

高亮图层上所有的数据。

因为高亮是采用后处理实现的，图层需要加入[GroupGLLayer](../gl/group-gl-layer)，且[outline后处理](../gl/group-gl-layer#outline)是开启的。

<details><summary>详细信息</summary>
<p>

```js
const layer = new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt',
  style
});
layer.addTo(groupGLLayer);
layer.outlineAll();
```

返回：

* this

</p>
</details>

-----------

### outlineBatch(idx)

高亮style中序号为idx的渲染插件渲染的数据。

同outlineAll相同，需要加入[GroupGLLayer](../gl/group-gl-layer)并开启outline后处理。

<details><summary>详细信息</summary>
<p>

```js
const layer = new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt',
  style
});
layer.addTo(groupGLLayer);
layer.outlineBatch(0);
```

参数：

* idx **Number** style的序号

返回：

* this

</p>
</details>

-----------

### outline(idx, featureIds)

序号为idx的渲染插件渲染的数据中，高亮指定的feature。

<details><summary>详细信息</summary>
<p>

```js
const layer = new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt',
  style
});
layer.addTo(groupGLLayer);
layer.outline(0, [0]);
```

参数：

* idx **Number** style的序号
* featureIds **Number[] | String[]** feature id 数组

返回：

* this

</p>
</details>

-----------

### cancelOutline()

取消高亮

-----------

### updateSymbol(idx, symbol)

更新序号为idx的渲染插件的symbol。

<details><summary>详细信息</summary>
<p>

```js
const layer = new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt',
  style
});
layer.updateSymbol(0, { polygonFill: '#0f0' });
```

参数：

* idx **Number** 渲染插件序号
* symbol **Object** 要更新的symbol属性

返回：

* this

</p>
</details>

-----------

### updateFeatureSymbol(idx, styleIdx, symbol)

更新序号为idx的Feature样式里，序号为styleIdx的渲染插件的symbol。

<details><summary>详细信息</summary>
<p>

```js
const style = {
  featureStyles: [
    {
      id: 16,
      style: [
        {
          renderPlugin: {
            dataConfig: {
              type: 'fill'
            },
            sceneConfig: {
              antialias: false
            },
            type: 'fill'
          },
          symbol: {
            polygonFill: '#f00'
          }
        }
      ]
    }
  ]
}
const layer = new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt',
  style
});
layer.updateFeatureSymbol(0, 0, { polygonFill: '#0f0' });
```

参数：

* idx **Number** featureStyle中的Feature样式序号
* styleIdx **Number** 样式编号
* symbol **Object** 要更新的sceneConfig属性

返回：

* this

</p>
</details>

-----------

### updateSceneConfig(idx, sceneConfig)

更新序号为idx的渲染插件的sceneConfig。

<details><summary>详细信息</summary>
<p>

```js
const layer = new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt',
  style
});
layer.updateSceneConfig(0, { collision: false });
```

参数：

* idx **Number** 渲染插件序号
* sceneConfig **Object** 要更新的sceneConfig属性

返回：

* this

</p>
</details>

-----------

### updateFeatureSceneConfig(idx, styleIdx, sceneConfig)

更新序号为idx的Feature样式里，序号为styleIdx的渲染插件的sceneConfig。

<details><summary>详细信息</summary>
<p>

```js
const style = {
  featureStyles: [
    {
      id: 16,
      style: [
        {
          renderPlugin: {
            dataConfig: {
              type: 'fill'
            },
            sceneConfig: {
              antialias: false
            },
            type: 'fill'
          },
          symbol: {
            polygonFill: '#f00'
          }
        }
      ]
    }
  ]
}
const layer = new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt',
  style
});
layer.updateFeatureSceneConfig(0, 0, { antialias: true });
```

参数：

* idx **Number** featureStyle样式序号
* styleIdx **Number** 渲染插件编号
* sceneConfig **Object** 要更新的sceneConfig属性

返回：

* this

</p>
</details>

-----------

### updateDataConfig(idx, dataConfig)

更新序号为idx的渲染插件的dataConfig。

<details><summary>详细信息</summary>
<p>

```js
const layer = new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt',
  style
});
layer.updateDataConfig(0, { altitudeProperty: 'height' });
```

参数：

* idx **Number** 渲染插件序号
* dataConfig **Object** 要更新的dataConfig属性

返回：

* this

</p>
</details>

-----------

### updateFeatureDataConfig(idx, styleIdx, dataConfig)

更新序号为idx的Feature样式里，序号为styleIdx的渲染插件的sceneConfig。

<details><summary>详细信息</summary>
<p>

```js
const style = {
  featureStyles: [
    {
      id: 16,
      style: [
        {
          renderPlugin: {
            dataConfig: {
              type: 'fill'
            },
            sceneConfig: {
              antialias: false
            },
            type: 'fill'
          },
          symbol: {
            polygonFill: '#f00'
          }
        }
      ]
    }
  ]
}
const layer = new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt',
  style
});
layer.updateFeatureDataConfig(0, 0, { foo: 1 });
```

参数：

* idx **Number** featureStyle样式序号
* styleIdx **Number** 渲染插件编号
* dataConfig **Object** 要更新的dataConfig属性

返回：

* this

</p>
</details>

-----------

### identify(coordinates, options)

在图层上查询给定坐标处的数据。

需要注意的是，因为VectorTileLayer的特性，只有绘制出来的数据是才能被查询到。

<details><summary>详细信息</summary>
<p>

```js
const layer = new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt',
  style
});
layer.identify([121.23, 39.34], { tolerance: 2 })
```

参数：

* coordinates **Number[]** 坐标值
* options **Object** 设置，可能的属性：
| 属性名           |  类型           |  描述                 | 默认值 |
|  ------         | :----:  | ----  |   :-----------:  |
| tolerance       | Number  | 查询时的像素冗余值 | 3 |

返回：

* Object[]

</p>
</details>

-----------

### identifyAtPoint(containerPoint, options)

在图层上查询给定屏幕坐标处的数据

<details><summary>详细信息</summary>
<p>

```js
const layer = new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt',
  style
});
layer.identify([121.23, 39.34], { tolerance: 2 })
```

参数：

* coordinates **Number[]** 坐标值
* options **Object** 设置，可能的属性：

| 属性名           |  类型           |  描述                 | 默认值 |
|  ------         | :----:  | ----  |   :-----------:  |
| tolerance       | Number  | 查询时的像素冗余值 | 3 |

返回：

* Object[]

</p>
</details>

-----------

### getDataSchema(zoom)

获取给定级别上的图层定义和属性定义。

需要注意的是，只有某个级别的瓦片的曾经载入过，才能正常获取，未载入过的瓦片级别的data schema是无法获取的。

<details><summary>详细信息</summary>
<p>

```js
const layer = new VectorTileLayer('vt0', {
  urlTemplate: 'https://tiles.maptalks.com/test/{z}/{x}/{y}.mvt',
  style
});
const schema = layer.getDataSchema(8);
```

参数：

* zoom **Number** 瓦片级别

返回：

* Object[]

</p>
</details>

-----------

## 继承的TileLayer方法

具体可以参考[父类TileLayer的API文档](https://maptalks.org/maptalks.js/api/0.x/TileLayer.html)。

### getTileSize()

获取瓦片高宽

返回：

* Size

-----------

### getTiles()

获取瓦片

返回：

* Object

-----------

### getTileUrl(x, y, z)

获取瓦片url

返回：

* String

-----------

### clear()

清空图层

-----------

### toJSON()

获得图层的JSON对象，这个JSON对象可以通过 maptalks.Layer.fromJSDN(json) 方法还原为图层对象。

返回：

* Object

-----------

### getSpatialReference()

获得图层的空间参考对象。

返回：

* SpatialReference

-----------

## 继承的Layer方法

具体可以参考[父类Layer的API文档](https://maptalks.org/maptalks.js/api/0.x/Layer.html)。

### getId()

获得图层id

返回：

* Number | String

-----------

### setId(id)

设置图层id

返回：

* this

-----------

### addTo(map)

添加到地图上。

返回：

* this

-----------

### getMinZoom()

获取最小瓦片级别。

返回：

* Number

-----------

### getMaxZoom()

获取最大瓦片级别。

返回：

* Number

-----------

### getMap()

获取图层添加到的map对象。

返回：

* Map

-----------

### getProjection()

获取图层的projection。

返回：

* Projection

-----------

### show()

隐藏图层。

返回：

* this

-----------

### hide()

隐藏图层。

返回：

* this

-----------

### isVisible()

判定图层是否显示。

返回：

* Boolean

-----------

### remove()

删除图层。

返回：

* this

-----------

### on(events, handler, context)

注册图层的监听事件

返回：

* this

-----------

### addEventListener(events, handler, context)

同 on 方法

返回：

* this

-----------

### once(events, handler, context)

注册图层的监听事件，响应后即删除

返回：

* this

-----------

### off(events, handler, context)

移除图层注册的监听事件

返回：

* this

-----------

### removeEventListener(events, handler, context)

同 off 方法

返回：

* this

-----------

### listens(events, handler, context)

判断图层是否监听了events事件。

返回：

* Boolean

-----------

### fire(event, params)

手动发射一个事件，params是时间参数。

返回：

* this

-----------

### setOptions(options)

设置图层配置。

返回：

* this

-----------

### config(key, value)

更新某个图层配置。

返回：

* this
