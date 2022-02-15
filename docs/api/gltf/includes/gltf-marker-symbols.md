| 配置名               |  类型   |  描述                     | 默认值 |
|  ------             | :----:  | ----                      |   :-----------:  |
|url               | String  | 模型的url                   | null |
|visible           | Boolean | 模型是否可见                 | true |
|translation       | Number[]| 模型在本地坐标系xyz轴上的偏移量        | [0, 0, 0] |
|rotation          | Number[]| 模型在本地坐标系xyz轴上的旋转角度，单位角度 | [0, 0, 0] |
|scale             | Number[]| 模型在本地坐标系xyz轴上的缩放倍数       | [1, 1, 1] |
|animation         | Boolean | 是否开启动画       | true |
|animationName     | String/Number | 动画序列名称  | 0 |
|loop              | Boolean | 是否开启动画循环    | true |
|speed             | Number  | 动画速度倍数    | 1 |
|fixSizeOnZoom     | Number  | 在给定级别上固定模型大小，不再随地图缩放而改变，设置为-1时取消  | -1 |
|anchorZ           | String  | 模型在z轴上的锚点或对齐点，可选的值： top， bottom  | bottom |
|shadow            | Boolean | 是否开启阴影  | true |
|bloom             | Boolean | 是否开启泛光  | true |
|shader            | String  | 模型绘制的shader，可选值：pbr, phong, wireframe  | pbr |
|uniforms          | Object  | 选择的shader的材质参数，具体参数说明可以参考这篇文档。  | null |