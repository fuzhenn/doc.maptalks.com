<details><summary>addgeo</summary>
<div>
<br/>

添加Geometry事件

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "addgeo"  |
|target   | Layer           |   this     |
|geometries | Geometry[]    |   添加的Geometry |

</div>
</details>

<details><summary>removegeo</summary>
<div>
<br/>

移除Geometry事件

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "removegeo"  |
|target   | Layer           |   this     |
|geometries | Geometry[]    |   移除的Geometry |

</div>
</details>

<details><summary>setstyle</summary>
<div>
<br/>

调用图层setStyle设置图层样式后的事件

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "setstyle" |
|target   | Layer           |   this       |
|style    | Object[]        |   样式数组    |

</div>
</details>

<details><summary>removestyle</summary>
<div>
<br/>

调用图层removeStyle清除图层样式后的事件

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "removestyle" |
|target   | Layer           |   this       |

</div>
</details>