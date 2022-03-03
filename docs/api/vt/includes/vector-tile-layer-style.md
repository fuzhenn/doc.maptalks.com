## 样式

矢量瓦片即支持矢量（点线面）的样式，也有把线和面构造为三维线和三维面后，用三维pbr材质渲染的能力。

矢量瓦片整合了feature-filter和function-type来支持数据过滤和动态样式，能方便的把矢量瓦片中的数据分门别类用不同样式和不同级别结合材质魔法渲染出惊人的效果。

因此矢量瓦片很适合大场景下的数据分类渲染，如城市建筑群。比起3dtiles等静态数据，矢量瓦片因为生态更好，样式和数据分离的特点，能在消除数据更新成本的同时，提供3dtiles很难达到的样式设计能力。

矢量瓦片的样式采用了插件式设计，样式由一个个渲染插件来定义的，渲染插件的详细信息可以参考[样式手册](../../style/intro)，以下是一个样式的简单示例：

<details><summary>样式示例</summary>
<div>

```json
{
  "style": [
    {
      "renderPlugin": {
        "type": "fill",
        "dataConfig": {
          "type": "fill",
          "only2D": true
        },
        "sceneConfig": {
          "depthFunc": "always",
          "blendSrc": "one"
        }
      },
      "symbol": {
        "visible": true,
        "polygonFill": "rgba(0,0,0,1)",
        "polygonOpacity": 1
      },
      "filter": {
        "title": "desert",
        "value": [
          "all",
          [
            "==",
            "$layer",
            "desert"
          ],
          [
            "==",
            "$type",
            "Polygon"
          ]
        ]
      }
    },
    {
      "renderPlugin": {
        "type": "line",
        "dataConfig": {
          "type": "line",
          "only2D": true
        },
        "sceneConfig": {
          "blendSrc": "one"
        }
      },
      "symbol": {
        "visible": true,
        "lineOpacity": 1,
        "lineWidth": 1,
        "lineColor": "rgba(0,0,0,1)",
        "lineJoin": "miter",
        "lineCap": "butt",
        "lineDx": 0,
        "lineDy": 0,
        "lineDasharray": [
          0,
          0,
          0,
          0
        ],
        "lineDashColor": "rgba(0,0,0,1)",
        "lineStrokeWidth": 0,
        "lineStrokeColor": "rgba(0,0,0,1)"
      },
      "detail": {
        "layer": "desert-outline",
        "enable": {
          "lineWidth": false,
          "lineColor": false,
          "lineStrokeWidth": false,
          "lineStrokeColor": false
        }
      },
      "filter": {
        "title": "desert-outline",
        "value": [
          "all",
          [
            "==",
            "$layer",
            "desert"
          ],
          [
            "==",
            "$type",
            "Polygon"
          ]
        ]
      }
    }
  ]
}
```

</div>
</details>