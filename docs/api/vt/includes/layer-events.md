<details><summary>clear</summary>
<p>
<br/>

图层被清除事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "clear"  |
|target   | VectorTileLayer |   this     |

</p>
</details>

<details><summary>idchange</summary>
<p>
<br/>

图层id变化事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "idchange"  |
|target   | VectorTileLayer |   this     |
|old      | String          |   旧的id     |
|new      | String          |   新的id     |

</p>
</details>

<details><summary>renderercreate</summary>
<p>
<br/>

renderer创建事件

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type       | String          |   "renderercreate"  |
|target     | VectorTileLayer |   this     |
|renderer   | VectorTileLayerRenderer |      |

</p>
</details>

<details><summary>canvascreate</summary>
<p>
<br/>

canvas创建事件

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "canvascreate"  |
|target   | VectorTileLayer |   this     |
|gl       | WebGLRenderingContext2D |      |

</p>
</details>

<details><summary>renderstart</summary>
<p>
<br/>

开始渲染事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "renderstart"  |
|target   | VectorTileLayer |   this     |

</p>
</details>

<details><summary>renderend</summary>
<p>
<br/>

结束渲染事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "renderend"  |
|target   | VectorTileLayer |   this     |

</p>
</details>
