## 继承自Layer的方法

具体可以参考[父类Layer的API文档](https://maptalks.org/maptalks.js/api/0.x/Layer.html)。

<details><summary>getId()</summary>
<div>
<br/>

获得图层id

返回：

* Number | String

</div>
</details>


<details><summary>setId(id)</summary>
<div>
<br/>

设置图层id

返回：

* this

</div>
</details>


<details><summary>addTo(map)</summary>
<div>
<br/>

添加到地图上。

返回：

* this

</div>
</details>


<details><summary>getMinZoom()</summary>
<div>
<br/>

获取最小瓦片级别。

返回：

* Number

</div>
</details>


<details><summary>getMaxZoom()</summary>
<div>
<br/>

获取最大瓦片级别。

返回：

* Number

</div>
</details>


<details><summary>getMap()</summary>
<div>
<br/>

获取图层添加到的map对象。

返回：

* Map

</div>
</details>


<details><summary>getProjection()</summary>
<div>
<br/>

获取图层的projection。

返回：

* Projection

</div>
</details>


<details><summary>show()</summary>
<div>
<br/>

隐藏图层。

返回：

* this

</div>
</details>


<details><summary>hide()</summary>
<div>
<br/>

隐藏图层。

返回：

* this

</div>
</details>


<details><summary>isVisible()</summary>
<div>
<br/>

判定图层是否显示。

返回：

* Boolean

</div>
</details>


<details><summary>remove()</summary>
<div>
<br/>

删除图层。

返回：

* this

</div>
</details>


<details><summary>on(events, handler, context)</summary>
<div>
<br/>

注册图层的监听事件

返回：

* this

</div>
</details>


<details><summary>addEventListener(events, handler, context)</summary>
<div>
<br/>

同 on 方法

返回：

* this

</div>
</details>


<details><summary>once(events, handler, context)</summary>
<div>
<br/>

注册图层的监听事件，响应后即删除

返回：

* this

</div>
</details>


<details><summary>off(events, handler, context)</summary>
<div>
<br/>

移除图层注册的监听事件

返回：

* this

</div>
</details>


<details><summary>removeEventListener(events, handler, context)</summary>
<div>
<br/>

同 off 方法

返回：

* this

</div>
</details>


<details><summary>listens(events, handler, context)</summary>
<div>
<br/>

判断图层是否监听了events事件。

返回：

* Boolean

</div>
</details>


<details><summary>fire(event, params)</summary>
<div>
<br/>

手动发射一个事件，params是时间参数。

返回：

* this

</div>
</details>


<details><summary>setOptions(options)</summary>
<div>
<br/>

设置图层配置。

返回：

* this

</div>
</details>


<details><summary>config(key, value)</summary>
<div>
<br/>

更新某个图层配置。

返回：

* this

</div>
</details>

