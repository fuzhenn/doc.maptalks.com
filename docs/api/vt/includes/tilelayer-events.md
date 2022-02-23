<details><summary>tileload</summary>
<div>
<br/>

瓦片载入事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "tileload"  |
|target   | VectorTileLayer |   this            |
|tile     | Object          |   瓦片对象          |
|tileImage| Object          |   瓦片数据     |

</div>
</details>


<details><summary>tileerror</summary>
<div>
<br/>

瓦片载入错误事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "tileerror"  |
|target   | VectorTileLayer |   this            |
|error    | String          |   错误信息          |
|tile     | Object          |   瓦片对象          |

</div>
</details>