# feature-filter

[feature-filter](https://github.com/maptalks/feature-filter)是[maptalks核心库](https://maptalks.org)使用的数据过滤表达式，基于mapbox的[feature-filter](https://github.com/mapbox/feature-filter)(MIT License)开发。

例如它被用于[VectorTileLayer](../../../api/vt/vector-tile-layer)中渲染插件的filter属性，用于过滤适用于渲染插件的数据。

## 示例

```js
// 所有 layer 属性是desert，type是Polygon的数据
[
  "all",
  [
    "==",
    "$layer",
    "desert"
  ],
  [
    "==",
    "$type",
    "Polygon"
  ]
];
```

## Feature格式

feature-filter用于判定的Feature格式是如下格式：
```json
{
  // type可选的值： 1, 2, 3, 4, 5, 6，对应了"Point", "LineString","Polygon","MultiPoint", "MultiLineString","MultiPolygon"
  "type": 1,
  "id": 0,
  "layer": "layer0",
  "properties": {
    "key": "value"
  }
}
```

## 支持的表达式语法

### 是否存在表达式

* feature[key]存在
```js
["has", key]
```

* feature[key]不存在
```js
["!has", key]
```

### 比较表达式

* 等于， feature[key] = value
```js
["==", key, value]
```

* 不等于： feature[key] != value
```js
["!=", key, value]
````

* 大于： feature[key] > value
```js
[">", key, value]
```

* 大于等于：feature[key] >= value
```js
[">=", key, value]
```

* 小于： feature[key] < value
```js
["<", key, value]
```

* 小于等于：feature[key] <= value
```js
["<=", key, value]
```

### 集合表达式

* 在集合中，feature[key] in {v0, ..., vn}
```js
["in", key, v0, ..., vn]
```

* 不在集合中，feature[key] !in {v0, ...., vn}
```js
["!in", key, v0, ..., vn]
```

### 条件表达式

条件表达式用于将多个表达式组合起来，组成复合表达式。以下定义中的f0, ..., fn同样都是表达式。

* AND条件，f0 ∧ ... ∧ fn
```js
["all", f0, ..., fn]
```

* OR条件，f0 ∨ ... ∨ fn
```js
["any", f0, ..., fn]
```

* none条件，¬f0 ∧ ... ∧ ¬fn
```js
["none", f0, ..., fn]
```

## key

key必须是一个字符串类型的feature属性名，或者下列特殊的属性名：

* "$type"： feature的type，可以用于"==","!=", "in", "!in"等过滤器，可能的值有 "Point", "MultiPoint", "LineString", "MultiLineString", "Polygon"和"MultiPolygon"。
* "$id": feature的id，可以用于"==","!=", "in", "!in"等过滤器。
* "$layer": feature所属图层，可以用于"==","!=", "in", "!in"等过滤器。

## value

一个value，必须是一个字符串，数字或者布尔值。

## 强类型

比较和集合过滤器采用的是强类型比较策略，即值的类型必须相同，例如： 0 < "1", 2 == "2", "true" in [true, false] 都是非真的。

## 例子：

* type为LineString的数据

```js
["==", "$type", "LineString"]
```

* class可以是 "street_major", "street_minor", "street_limited"其中之一的数据
```js
["in", "class", "street_major", "street_minor", "street_limited"]
```

* 同时满足以下三个条件的数据：1. class必须是street_limited，2. admin_level大于等于3，3. type不是Polygon
```js
[
    "all",
    ["==", "class", "street_limited"],
    [">=", "admin_level", 3],
    ["!in", "$type", "Polygon"]
]
```