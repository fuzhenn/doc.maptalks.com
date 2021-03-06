# fill渲染插件

为线类型数据绘制三维线的渲染插件。

## 配置说明
```js
{
  // [必填] 渲染插件对象
  renderPlugin: {
    // [必填] 插件类型，固定为line
    type: "fill",
    // [必填] 数据配置
    dataConfig: {
      // [必填] 数据类型，固定为point
      type: "fill",
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
      // [可选] 默认为false
      // 是否开启fxaa抗锯齿
      antialias: false
    }
  },
  // [可选] 默认为true
  // 数据过滤条件
  filter: true,
  // 样式属性
  symbol: {
    polygonFill: '#f00',
    polygonOpacity: 0.5
  }
}
```

filter 数据过滤条件的具体说明请点击[这里](../filter/feature-filter)。

## 支持的数据类型

{@include: includes/fill-supports.md}

## 动态样式

大部分样式属性都支持 [function-type](../filter/function-type) 表达式，支持根据不同zoom级别或数据的属性值设置不同的样式属性。

例如以下示例，能让面的透明度在不同地图级别上由小变大：

```json
{
 "polygonOpacity": {
    "stops": [[1, 0.1], [20, 1]]
  }
}
```

## 支持的Symbol样式属性

fill渲染插件支持[polygon样式属性](../symbols#polygon样式属性)。

除了上述属性，还支持下列属性：

-----------
### polygonBloom

默认值：false

**Boolean**，是否支持bloom泛光后处理。