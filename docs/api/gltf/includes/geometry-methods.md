## 继承自Marker的方法

<details><summary>getCoordinates()</summary>
<div>
<br/>

获取坐标。

返回：

* Coordinate

</div>
</details>

<details><summary>setCoordinates(coordinates)</summary>
<div>
<br/>

设置坐标。

参数：

* coordinates **Number[]** | **Coordinate** 新的坐标

返回：

* this

</div>
</details>

<details><summary>getFirstCoordinate()</summary>
<div>
<br/>

获取第一个坐标。

返回：

* Coordinate

</div>
</details>

<details><summary>getLastCoordinate()</summary>
<div>
<br/>

获取最后一个坐标。

返回：

* Coordinate

</div>
</details>

<details><summary>addTo(layer)</summary>
<div>
<br/>

添加到图层上。

参数：
* layer **Layer** 图层

返回：

* this

</div>
</details>

<details><summary>getLayer()</summary>
<div>
<br/>

获取添加到的图层。

返回：

* Layer

</div>
</details>

<details><summary>getMap()</summary>
<div>
<br/>

获取添加到的地图。

返回：

* Map

</div>
</details>

<details><summary>getId()</summary>
<div>
<br/>

获取Geometry的id。

返回：

* String | Number

</div>
</details>

<details><summary>setId(id)</summary>
<div>
<br/>

设置新的id。

参数：

* id **Number** | **String** 新的id

返回：

* this

</div>
</details>

<details><summary>getProperties()</summary>
<div>
<br/>

获取Geometry的属性数据。

返回：

* Object

</div>
</details>

<details><summary>setProperties(properties)</summary>
<div>
<br/>

给Geometry设置属性数据。

参数：

* properties **Object** 新的属性数据

返回：

* this

</div>
</details>

<details><summary>getType()</summary>
<div>
<br/>

获取Geometry的type。

返回：

* String

</div>
</details>

<details><summary>getSymbol()</summary>
<div>
<br/>

获取Geometry的symbol样式。

返回：

* Object

</div>
</details>

<details><summary>setSymbol(symbol)</summary>
<div>
<br/>

给Geometry设置新的symbol样式。

参数：

* symbol **Object** 新的样式对象

返回：

* Object

</div>
</details>

<details><summary>updateSymbol(symbol)</summary>
<div>
<br/>

更新Geometry的symbol样式。

参数：

* symbol **Object** 要更新的symbol属性

返回：

* Object

</div>
</details>

<details><summary>getCenter()</summary>
<div>
<br/>

获取Geometry的地理重心。

返回：

* Coordinate

</div>
</details>

<details><summary>getExtent()</summary>
<div>
<br/>

获取Geometry的地理范围。

返回：

* Extent

</div>
</details>

<details><summary>show()</summary>
<div>
<br/>

显示Geometry。

返回：

* this

</div>
</details>

<details><summary>hide()</summary>
<div>
<br/>

隐藏Geometry。

返回：

* this

</div>
</details>

<details><summary>isVisible()</summary>
<div>
<br/>

Geometry是否显示。

返回：

* Boolean

</div>
</details>

<details><summary>getZIndex()</summary>
<div>
<br/>

返回Geometry的zIndex。

返回：

* Number

</div>
</details>

<details><summary>setZIndex(zIndex)</summary>
<div>
<br/>

设置Geometry的zIndex。

参数：

* zIndex **Number** Geometry的zIndex

返回：

* this

</div>
</details>

<details><summary>setZIndexSilently(zIndex)</summary>
<div>
<br/>

只设置Geometry的zIndex，但不会触发图层的重绘。
如果有大量Geoemtry的zIndex要更新，可以调用setZIndexSilently来更新，在最后一个Geometry调用setZIndex来出发图层的重绘，这样能提升性能。

参数：

* zIndex **Number** Geometry的zIndex

返回：

* this

</div>
</details>

<details><summary>translate(x, y)</summary>
<div>
<br/>

