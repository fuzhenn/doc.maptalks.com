<details><summary>addTo(groupGLLayer)</summary>
<div>
<br/>

添加到GroupGLLayer上。

空间分析对象只支持添加到GroupGLLayer上，无法添加到其他WebGL图层。

参数：

* groupGLLayer **GroupGLLayer** GroupGLLayer图层

返回：

* void

</div>
</details>

<details><summary>remove()</summary>
<div>
<br/>

从图层上移除空间分析对象。


返回：

* void

</div>
</details>

<details><summary>update(name, value)</summary>
<div>
<br/>

更新options数据。

参数：

* name **String** 设置名称
* value **any** 设置的值

返回：

* void

</div>
</details>

<details><summary>getAnalysisType()</summary>
<div>
<br/>

获取Analysis的类型。

返回：

* String

</div>
</details>

<details><summary>getDefines()</summary>
<div>
<br/>

内部调用方法。

返回Analysis绘制时在shader中添加的defines。

返回：

* Object

</div>
</details>

<details><summary>renderAnalysis(context)</summary>
<div>
<br/>

内部调用方法。

绘制空间分析场景。

参数：

* context **Object** 绘制上下文

返回：

* void

</div>
</details>