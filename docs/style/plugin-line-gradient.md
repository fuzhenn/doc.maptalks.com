# line-gradient渲染插件

为线类型数据绘制渐变线的渲染插件。

## 配置说明
```js
{
  // [必填] 渲染插件对象
  renderPlugin: {
    // [必填] 插件类型，固定为line
    type: "line-gradient",
    // [必填] 数据配置
    dataConfig: {
      // [必填] 数据类型，固定为point
      type: "line",
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
      // [可选] 默认为null
      // 线的轨迹动画功能
      trailAnimation: {
        // [可选] 默认为false
        // 是否开启动画
        enable: false,
        // [可选] 默认为1
        // 动画速度，如果为负值，动画方向则会反向
        speed: 1,
        // [可选] 默认为500
        // 轨迹长度，单位ms，即轨迹经过多长时间透明度变为0
        trailLength: 500,
        // [可选] 默认为1000
        // 轨迹循环时间，单位ms
        trailCircle: 1000
      }
    }
  },
  // [可选] 默认为true
  // 数据过滤条件
  filter: true,
  // 样式属性
  symbol: {
    lineOpacity: 1,
    lineWidth: 14,
    lineColor: '#f00',
    lineGradientProperty: 'gradients'
  }
}
```

filter 数据过滤条件的具体说明请点击[这里](../filter/feature-filter)。

## 支持的数据类型

{@include: includes/line-supports.md}

## 动态样式

大部分样式属性都支持 [function-type](../filter/function-type) 表达式，支持根据不同zoom级别或数据的属性值设置不同的样式属性。

例如以下示例，能让线宽在不同地图级别上由小变大：

```json
{
 "lineWidth": {
    "stops": [[1, 2], [20, 10]]
  }
}
```

## 支持的Symbol样式属性

line-gradient渲染插件支持[line样式属性](../symbols#line样式属性)。

除了上述属性，还支持以下属性：

---------
### lineGradientProperty

默认值：null

**String**，渐变色定义的属性值，渲染插件会从数据的这个属性值中读取渐变色。

渐变色是一个数组，由多个数字和颜色值对构成。

数字代表线上的比例位置，取值范围 0 - 1，0代表线的开始，1代表线的尾巴，颜色代表该点的颜色，例如以下的例子：

```js
{
  lineGradientProperty: 'gradients'
}

// 数据中gradients中的值为
{
  gradients: [0, 'red', 0.7, 'yellow', 1, 'green']
}

 ```
 它的含义是，线的开始处为红色，到中间0.7时为黄色，尾巴处为绿色，而其余部分的颜色为这几个节点色的过渡。

 -----------
### lineBloom

默认值：false

**Boolean**，是否支持bloom泛光后处理。