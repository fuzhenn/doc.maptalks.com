---
id: style
hide_title: true
title: 两种style
---

## 两种style

　　在早先，我们只支持普通style, 如下, 这种数据组织方式，后来我们在开发IDE的过程中，需要底图性能开销越小越好，于是，batchStyle诞生了。

　　如下，这是普通style。
```
[
  {
    renderPlugin: {
      type: "fill",
      dataConfig: {
        type: "fill",
        only2D: true,
      },
      sceneConfig: {
        depthFunc: "always",
        blendSrc: "one",
      },
    },
    symbol: {
      visible: true,
      polygonFill: "rgba(151,134,118,1)",
      polygonOpacity: 1,
    },
    filter: {
      title: "desert",
      value: ["all", ["==", "$layer", "desert"], ["==", "$type", "Polygon"]],
    },
  },
  {
    renderPlugin: {
      type: "fill",
      dataConfig: {
        type: "fill",
        only2D: true,
      },
      sceneConfig: {
        depthFunc: "always",
        blendSrc: "one",
      },
    },
    symbol: {
      visible: true,
      polygonFill: "rgba(202,232,211,1)",
      polygonOpacity: 1,
    },
    filter: {
      title: "education",
      value: ["all", ["==", "$layer", "education"], ["==", "$type", "Polygon"]],
    },
  }
  ...
```
　　如下，这是batchStyle的方式，我们考虑批量绘制的方式，根据symbol的属性，决定合并绘制。
```
{
    "batchName": "regions",
    "filter": [
      "any",
      ["all", ["==", "$layer", "desert"], ["==", "$type", "Polygon"]],
      ["all", ["==", "$layer", "education"], ["==", "$type", "Polygon"]],
      ["all", ["==", "$layer", "hospital"], ["==", "$type", "Polygon"]],
      ["all", ["==", "$layer", "entertainment"], ["==", "$type", "Polygon"]],
      ["all", ["==", "$layer", "shopping"], ["==", "$type", "Polygon"]],
      ["all", ["==", "$layer", "parking"], ["==", "$type", "Polygon"]],
      ["all", ["==", "$layer", "sport"], ["==", "$type", "Polygon"]],
      ["all", ["==", "$layer", "subway-hub"], ["==", "$type", "Polygon"]],
      ["all", ["==", "$layer", "train-station"], ["==", "$type", "Polygon"]],
      [
        "all",
        ["==", "$layer", "passenger-station"],
        ["==", "$type", "Polygon"]
      ],
      ["all", ["==", "$layer", "airport"], ["==", "$type", "Polygon"]],
      ["all", ["==", "$layer", "water"], ["==", "$type", "Polygon"]],
      ["all", ["==", "$layer", "greenland"], ["==", "$type", "Polygon"]],
      ["all", ["==", "$layer", "building"], ["==", "$type", "Polygon"]]
    ],
    "renderPlugin": {
      "dataConfig": {
        "only2D": true,
        "order": [
          ["all", ["==", "$layer", "desert"], ["==", "$type", "Polygon"]],
          ["all", ["==", "$layer", "education"], ["==", "$type", "Polygon"]],
          ["all", ["==", "$layer", "hospital"], ["==", "$type", "Polygon"]],
          [
            "all",
            ["==", "$layer", "entertainment"],
            ["==", "$type", "Polygon"]
          ],
          ["all", ["==", "$layer", "shopping"], ["==", "$type", "Polygon"]],
          ["all", ["==", "$layer", "parking"], ["==", "$type", "Polygon"]],
          ["all", ["==", "$layer", "sport"], ["==", "$type", "Polygon"]],
          ["all", ["==", "$layer", "subway-hub"], ["==", "$type", "Polygon"]],
          [
            "all",
            ["==", "$layer", "train-station"],
            ["==", "$type", "Polygon"]
          ],
          [
            "all",
            ["==", "$layer", "passenger-station"],
            ["==", "$type", "Polygon"]
          ],
          ["all", ["==", "$layer", "airport"], ["==", "$type", "Polygon"]],
          ["all", ["==", "$layer", "water"], ["==", "$type", "Polygon"]],
          ["all", ["==", "$layer", "greenland"], ["==", "$type", "Polygon"]],
          ["all", ["==", "$layer", "building"], ["==", "$type", "Polygon"]]
        ],
        "type": "fill"
      },
      "sceneConfig": { "depthRange": [0.9986, 0.9986], "blendSrc": "one" },
      "type": "fill"
    },
    "symbol": {
      "visible": true,
      "polygonFill": {
        "property": "$layer",
        "default": "rgba(151,134,118,1)",
        "type": "categorical",
        "stops": [
          ["education", "rgba(202,232,211,1)"],
          ["hospital", "rgba(233,196,138,1)"],
          ["entertainment", "rgba(0,0,0,1)"],
          ["shopping", "rgba(0,0,0,1)"],
          ["parking", "rgba(171,224,212,1)"],
          ["sport", "rgba(0,0,0,1)"],
          ["subway-hub", "rgba(0,0,0,1)"],
          ["train-station", "rgba(0,0,0,1)"],
          ["passenger-station", "rgba(0,0,0,1)"],
          ["airport", "rgba(0,0,0,1)"],
          ["water", "rgba(119,161,231,1)"],
          ["greenland", "rgba(137,170,99,1)"],
          ["building", "rgba(218,219,219,1)"]
        ]
      },
      "polygonOpacity": 1,
      "polygonPatternFile": null
    }
  },
  ...
```

## batchStyle

　　这种方式的优点是，性能高，所以如果您的场景对性能有很高的要求，可以优先考虑这种方式，当然它的缺点也很明显，无法updateSymbol改变某个图层的某个属性的样式， 所以如果您的场景里需要再次更新地图样式，请考虑普通style的方式。

　　在"发布"的时候，我们是选择的发布这种样式，以及对应的图标资源，发布到云端，您最终拿到的url，最终对应的json就是这种batchStyle。

　　这种方式在发布后，可以作为IDE的背景底图来使用。

## 普通style

　　这种普通style的模式，性能会差点。这种方式可以支持您的业务再次updateSymbol改变某个图层的某个属性的样式。

　　在导出的时候，我们提供两种样式，batchStyle和普通style，您可以自行选择。