用给定的x和y偏移量移动Geometry。

参数：

* x **Number** x轴上的偏移量
* y **Number** y轴上的偏移量

返回：

* this

</div>
</details>

<details><summary>flash(interval, count, cb, context)</summary>
<div>
<br/>

按照给定的参数间隔消失，显示，闪动Geometry。

参数：

* interval **Number** 间隔时间
* count **Number** 次数
* cb **Function** 闪烁结束后的回调函数
* context **Object** 回调函数运行时使用的this值

返回：

* this

</div>
</details>

<details><summary>copy()</summary>
<div>
<br/>

复制一个Geometry。

返回：

* Geometry

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

从图层上移除Geometry。

返回：

* this

</div>
</details>

<details><summary>toGeoJSONGeometry()</summary>
<div>
<br/>

转换成GeoJSON的geometry对象。

返回：

* Object

</div>
</details>

<details><summary>toGeoJSON(options)</summary>
<div>
<br/>

转换成GeoJSON的对象。

参数：

* options **Object** 导出配置
* options.geometry **Boolean** 是否导出geometry，默认是true
* options.properties **Boolean** 是否导出properties，默认是true

返回：

* Object

</div>
</details>

<details><summary>toJSON(options)</summary>
<div>
<br/>

转换成JSON对象。

该对象可以用 Geometry.fromJSON(json) 创建一个Geometry对象。

参数：

* options **Object** 导出配置
* options.geometry **Boolean** 是否导出geometry，默认是true
* options.properties **Boolean** 是否导出properties，默认是true
* options.options **Boolean** 是否导出构造options，默认是true
* options.symbol **Boolean** 是否导出symbol，默认是true
* options.infoWindow **Boolean** 是否导出InfoWindow设置，默认是true

返回：

* Object

</div>
</details>

<details><summary>getLength()</summary>
<div>
<br/>

返回Geometry的地理长度。

返回：

* Number

</div>
</details>

<details><summary>getArea()</summary>
<div>
<br/>

返回Geometry的地理面积。

返回：

* Number

</div>
</details>

<details><summary>rotate(angle, pivot)</summary>
<div>
<br/>

绕着 pivot 坐标旋转 angle 角度。

参数：

* angle* **Number** 渲染角度，单位度
* pivot  **Coordinate** 渲染中心点

返回：

* this

</div>
</details>

<details><summary>startEdit(options)</summary>
<div>
<br/>

开始编辑图形。

参数：

* options **Object** 编辑参数
* options.symbol **Object** 编辑状态的图形样式
* options.fixAspectRatio  **Boolean** 如果图形有高宽，则固定图形的高宽比
* options.centerHandleSymbol **Object** 图形中心拖动手柄的样式（如果存在）
* options.vertexHandleSymbol **Object** 端点拖动手柄的样式（如果存在）
* options.newVertexHandleSymbol **Object** 新建端点手柄的样式（如果存在）
* options.centerHandleSymbol **Object** 图形中心拖动手柄的样式（如果存在）

返回：

* this

</div>
</details>

<details><summary>endEdit()</summary>
<div>
<br/>

停止编辑。

返回：

* this

</div>
</details>

<details><summary>redoEdit()</summary>
<div>
<br/>

重做上一步编辑操作。

返回：

* this

</div>
</details>

<details><summary>undoEdit()</summary>
<div>
<br/>

撤销上一步编辑操作。

返回：

* this

</div>
</details>

<details><summary>cancelEdit()</summary>
<div>
<br/>

取消编辑，让图形回到最初状态。

返回：

* this

</div>
</details>

<details><summary>isEditing()</summary>
<div>
<br/>

图形是否处于编辑状态中。

返回：

* this

</div>
</details>

<details><summary>isDragging()</summary>
<div>
<br/>

图形是否处于拖拽状态中。

返回：

* this

</div>
</details>

<details><summary>animate(styles, options, step)</summary>
<div>
<br/>

