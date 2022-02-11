## 继承自TileLayer的方法

具体可以参考[父类TileLayer的API文档](https://maptalks.org/maptalks.js/api/0.x/TileLayer.html)。

<details><summary>getTileSize()</summary>
<p>
<br/>

获取瓦片高宽

返回：

* Size

</p>
</details>

<details><summary>getTiles()</summary>
<p>
<br/>

获取瓦片

返回：

* Object

</p>
</details>

<details><summary>getTileUrl(x, y, z)</summary>
<p>
<br/>

获取瓦片url

返回：

* String

</p>
</details>

<details><summary>clear()</summary>
<p>
<br/>

清空图层

</p>
</details>

<details><summary>toJSON()</summary>
<p>
<br/>

获得图层的JSON对象，这个JSON对象可以通过 maptalks.Layer.fromJSDN(json) 方法还原为图层对象。

返回：

* Object

</p>
</details>

<details><summary>getSpatialReference()</summary>
<p>
<br/>

获得图层的空间参考对象。

返回：

* SpatialReference

</p>
</details>
