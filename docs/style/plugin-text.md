# text渲染插件

为点类型数据绘制文字的渲染插件。[icon渲染插件](plugin-icon)同样支持文字绘制，与之不同的是text渲染插件支持沿线绘制，而icon插件不支持。

* 沿线文字

![沿线文字](../api/vt/assets/line-text.jpg)

## 配置说明
```js
{
  // [必填] 渲染插件对象
  renderPlugin: {
    // [必填] 插件类型，固定为text
    type: "text",
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
      // [可选] 默认为false
      // 是否开启图标全局定位，即同一数据在不同级别瓦片上，都会保持统一的绘制。
      // 例如如果开启了fading，同一数据出现在新的级别瓦片上，但不会有fading入场。
      uniquePlacement: false,

      // [可选] 默认为false
      // 是否开启碰撞检测
      collision: false,
      // [可选] 默认为true
      // 是否开启碰撞检测的透明度过渡效果
      fading: true,
      // [可选] 默认为 16*14
      // 碰撞检测过渡效果的持续时间
      fadingDuration: 16 * 14,
      // [可选] 默认为600
      // 图标通过碰撞检测，从隐藏到显示的过渡效果的开始延迟
      fadeInDelay: 600,
      // [可选] 默认为100
      // 图标未通过碰撞检测，从显示到隐藏的过渡效果的开始延迟
      fadeOutDelay: 100
    }
  },
  // [可选] 默认为true
  // 数据过滤条件
  filter: true,
  // 样式属性
  symbol: {
    textSize: 14,
    textFill: "rgba(0,0,0,1)",
    textName: "{name}",
    textPlacement: "line",
    mergeOnProperty: "road_name"
  }
}
```

filter 数据过滤条件的具体说明请点击[这里](filter)。

## 支持的数据类型

{@include: includes/point-supports.md}

## 动态样式

大部分样式属性都支持 [function-type](function-type) 表达式，支持根据不同zoom级别或数据的属性值设置不同的样式属性。

例如以下示例，能让文字在不同地图级别上由小变大：

```json
{
 "textSize": [[1, 2], [20, 40]]
}
```

## 支持的Symbol样式属性

text渲染插件支持[text样式属性](symbols#text样式属性)。

除此之外，还支持以下属性：

-----------
### markerBloom

默认值：false

**Boolean**，是否支持bloom泛光后处理。