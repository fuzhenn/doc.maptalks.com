<details><summary>setStyle(layerStyle)</summary>
<div>
<br/>

设置图层的样式，样式说明请参考该链接。

```js
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
|  ------         | :----:  | ----  |   :-----------:  |
| styles        | Object[] | 渲染插件数组              | [] |
| featureStyles | Object[] | 单个Feature的渲染插件列表  | [] |
| $root         | String   | 资源目录根路径 | null |

返回：

* this

</div>
</details>


<details><summary>getStyle()</summary>
<div>
<br/> 

获取图层样式

返回：

* Object

</div>
</details>


<details><summary>getComputedStyle()</summary>
<div>
<br/>

获取处理后的图层样式，与style的区别主要是：
* 如果style中定义了$root, computedStyle中的资源路径都是合并后的路径
* style中的样式定义可能是被压缩后的，computedStyle中都是未压缩的

返回：

* Object

</div>
</details>


<details><summary>outlineAll()</summary>
<div>
<br/>

高亮图层上所有的数据。

因为高亮是采用后处理实现的，图层需要加入[GroupGLLayer](../gl/group-gl-layer)，且[outline后处理](../gl/group-gl-layer#outline)是开启的。

```js
layer.addTo(groupGLLayer);
layer.outlineAll();
```

返回：

* this

</div>
</details>



<details><summary>outlineBatch(idx)</summary>
<div>
<br/>

高亮style中序号为idx的渲染插件渲染的数据。

同outlineAll相同，需要加入[GroupGLLayer](../gl/group-gl-layer)并开启outline后处理。

```js
layer.addTo(groupGLLayer);
layer.outlineBatch(0);
```

参数：

* idx **Number** style的序号

返回：

* this

</div>
</details>


<details><summary>outline(idx, featureIds)</summary>
<div>
<br/>

序号为idx的渲染插件渲染的数据中，高亮指定的feature。

```js
layer.addTo(groupGLLayer);
layer.outline(0, [0]);
```

参数：

* idx **Number** style的序号
* featureIds **Number[] | String[]** feature id 数组

返回：

* this

</div>
</details>


<details><summary>cancelOutline()</summary>
<div>
<br/>

取消高亮。

返回：

* this

</div>
</details>


<details><summary>updateSymbol(idx, symbol)</summary>
<div>
<br/>

更新序号为idx的渲染插件的symbol。

```js
layer.updateSymbol(0, { polygonFill: '#0f0' });
```

参数：

* idx **Number** 渲染插件序号
* symbol **Object** 要更新的symbol属性

返回：

* this

</div>
</details>


<details><summary>updateFeatureSymbol(idx, styleIdx, symbol)</summary>
<div>
<br/>

更新序号为idx的Feature样式里，序号为styleIdx的渲染插件的symbol。

```js
const style = {
  featureStyle: [
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
layer.updateFeatureSymbol(0, 0, { polygonFill: '#0f0' });
```

参数：

* idx **Number** featureStyle中的Feature样式序号
* styleIdx **Number** 样式编号
* symbol **Object** 要更新的sceneConfig属性

返回：

* this

</div>
</details>


<details><summary>updateSceneConfig(idx, sceneConfig)</summary>
<div>
<br/>

更新序号为idx的渲染插件的sceneConfig。

```js
layer.updateSceneConfig(0, { collision: false });
```

参数：

* idx **Number** 渲染插件序号
* sceneConfig **Object** 要更新的sceneConfig属性

返回：

* this

</div>
</details>


<details><summary>updateFeatureSceneConfig(idx, styleIdx, sceneConfig)</summary>
<div>
<br/>

更新序号为idx的Feature样式里，序号为styleIdx的渲染插件的sceneConfig。

```js
const style = {
  featureStyle: [
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
layer.updateFeatureSceneConfig(0, 0, { antialias: true });
```

参数：

* idx **Number** featureStyle样式序号
* styleIdx **Number** 渲染插件编号
* sceneConfig **Object** 要更新的sceneConfig属性

返回：

* this

</div>
</details>


<details><summary>updateDataConfig(idx, dataConfig)</summary>
<div>
<br/>

更新序号为idx的渲染插件的dataConfig。

```js
layer.updateDataConfig(0, { altitudeProperty: 'height' });
```

参数：

* idx **Number** 渲染插件序号
* dataConfig **Object** 要更新的dataConfig属性

返回：

* this

</div>
</details>


<details><summary>updateFeatureDataConfig(idx, styleIdx, dataConfig)</summary>
<div>
<br/>

更新序号为idx的Feature样式里，序号为styleIdx的渲染插件的sceneConfig。

```js
const style = {
  featureStyle: [
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
layer.updateFeatureDataConfig(0, 0, { foo: 1 });
```

参数：

* idx **Number** featureStyle样式序号
* styleIdx **Number** 渲染插件编号
* dataConfig **Object** 要更新的dataConfig属性

返回：

* this

</div>
</details>


<details><summary>identify(coordinates, options)</summary>
<div>
<br/>

在图层上查询给定坐标处的数据。
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

返回：

* Object[]

</div>
</details>


<details><summary>identifyAtPoint(containerPoint, options)</summary>
<div>
<br/>

在图层上查询给定屏幕坐标处的数据

```js
layer.identifyAtPoint([400, 300], { tolerance: 2 })
```

参数：

* coordinates **Number[]** 坐标值
* options **Object** 设置，可能的属性：

| 属性名           |  类型           |  描述                 | 默认值 |
|  ------         | :----:  | ----  |   :-----------:  |
| tolerance       | Number  | 查询时的像素冗余值 | 3 |

返回：

* Object[]

</div>
</details>


<details><summary>getDataSchema(zoom)</summary>
<div>
<br/>

获取给定级别上的图层定义和属性定义。

需要注意的是，只有某个级别的瓦片的曾经载入过，才能正常获取，未载入过的瓦片级别的data schema是无法获取的。

```js
const schema = layer.getDataSchema(8);
```

参数：

* zoom **Number** 瓦片级别

返回：

* Object[]

</div>
</details>