# phong渲染插件

用phong材质渲染三维面数据的渲染插件。

## 配置说明
```js
{
  renderPlugin: {
    // [必填] 固定为lit
    type: "phong",
    // [必填] 数据生成设置
    dataConfig: {
      // [必填]，数据类型
      // 数据类型，可以是
      // 3d-extrusion: 提升二维面为三维面
      // line-extrusion: 提升二维线为三维线
      type: "3d-extrusion",
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
    polygonOpacity: 1,
    material: {
      baseColorFactor: [1, 1, 1, 1],
      roughnessFactor: 0.4,
      metallicFactor: 0
    }
  }
}
```

filter 数据过滤条件的具体说明请点击[这里](../filter/feature-filter)。

## 支持的数据类型

{@include: includes/line-supports.md}

## 动态样式

目前只有visible，polygonFll，polygonOpacity支持[function-type](../filter/function-type) 表达式，支持根据不同zoom级别或数据的属性值设置不同的样式属性。

例如以下示例，能让面的透明度在不同地图级别上由小变大：

```json
{
 "polygonOpacity": {
    "stops": [[1, 0.1], [20, 1]]
  }
}
```


## 支持的Symbol样式属性

-----------
### visible

默认值：true

**Boolean**，是否显示。

-----------
### polygonFill

默认值：[1, 1, 1, 1]

**String** | **Number[]**，基础颜色，可以为[css颜色值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)或者归一化四位数组。

-----------
### polygonOpacity

默认值：1

**Number** 透明度，取值范围 0 - 1。

-----------
### bloom

默认值：false

**Boolean**，是否支持bloom泛光后处理。

-----------
### material

默认值：null

**Object**，pbr材质设置，具体属性可以参考[材质说明文档](../material#pbr材质)。