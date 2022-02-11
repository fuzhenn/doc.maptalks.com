## 继承自Layer的方法

具体可以参考[父类Layer的API文档](https://maptalks.org/maptalks.js/api/0.x/Layer.html)。

<details><summary>getId()</summary>
<p>
<br/>

获得图层id

返回：

* Number | String

</p>
</details>

<details><summary>setId(id)</summary>
<p>
<br/>

设置图层id

返回：

* this

</p>
</details>

<details><summary>addTo(map)</summary>
<p>
<br/>

添加到地图上。

返回：

* this

</p>
</details>

<details><summary>getMinZoom()</summary>
<p>
<br/>

获取最小瓦片级别。

返回：

* Number

</p>
</details>

<details><summary>getMaxZoom()</summary>
<p>
<br/>

获取最大瓦片级别。

返回：

* Number

</p>
</details>

<details><summary>getMap()</summary>
<p>
<br/>

获取图层添加到的map对象。

返回：

* Map

</p>
</details>

<details><summary>getProjection()</summary>
<p>
<br/>

获取图层的projection。

返回：

* Projection

</p>
</details>

<details><summary>show()</summary>
<p>
<br/>

隐藏图层。

返回：

* this

</p>
</details>

<details><summary>hide()</summary>
<p>
<br/>

隐藏图层。

返回：

* this

</p>
</details>

<details><summary>isVisible()</summary>
<p>
<br/>

判定图层是否显示。

返回：

* Boolean

</p>
</details>

<details><summary>remove()</summary>
<p>
<br/>

删除图层。

返回：

* this

</p>
</details>

<details><summary>on(events, handler, context)</summary>
<p>
<br/>

注册图层的监听事件

返回：

* this

</p>
</details>

<details><summary>addEventListener(events, handler, context)</summary>
<p>
<br/>

同 on 方法

返回：

* this

</p>
</details>

<details><summary>once(events, handler, context)</summary>
<p>
<br/>

注册图层的监听事件，响应后即删除

返回：

* this

</p>
</details>

<details><summary>off(events, handler, context)</summary>
<p>
<br/>

移除图层注册的监听事件

返回：

* this

</p>
</details>

<details><summary>removeEventListener(events, handler, context)</summary>
<p>
<br/>

同 off 方法

返回：

* this

</p>
</details>

<details><summary>listens(events, handler, context)</summary>
<p>
<br/>

判断图层是否监听了events事件。

返回：

* Boolean

</p>
</details>

<details><summary>fire(event, params)</summary>
<p>
<br/>

手动发射一个事件，params是时间参数。

返回：

* this

</p>
</details>

<details><summary>setOptions(options)</summary>
<p>
<br/>

设置图层配置。

返回：

* this

</p>
</details>

<details><summary>config(key, value)</summary>
<p>
<br/>

更新某个图层配置。

返回：

* this

</p>
</details>
