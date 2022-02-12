<details><summary>updateSymbol(idx, symbol)</summary>
<div>
<br/>

更新style序号为idx样式的symbol。

```js
layer.updateSymbol(0, symbol);
```

参数：

* idx **Number** style样式序号
* symbol **Object** 要更新的symbol属性

返回：

* this

</div>
</details>

<details><summary>outlineAll()</summary>
<div>
<br/>

高亮图层上所有的数据。

因为高亮是采用后处理实现的，图层需要加入[GroupGLLayer](../gl/group-gl-layer)，且[outline后处理](../gl/group-gl-layer#outline)是开启的。

```js
layer.addTo(groupGLLayer);
layer.outlineAll();
```

返回：

* this

</div>
</details>


<details><summary>outline(geoIds)</summary>
<div>
<br/>

高亮id在geoIds中的所有Geometry。

```js
layer.addTo(groupGLLayer);
layer.outline([0, 1, 2]);
```

参数：

* geoIds **Number[] | String[]** geometry id 数组

返回：

* this

</div>
</details>


<details><summary>cancelOutline()</summary>
<div>
<br/>

取消高亮。

返回：

* this

</div>
</details>

<details><summary>toJSON()</summary>
<div>
<br/>

获取图层的JSON序列化对象。

该对象可以用 Layer.fromJSON 方法反序列化一个图层对象。

```js
const json = layer.toJSON();
const copiedLayer = maptalks.Layer.fromJSON(json);
````


返回：

* Object

</div>
</details>