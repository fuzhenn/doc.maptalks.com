## 动态样式

目前只有visible，polygonFll，polygonOpacity支持[function-type](../filter/function-type) 表达式，支持根据不同zoom级别或数据的属性值设置不同的样式属性。

例如以下示例，能让模型的透明度在不同地图级别上由小变大：

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
### translation

默认值：[0, 0, 0]

**Number[]**，模型在本地坐标系x, y, z三个轴上的偏移量。

-----------
### scale

默认值：[1, 1, 1]

**Number[]**，模型在本地坐标系x, y, z三个轴上的缩放比例。

-----------
### rotation

默认值：[0, 0, 0]

**Number[]**，模型在本地坐标系x, y, z三个轴上的旋转角度，单位为度，取值范围0-360。

-----------
### fixSizeOnZoom

默认值：null

**Number**，是否在所有级别固定模型大小，模型不再随地图缩放而缩放，fixSizeOnZoom的值为级别，即把模型固定为哪个级别上的模型大小。