# native-point渲染插件

用原生的点绘制机制，绘制点类型数据。

## 配置说明
```js
{
  // [必填] 渲染插件对象
  renderPlugin: {
    // [必填] 插件类型，固定为line
    type: "native-point",
    // [必填] 数据配置
    dataConfig: {
      // [必填] 数据类型，固定为point
      type: "point",
      // [可选] 默认为false
      // 声明是否只包含2D数据。
      // 设为true时，VectorTileLayer会开启瓦片的模板测试(stencil test)，
      // 剪切掉超过瓦片范围的数据，消除绘制时瓦片重叠部分的绘制问题
      only2D: true
    },
    // [可选] 默认为null
    // 渲染场景配置
    sceneConfig: {
{@include: includes/plugin-common-sceneConfig.md}
      // [可选] 默认为always，即永远显示
      // WebGL深度测试函数，可选的值有 always, never, <, <=, !=, >, >=
      depthFunc: 'always',
    }
  },
  // [可选] 默认为true
  // 数据过滤条件
  filter: true,
  // 样式属性
  symbol: {
    markerType: 'circle',
    markerFill: '#f00',
    markerSize: 2,
    markerOpacity: 1
  }
}
```

filter 数据过滤条件的具体说明请点击[这里](filter)。

## 支持的数据类型

{@include: includes/point-supports.md}

## 动态样式

大部分样式属性都支持 [function-type](function-type) 表达式，支持根据不同zoom级别或数据的属性值设置不同的样式属性。

例如以下示例，能让图标尺寸在不同地图级别上由小变大：

```json
{
 "markerSize": [[1, 2], [20, 10]],
}
```

## 支持的Symbol样式属性

-----------
### markerType

默认值：square

**String**, 点的类型，可选的值：square,circle

-----------
### markerSize

默认值：1

**Number**，点的尺寸，取值范围由平台决定，不同平台的原生点的尺寸可能有所不同。

-----------
## markerFill

默认值：#000

**String** | **Number[]**，点的颜色，可以为[css颜色值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)或者归一化四位数组。

-----------
## markerOpacity

默认值：1

**Number** 点的透明度，取值范围 0 - 1。