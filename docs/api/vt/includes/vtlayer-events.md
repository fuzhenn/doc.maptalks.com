<details><summary>iblupdated</summary>
<div>
<br/>

环境光更新事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "iblupdated"  |
|target   | VectorTileLayer |   this     |

</div>
</details>


<details><summary>canvasisdirty</summary>
<div>
<br/>

画布产生绘制的事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "canvasisdirty"  |
|target   | VectorTileLayer |   this     |

</div>
</details>


<details><summary>workerready</summary>
<div>
<br/>

worker准备就绪事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "workerready"  |
|target   | VectorTileLayer |   this     |

</div>
</details>


<details><summary>datareceived</summary>
<div>
<br/>

获取到瓦片数据事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "datareceived"  |
|target   | VectorTileLayer |   this     |

</div>
</details>


<details><summary>pluginsinited</summary>
<div>
<br/>

渲染插件初始化结束事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "pluginsinited"  |
|target   | VectorTileLayer |   this     |

</div>
</details>


<details><summary>setstyle</summary>
<div>
<br/>

设置样式事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "dataerror"  |
|target   | VectorTileLayer |   this     |
|styles   | Object[] |   样式对象     |
|computedStyles   | Object[] |   Feature样式对象     |

</div>
</details>


<details><summary>updatesceneconfig</summary>
<div>
<br/>

updatesceneconfig事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesceneconfig"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   样式序号              |
|sceneConfig | Object          |   scene config对象     |

</div>
</details>


<details><summary>updatefeaturesceneconfig</summary>
<div>
<br/>

updatefeaturesceneconfig事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesceneconfig"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   Feature样式序号        |
|styleIdx | Number          |   Feature渲染插件序号    |
|sceneConfig | Object          |   scene config对象     |

</div>
</details>


<details><summary>updatedataconfig</summary>
<div>
<br/>

updatedataconfig事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatedataconfig"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   样式序号              |
|dataConfig | Object        |   data config对象     |

</div>
</details>


<details><summary>updatefeaturesdataconfig</summary>
<div>
<br/>

updatefeaturesdataconfig事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesdataconfig"  |
|target   | VectorTileLayer |   this                  |
|index    | Number          |   Feature样式序号        |
|styleIdx | Number          |   Feature渲染插件序号    |
|dataConfig | Object        |   data config对象     |

</div>
</details>


<details><summary>updatesymbol</summary>
<div>
<br/>

updatesymbol事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesymbol"  |
|target   | VectorTileLayer |   this            |
|index    | Number          |   样式序号        |
|symbol   | Object          |   symbol对象      |

</div>
</details>

