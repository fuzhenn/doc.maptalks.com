# function-type

[function-type](https://github.com/maptalks/function-type)是一种表达式，用于定义一个函数类型，函数参数是Feature的properties和地图的zoom级别，返回任意类型的值。

function-type用于在symbol上定义动态的样式属性，即能根据不同的Feature和zoom级别，设置不同的样式。

基于mapbox原function-type(BSD-3Clauses协议)实现。

## 示例

以下的function-type定义能让图标的高宽随zoom级别线性变化。

1级上是4像素，20级上是20像素，中间级别则线性变化。

```js
{
  markerWidth: {
    stops: [
      [1, 4],
      [20, 20]
    ]
  },

  markerHeight: {
    stops: [
      [1, 4],
      [20, 20]
    ]
  }
}
```

## Feature属性

function-type中用于计算的是GeoJSON Feature的properties, 矢量瓦片Feature的properties或者[Geometry](https://maptalks.org/maptalks.js/api/0.x/Geometry.html) getProperties方法返回的值。

## 属性

### stops

**Array** 必填（除了identity函数），一组输入值，用于生成一个输出值（类型为数字，数组，布尔值或字符串）。

### property

**String** 可选，属性名。如果设置了property，则会读取feature的属性作为输入值，如果不设置，则会用map的zoom作为输入值。

### base

**Number**，可选，默认为1。 插值计算的基础值，用于控制插值的增加速率。base不为1时，插值计算为非线性，base越高，则插值增长得越快。而base为1时，则插值为线性插值。

### type

**String**，可选，默认为"exponential"。函数类型，可选的值："identity", "exponential", "interval", or "categorical"

* identity：把输入的property值直接作为输出值，必须定义property。
* exponential: 通过stops和base，插值计算出结果，要求输入值必须为数值类型。
* interval：用stops把输入值划分为几个区间来定义各自的输出值，即落在某个区间的输入值都输出同一个输出值。
* categorical：输入值必须等于stops中某个值时，则输出相应的输出值。

### default

**any**，可选，默认值。如果输入值无法计算得到一个合法的输出值时，输出的默认值，主要用于以下几种情况：

* type是categorical时，输入值不等于stops中任何一个值时。
* 定义了property，但Feature没有定义该property时。
* type是identity时，Feature的property值不合法时（例如输出必须是一个合法颜色值，但实际值不是合法的颜色）
* type是interval或者exponential时，输入值不是一个合法的数字。

## 函数嵌套

function-type能支持函数嵌套，即在stops中定义一个新的function-type，能用来做一些更复杂的计算方式。

例如以下的例子，当Feature的class属性为highway时，则当道路等级（level属性）为1时用绿色，等级为2时则用黄色。
class属性为motorway时用白色，而class属性为countyway时用浅白。

```js
{
  lineColor: {
    type: 'categorical',
    property: 'class',
    stops: [
      ['highway', { type: 'categorical', property: 'level', stops: [[1, 'Green'], [2, 'Yellow']] }],
      ['motorway', '#fff'],
      ['countyway', '#eee']
    ],
    default: '#000'
  }
}
```

## 例子

* 直接用Feature的color属性作为lineColor
```js
{
  lineColor: {
    type: 'identity',
    property: 'color',
    default: '#000'
  }
}
```

* 不同楼层用不同的颜色绘制。
```js
{
  polygonFill: {
    property: 'levels',
    type: 'interval',
    stops: [
      [3, '#0f0'],
      [10, '#ff0'],
      [20, '#f00']
    ],
    default: '#fff'
  }
}
```