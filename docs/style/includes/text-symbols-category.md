text样式属性分为以下几类：

* 基础属性：文字最常用的样式属性
* 文字描边：文字描边的相关属性
* 对齐：如何让文字与坐标点对齐的设置
* 碰撞检测：碰撞检测相关设置
* 三维透视：三维透视相关的属性

| 类别 | 属性 |
| -------- | --------- |
| 基础属性   | textName, textSize, textFill, textOpacity, textFaceName, textWeight, textStyle, textRotation, textDx, textDy, textWrapWidth  |
| 文字描边   | textHaloFill, textHaloRadius, textHaloOpacity, textHaloBlur  |
| 对齐       | textHorizontalAlignment, textVerticalAlignment, textRotationAlignment, textPitchAlignment |
| 分布       | textPlacement*, textSpacing, mergeOnProperty |
| 碰撞检测   | textAllowOverlap, textIgnorePlacement |
| 三维透视   | textPerspectiveRatio* |

:::note
属性名上带*号的，表示该属性不支持[function-type](function-type)。

:::