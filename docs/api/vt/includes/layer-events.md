<details><summary>clear</summary>
<div>
<br/>

图层被清除事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "clear"  |
|target   | VectorTileLayer |   this     |

</div>
</details>


<details><summary>idchange</summary>
<div>
<br/>

图层id变化事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "idchange"  |
|target   | VectorTileLayer |   this     |
|old      | String          |   旧的id     |
|new      | String          |   新的id     |

</div>
</details>


<details><summary>renderercreate</summary>
<div>
<br/>

renderer创建事件

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type       | String          |   "renderercreate"  |
|target     | VectorTileLayer |   this     |
|renderer   | VectorTileLayerRenderer |      |

</div>
</details>


<details><summary>canvascreate</summary>
<div>
<br/>

canvas创建事件

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "canvascreate"  |
|target   | VectorTileLayer |   this     |
|gl       | WebGLRenderingContext2D |      |

</div>
</details>


<details><summary>renderstart</summary>
<div>
<br/>

开始渲染事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "renderstart"  |
|target   | VectorTileLayer |   this     |

</div>
</details>


<details><summary>renderend</summary>
<div>
<br/>

结束渲染事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "renderend"  |
|target   | VectorTileLayer |   this     |

</div>
</details>