按照给定的参数执行图形动画。

参数：

* styles* **Object** 要执行动画的属性，例如symbol或是translate
* options **Object** 动画设置
* options.duration **Number** 持续时间，单位ms，默认1000
* options.startTime **Number** 开始动画的时间
* options.easing **String** 动画缓动类型，缓动类型可以参考[animation-easings](https://github.com/fuzhenn/animation-easings)中的说明。
* options.repeat **Boolean** 动画结束后是否重复播放

返回：

* this

</div>
</details>

<details><summary>setInfoWindow(options)</summary>
<div>
<br/>

给图形设置弹出信息框。

参数：

* options **Object** 信息框设置
* options.title **String** 信息框标题
* options.content **String** 信息框内容

其他设置可以参考[InfoWindow](https://maptalks.org/maptalks.js/api/0.x/ui.InfoWindow.html)中的说明和[示例](https://maptalks.org/examples/cn/ui-control/ui-custom-infownd/#ui-control_ui-custom-infownd)

返回：

* this

</div>
</details>

<details><summary>getInfoWindow()</summary>
<div>
<br/>

返回Geometry的InfoWindow对象实例。

返回：

* InfoWindow

</div>
</details>

<details><summary>openInfoWindow(coordinates)</summary>
<div>
<br/>

打开图形的信息框。

参数：

* coordinates **Coordiante | Number[]** 可选的信息框坐标。

返回：

* this

</div>
</details>

<details><summary>closeInfoWindow()</summary>
<div>
<br/>

关闭InfoWindow信息框。

返回：

* this

</div>
</details>

<details><summary>removeInfoWindow()</summary>
<div>
<br/>

移除图形的InfoWindow信息框。

返回：

* this

</div>
</details>

<details><summary>setMenu(options)</summary>
<div>
<br/>

给图形设置右键菜单。

参数：

* options **Object** 菜单设置
* options.width **Number** 菜单宽度
* options.items **Object[]** 菜单项
* options.items.item **String** 菜单显示标题
* options.items.click **Function** 响应函数

其他设置可以参考[Menu](https://maptalks.org/maptalks.js/api/0.x/ui.Menu.html)中的说明和[示例](https://maptalks.org/examples/cn/ui-control/ui-custom-menu/#ui-control_ui-custom-menu)

返回：

* this

</div>
</details>

<details><summary>openMenu(coordinates)</summary>
<div>
<br/>

打开图形的右键菜单。

参数：

* coordinates **Coordiante | Number[]** 可选的菜单坐标。

返回：

* this

</div>
</details>

<details><summary>setMenuItems(items)</summary>
<div>
<br/>

给图形设置右键菜单中的菜单项。

参数：

* items **Object[]** 菜单项
* items.item **String** 菜单显示标题
* items.click **Function** 响应函数

返回：

* this

</div>
</details>

<details><summary>getMenuItems()</summary>
<div>
<br/>

返回图形的右键菜单的菜单项。

返回：

* Object[]

</div>
</details>

<details><summary>closeMenu()</summary>
<div>
<br/>

关闭右键菜单。

返回：

* this

</div>
</details>

<details><summary>removeMenu()</summary>
<div>
<br/>

移除右键菜单。

返回：

* this

</div>
</details>


<details><summary>on(events, handler, context)</summary>
<div>
<br/>

注册图形的监听事件

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

注册图形的监听事件，响应后即删除

返回：

* this

</div>
</details>


<details><summary>off(events, handler, context)</summary>
<div>
<br/>

移除图形注册的监听事件

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

判断图形是否监听了events事件。

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

设置图形配置。

返回：

* this

</div>
</details>


<details><summary>config(key, value)</summary>
<div>
<br/>

更新某个图形配置。

返回：

* this

</div>
</details>

<details><summary>getJSONType()</summary>
<div>
<br/>

返回图形类注册的JSON type。


返回：

* String

</div>
</details>