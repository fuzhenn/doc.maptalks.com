<details><summary>updatefeaturesymbol</summary>
<p>
<br/>

updatefeaturesymbol事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesymbol"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   Feature样式序号        |
|styleIdx | Number          |   Feature渲染插件序号    |
|symbol   | Object          |     symbol对象     |

</p>
</details>

<details><summary>tileload</summary>
<p>
<br/>

瓦片载入事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesymbol"  |
|target   | VectorTileLayer |   this            |
|tile     | Object          |   瓦片对象          |
|tileImage| Object          |   瓦片数据     |

</p>
</details>

<details><summary>tileerror</summary>
<p>
<br/>

瓦片载入错误事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesymbol"  |
|target   | VectorTileLayer |   this            |
|error    | String          |   错误信息          |
|tile     | Object          |   瓦片对象          |
|symbol   | Object          |     symbol对象     |

</p>
</details>
