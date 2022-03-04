# 矢量数据图层的性能优化

这里的矢量数据图层包括矢量瓦片图层[VectorTileLayer](../vector-tile-layer/)和矢量图层（[PointLayer](../point-layer/)，[LineStringLayer](../linestring-layer/)和[PolygonLayer](../polygon-layer/)）。

## 样式更新的性能

基于Web 3D技术实现的矢量图层是将图形数据构造为一个通常称为Mesh的三维数据结构，然后交给Web 3D接口绘制的。

样式更新对性能的影响主要在于Mesh的更新是局部更新还是整体更新。

* 局部更新指只更新Mesh中的更新了的数据，不需要重新构造
* 整体更新指Mesh需要整体的重新构造

因此如果应用场景需要优化性能，需要尽量避免Mesh的整体更新，以下列出会造成Mesh整体更新的[symbol属性](../../../style/symbols/)，性能敏感的场景下，请避免频繁更新它们，其他没有列出的Symbol属性均不会造成Mesh整体更新。
>
> ❗ 表示会造成Mesh整体更新，🆗则表示不会

| 属性名       | 矢量瓦片图层   |  矢量图层  |
| -----       | ----------    | ------   |
|markerFile               | ❗            |   ❗    |
|markerPlacement          | ❗            |   ❗    |
|markerSpacing            | ❗            |   ❗    |
|markerHorizontalAlignment| ❗            |   🆗   |
|markerVerticalAlignment  | ❗            |   🆗   |
|textName                 | ❗            |   ❗    |
|textStyle                | ❗            |   ❗    |
|textFaceName             | ❗            |   ❗    |
|textWeight               | ❗            |   ❗    |
|textPlacement            | ❗            |   ❗    |
|textSpacing              | ❗            |   ❗    |
|textHorizontalAlignment  | ❗            |   🆗   |
|textVerticalAlignment    | ❗            |   🆗   |
|textWrapWidth            | ❗            |   🆗   |
|lineJoin                 | ❗            |   ❗    |
|lineCap                  | ❗            |   ❗    |
|linePatternFile          | ❗            |   ❗    |
|lineDasharray            | 🆗           |   ❗    |
|polygonPatternFile       | ❗            |   ❗    |