## 继承自OverlayLayer的方法

具体可以参考[父类OverlayLayer的API文档](https://maptalks.org/maptalks.js/api/0.x/OverlayLayer.html)。

<details><summary>getGeometryById(id)</summary>
<div>
<br/>

用id获取Geometry。

参数：

* id **Number** | **String** Geometry的id

返回：

* Number | String

</div>
</details>

<details><summary>getGeometries(filter, context)</summary>
<div>
<br/>

获取所有符合条件的Geometry。

参数：

* filter **Function** 过滤函数
* context **Object** fn函数运行时使用的this值

返回：

* Number | String

</div>
</details>

<details><summary>getFirstGeometry()</summary>
<div>
<br/>

获取第一个Geometry。

返回：

* Geometry

</div>
</details>

<details><summary>getLastGeometry()</summary>
<div>
<br/>

获取最后一个Geometry。

返回：

* Geometry

</div>
</details>

<details><summary>getCount()</summary>
<div>
<br/>

获取Geometry数量。

返回：

* Number

</div>
</details>

<details><summary>getExtent()</summary>
<div>
<br/>

获取图层上所有Geometry的地理范围。

返回：

* Extent

</div>
</details>

<details><summary>forEach(fn, context)</summary>
<div>
<br/>

遍历Geometry并执行函数。

参数：

* fn **Function** 每个Geometry的操作函数 function(geometry) {}
* context **Object** fn函数运行时使用的this值

返回：

* this

</div>
</details>

<details><summary>isEmpty()</summary>
<div>
<br/>

判断图层是否是空图层。

返回：

* Boolean

</div>
</details>

<details><summary>addGeometry(geometries, fitView)</summary>
<div>
<br/>

向图层添加Geometry。

参数：

* geometries **Geometry** | **Geometry[]** Geometry或Geometry数组
* fitView **Boolean** 

返回：

* this

</div>
</details>

<details><summary>removeGeometry(geometries)</summary>
<div>
<br/>

从图层删除Geometry

参数：

* geometries **Geometry** | **Geometry[]**

返回：

* this

</div>
</details>

<details><summary>clear()</summary>
<div>
<br/>

清空图层，删除所有Geometry。

返回：

* this

</div>
</details>

<details><summary>setStyle(style)</summary>
<div>
<br/>

设置图层的样式，样式说明请参考该链接。

```js
const style = [
  {
    filter : true,            // 数据的过滤条件
    symbol: {                 // 样式定义
      markerWidth: 6,
      markerHeight: 6,
      markerType: 'ellipse',
      markerFill: '#0f0'
    }
  }
];
layer.setStyle(style);
```

参数：
* style **Object[]** 图层样式对象，每个样式对象包含filter和symbol两个属性，filter是[feature-filter类型](https://github.com/maptalks/feature-filter)的过滤条件，symbol是样式对象。

返回：

* this

</div>
</details>

<details><summary>getStyle()</summary>
<div>
<br/> 

获取图层样式。

返回：

* Object[]

</div>
</details>

<details><summary>removeStyle()</summary>
<div>
<br/> 

移除图层的样式。

返回：

* this

</div>
</details>