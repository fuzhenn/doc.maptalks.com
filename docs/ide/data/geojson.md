---
id: geojson
hide_title: true
title: geojson
---

## geojson数据导入FAQ

　　您在导入geojson数据的时候，可能会出现警告，或者导入后，地图无法显示且无任何异常的问题，以下是我们搜集的一些数据问题，如果和您看到的结果对应，可以据此手动处理数据。如果以下文档没有包含您的情况，可以及时与我们反馈，我们会丰富文档。

### 数据经纬度

　　在数据格式章节，我们可以给出了一个geojson数据的示例。
```
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [114.32894, 30.585748]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}
```
　　如果您的数据的coordinates为 [12727039.383734727, 3579066.6894065146]，那么您可能用了墨卡托坐标系, 在IDE中导入后，页面无法显示，您可以提前把数据转成经纬度，然后再导入。

### Position must be an array

　　下方的coordinates不存在，所以会抛这个错误，没有坐标系的feature，您可以选择自动删除或者根据您的数据要求修复它。
```
{
  "type": "FeatureCollection",
  "name": "point-1",
  "crs": {
    "type": "name",
    "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "osm_id": "3406566",
        "highway": "traffic_signals",
        "ref": null
      },
      "geometry": { "type": "Point", "coordinates": null }
    }
  ]
}
```

### 类型不正确

　　type must be one of: "Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon" or "GeometryCollection", 这种错误需要修复数据的geometry.type为以上这些值中的某个。
```
{
  "type": "FeatureCollection",
  "name": "point-1",
  "crs": {
    "type": "name",
    "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "osm_id": "3406566",
        "highway": "traffic_signals",
        "ref": null
      },
      "geometry": { "type": "", "coordinates": [114.32894, 30.585748] }
    }
  ]
}

```

### type must be "Feature"

　　feture的type必须是"Feature",下方数据为"Feature1",需要把type从"Feature1"改成"Feature"

```
{
  "type": "FeatureCollection",
  "name": "point-1",
  "crs": {
    "type": "name",
    "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
  },
  "features": [
    {
      "type": "Feature1",
      "properties": {
        "osm_id": "3406566",
        "highway": "traffic_signals",
        "ref": null
      },
      "geometry": { "type": "Point", "coordinates": [114.32894, 30.585748] }
    }
  ]
}
```
