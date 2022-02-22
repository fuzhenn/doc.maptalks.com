# native-line渲染插件

用原生的线绘制机制，绘制线类型数据。

## 配置说明
```js
{
  // [必填] 渲染插件对象
  renderPlugin: {
    // [必填] 插件类型，固定为line
    type: "native-point",
    // [必填] 数据配置
    dataConfig: {
      // [必填] 数据类型，固定为native-line
      type: "native-line",
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
      // [可选] 默认为<=
      // WebGL深度测试函数，可选的值有 always, never, <, <=, !=, >, >=
      depthFunc: '<=',
    }
  },
  // [可选] 默认为true
  // 数据过滤条件
  filter: true,
  // 样式属性
  symbol: {
    lineColor: '#000',
    lineOpacity: 1
  }
}
```

filter 数据过滤条件的具体说明请点击[这里](filter)。

## 支持的数据类型

{@include: includes/line-supports.md}

## 动态样式

大部分样式属性都支持 [function-type](function-type) 表达式，支持根据不同zoom级别或数据的属性值设置不同的样式属性。

例如以下示例，能让线的透明度在不同地图级别上由小变大：

```json
{
 "lineOpacity": [[1, 0.1], [20, 1]],
}
```

## 支持的Symbol样式属性

-----------
## lineColor

默认值：#000

**String** | **Number[]**，线的颜色，可以为[css颜色值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)或者归一化四位数组。

-----------
## lineOpacity

默认值：1

**Number** 线的透明度，取值范围 0 - 1。