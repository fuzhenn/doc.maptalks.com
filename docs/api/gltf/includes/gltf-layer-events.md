<details><summary>updatesymbol</summary>
<div>
<br/>

更新Layer的style中序号为index的symbol的updatesymbol事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "updatesymbol"  |
|target   | GLTFLayer       |   this            |
|index    | Number          |   样式序号        |
|symbol   | Object          |   symbol对象      |

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
|target   | GLTFLayer |   this     |

</div>
</details>

<details><summary>modelerror</summary>
<div>
<br/>

模型加载错误事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String     |   "modelerror"  |
|target   | GLTFLayer  |   this     |
|marker   | GLTFMarker |   发生错误的marker   |

</div>
</details>

<details><summary>modelload</summary>
<div>
<br/>

模型加载成功事件。

参数属性：

| 属性名           |  类型           |   值 |
|  ------         | :----:  | ----  |
|type     | String          |   "modelerror"  |
|target   | GLTFLayer   |   this     |
|models   | String[]    | 成功加载的模型url   |

</div>
</details>