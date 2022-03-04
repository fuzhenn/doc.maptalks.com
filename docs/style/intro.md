# 样式概述

maptalks三维渲染图层引入了丰富的样式系统，以方便用户定制二维或三维数据的样式，包括：

* Symbol样式系统，即点线面数据在地图上的绘制样式，[symbol说明文档](../symbols)。
* 三维渲染材质系统，即不同三维渲染算法的材质样式属性，[材质说明文档](../material)。

三维图层都是基于上述两个样式系统来实现三维场景渲染的。

## 矢量渲染插件系统

矢量渲染插件是矢量瓦片图层(VectorTileLayer)以及矢量图层(PointLayer, LineStringLayer, PolygonLayer)内部的渲染程序。

插件式设计能降低各渲染程序之间的耦合性，并保证了扩展性和可维护性。

当前版本包括了以下的渲染插件：

| 插件名     |  描述                                      | 文档 |
| :--------- | :---------------------------------------  | ---- |
| icon       | 为点，线或者面类型数据绘制图标和文字的插件    | [文档](../plugin-icon) |
| text       | 为点，线或者面类型数据绘制文字的插件          | [文档](../plugin-text) |
| line       | 为线或面类型数据绘制线或边框                 | [文档](../plugin-line) |
| line-gradient | 为线类型数据绘制渐变色的线                | [文档](../plugin-line-gradient) |
| fill       | 为面类型数据绘制面填充                       | [文档](../plugin-fill) |
| native-line| 用原生绘制技术，为线或面类型数据绘制线或边框   | [文档](../plugin-native-line) |
| native-point| 用原生绘制技术，为点，线或面类型数据绘制点    | [文档](../plugin-native-point) |
| lit        | 用pbr材质渲染三维面数据的渲染插件             | [文档](../plugin-lit)   |
| phong      | 用phong材质渲染三维面数据的渲染插件           | [文档](../plugin-phong) |
| wireframe  | 用边框材质渲染三维面数据的渲染插件             | [文档](../plugin-wireframe) |
| gltf-lit   | 用pbr材质的GLTF模型渲染点类型数据的渲染插件    | [文档](../plugin-gltf-lit)   |
| gltf-phong | 用phong材质的GLTF模型渲染点类型数据的渲染插件  | [文档](../plugin-gltf-phong) |
| water      | 用真实水体材质渲染面数据的渲染插件             | [文档](../plugin-water) |

## 3DTiles图层样式

3DTiles图层的样式是基于pbr材质和phong材质实现的，你可以通过定义Geo3DTilesLayer上service中的shader来指定用哪个材质来渲染3dtiles模型。

同时可以通过自定义service上的material属性，来指定材质的渲染参数。

material属性中的具体属性可以参考[材质说明文档](../material)。

## 可视化样式

待实现