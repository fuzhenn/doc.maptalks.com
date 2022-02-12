## 继承自TileLayer的方法

具体可以参考[父类TileLayer的API文档](https://maptalks.org/maptalks.js/api/0.x/TileLayer.html)。

<details><summary>getTileSize()</summary>
<div>
<br/>

获取瓦片高宽

返回：

* Size

</div>
</details>


<details><summary>getTiles()</summary>
<div>
<br/>

获取瓦片

返回：

* Object

</div>
</details>


<details><summary>getTileUrl(x, y, z)</summary>
<div>
<br/>

获取瓦片url

返回：

* String

</div>
</details>


<details><summary>clear()</summary>
<div>
<br/>

清空图层

</div>
</details>


<details><summary>toJSON()</summary>
<div>
<br/>

获得图层的JSON对象，这个JSON对象可以通过 maptalks.Layer.fromJSDN(json) 方法还原为图层对象。

返回：

* Object

</div>
</details>


<details><summary>getSpatialReference()</summary>
<div>
<br/>

获得图层的空间参考对象。

返回：

* SpatialReference

</div>
</details>

