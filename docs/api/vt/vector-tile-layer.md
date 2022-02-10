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

-----------

## 静态方法

### compressStyleJSON(style): Object

通过合并相同定义的渲染插件，把style JSON压缩为尺寸更小的JSON对象。

<details><summary>详细信息</summary>
<p>

```js
VectorTileLayer.compressStyleJSON(style);
````

参数：

* style **Object** 样式对象

</p>
</details>

* style **Object** 样式对象

-----------


### registerPlugin(Plugin)

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

### getPlugins(): PainterPlugin[]

获取所有注册的渲染插件。

<details><summary>详细信息</summary>
<p>

```js
const pluginClasses = VectorTileLayer.getPlugins();
````

</p>
</details>

-----------

### getPlugins()

注册渲染插件

<details><summary>详细信息</summary>
<p>

```js
const pluginClasses = VectorTileLayer.getPlugins();
````

</p>
</details>

-----------

###

## 成员方法
### setStyle(layerStyle): this

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

</p>
</details>

-----------

### getStyle(): Object

获取图层样式

-----------

### getComputedStyle(): Object

获取处理后的图层样式，与style的区别主要是：
* 如果style中定义了$root, computedStyle中的资源路径都是合并后的路径
* style中的样式定义可能是被压缩后的，computedStyle中都是未压缩的

### outlineAll(): this

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
</p>
</details>

-----------

### outlineBatch(idx): this

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

</p>
</details>

-----------

### outline(idx, featureIds): this

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

</p>
</details>

-----------

### cancelOutline(): this

取消高亮

-----------

### updateSymbol(idx, symbol): this

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

</p>
</details>

-----------

### updateFeatureSymbol(idx, styleIdx, symbol): this

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

</p>
</details>

-----------

### updateSceneConfig(idx, sceneConfig): this

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

</p>
</details>

-----------

### updateFeatureSceneConfig(idx, styleIdx, sceneConfig): this

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

</p>
</details>

-----------

### updateDataConfig(idx, dataConfig): this

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

</p>
</details>

-----------

### updateFeatureDataConfig(idx, styleIdx, dataConfig): this

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

</p>
</details>

-----------

### identify(coordinates, options): Object[]

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

</p>
</details>

-----------

### identifyAtPoint(containerPoint, options): Object[]

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

</p>
</details>

-----------

### getDataSchema(zoom): Object[]

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

</p>
</details>

-----------
