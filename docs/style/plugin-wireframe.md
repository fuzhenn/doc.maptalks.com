# wireframe渲染插件

用边框渲染三维面数据的渲染插件。

## 配置说明
```js
{
  renderPlugin: {
    // [必填] 固定为wireframe
    type: 'wireframe',
    // [必填] 数据生成设置
    dataConfig: {
      // [必填]，数据类型，固定为3d-wireframe
      type: "3d-wireframe",
      {@include: includes/extrusion-dataconfig.md}
    },
    // [可选] 场景渲染设置
    sceneConfig: {
      {@include: includes/plugin-common-sceneConfig.md}
      // [可选] 默认为<=
      // WebGL深度测试函数，可选的值有 always, never, <, <=, !=, >, >=
      depthFunc: '<=',
      // [可选] String类型，默认为null
      // 三维面的进场动画，animation制定了动画的easing
      // 具体支持的easing种类可以参考： https://github.com/fuzhenn/animation-easings
      animation: null,
      // [可选] 默认为 800，单位ms
      // 动画持续时间
      animationDuration: 800
    }
  },
  filter: true,
  symbol: {
    visible: true,
    bloom: false,
    ssr: false,
    lineColor: '#f00'
  }
}
```

filter 数据过滤条件的具体说明请点击[这里](./filter/feature-filter)。

## 支持的数据类型

{@include: includes/fill-supports.md}

## 动态样式

目前只有lineColor支持[function-type](./filter/function-type) 表达式，支持根据不同zoom级别或数据的属性值设置不同的样式属性。

## 支持的Symbol样式属性

-----------
### visible

默认值：true

**Boolean**，是否显示。

-----------
### lineColor

默认值：[1, 1, 1, 1]

**String** | **Number[]**，边框颜色，可以为[css颜色值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)或者归一化四位数组。

-----------
### bloom

默认值：false

**Boolean**，是否支持bloom泛光后处理。