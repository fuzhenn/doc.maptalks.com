---
id: filter
hide_title: true
title: filter和renderOrder
---

## filter规则列表

　　下面，我们将我们的数据源的filter规则罗列出来,方便您做参考。

```
const filter = {
  water: ["all", ["==", "$layer", "water"], ["==", "$type", "Polygon"]],
  greenland: ["all", ["==", "$layer", "greenland"], ["==", "$type", "Polygon"]],
  desert: ["all", ["==", "$layer", "desert"], ["==", "$type", "Polygon"]],
  education: ["all", ["==", "$layer", "education"], ["==", "$type", "Polygon"]],
  hospital: ["all", ["==", "$layer", "hospital"], ["==", "$type", "Polygon"]],
  entertainment: [
    "all",
    ["==", "$layer", "entertainment"],
    ["==", "$type", "Polygon"],
  ],
  shopping: ["all", ["==", "$layer", "shopping"], ["==", "$type", "Polygon"]],
  parking: ["all", ["==", "$layer", "parking"], ["==", "$type", "Polygon"]],
  sport: ["all", ["==", "$layer", "sport"], ["==", "$type", "Polygon"]],
  "subway-hub": [
    "all",
    ["==", "$layer", "subway-hub"],
    ["==", "$type", "Polygon"],
  ],
  "train-station": [
    "all",
    ["==", "$layer", "train-station"],
    ["==", "$type", "Polygon"],
  ],
  "passenger-station": [
    "all",
    ["==", "$layer", "passenger-station"],
    ["==", "$type", "Polygon"],
  ],
  airport: ["all", ["==", "$layer", "airport"], ["==", "$type", "Polygon"]],
  building: ["all", ["==", "$layer", "building"], ["==", "$type", "Polygon"]],
  waterway: [
    "all",
    ["==", "$layer", "waterway"],
    ["==", "$type", "LineString"],
  ],
  "greenland-outline": [
    "all",
    ["==", "$layer", "greenland"],
    ["==", "$type", "Polygon"],
  ],
  "education-outline": [
    "all",
    ["==", "$layer", "education"],
    ["==", "$type", "Polygon"],
  ],
  "hospital-outline": [
    "all",
    ["==", "$layer", "hospital"],
    ["==", "$type", "Polygon"],
  ],
  "entertainment-outline": [
    "all",
    ["==", "$layer", "entertainment"],
    ["==", "$type", "Polygon"],
  ],
  "shopping-outline": [
    "all",
    ["==", "$layer", "shopping"],
    ["==", "$type", "Polygon"],
  ],
  "parking-outline": [
    "all",
    ["==", "$layer", "parking"],
    ["==", "$type", "Polygon"],
  ],
  "sport-outline": [
    "all",
    ["==", "$layer", "sport"],
    ["==", "$type", "Polygon"],
  ],
  "subway-hub-outline": [
    "all",
    ["==", "$layer", "subway-hub"],
    ["==", "$type", "Polygon"],
  ],
  "train-station-outline": [
    "all",
    ["==", "$layer", "train-station"],
    ["==", "$type", "Polygon"],
  ],
  "passenger-station-outline": [
    "all",
    ["==", "$layer", "passenger-station"],
    ["==", "$type", "Polygon"],
  ],
  "airport-outline": [
    "all",
    ["==", "$layer", "airport"],
    ["==", "$type", "Polygon"],
  ],
  "building-outline": [
    "all",
    ["==", "$layer", "building"],
    ["==", "$type", "Polygon"],
  ],
  "foreign-boundary": ["all", ["==", "$layer", "foreign-boundary"]],
  "china-boundary": ["all", ["==", "$layer", "china-boundary"]],
  "province-boundary": ["all", ["==", "$layer", "province-boundary"]],
  "city-boundary": ["all", ["==", "$layer", "city-boundary"]],
  "area-boundary": ["all", ["==", "$layer", "area-boundary"]],
  expressway: [
    "all",
    ["==", "$layer", "expressway"],
    ["==", "$type", "LineString"],
  ],
  railway: ["all", ["==", "$layer", "railway"], ["==", "$type", "LineString"]],
  "constructing-railway": [
    "all",
    ["==", "$layer", "constructing-railway"],
    ["==", "$type", "LineString"],
  ],
  "city-loop": [
    "all",
    ["==", "$layer", "city-loop"],
    ["==", "$type", "LineString"],
  ],
  "national-highway": [
    "all",
    ["==", "$layer", "national-highway"],
    ["==", "$type", "LineString"],
  ],
  "express-rail": [
    "all",
    ["==", "$layer", "express-rail"],
    ["==", "$type", "LineString"],
  ],
  "provincial-highway": [
    "all",
    ["==", "$layer", "provincial-highway"],
    ["==", "$type", "LineString"],
  ],
  subway: ["all", ["==", "$layer", "subway"], ["==", "$type", "LineString"]],
  "secondary-road": [
    "all",
    ["==", "$layer", "secondary-road"],
    ["==", "$type", "LineString"],
  ],
  "tertiary-road": [
    "all",
    ["==", "$layer", "tertiary-road"],
    ["==", "$type", "LineString"],
  ],
  "four-level-road": [
    "all",
    ["==", "$layer", "four-level-road"],
    ["==", "$type", "LineString"],
  ],
  "internal-road": [
    "all",
    ["==", "$layer", "internal-road"],
    ["==", "$type", "LineString"],
  ],
  "other-road": [
    "all",
    ["==", "$layer", "other-road"],
    ["==", "$type", "LineString"],
  ],
  bridge: ["all", ["==", "$layer", "bridge"]],
  "continent-label": ["all", ["==", "$layer", "continent"]],
  "country-label": ["all", ["==", "$layer", "country"]],
  "province-label": ["all", ["==", "$layer", "province"]],
  "city-label": ["all", ["==", "$layer", "city"]],
  "area-label": ["all", ["==", "$layer", "area"]],
  "town-label": ["all", ["==", "$layer", "town"]],
  "village-label": ["all", ["==", "$layer", "village"]],
  "region-label": ["all", ["==", "$layer", "region"]],
  "water-label": ["all", ["==", "$layer", "water-label"]],
  "expressway-label": [
    "all",
    ["==", "$layer", "expressway-label"],
    ["==", "$type", "LineString"],
  ],
  "city-loop-label": [
    "all",
    ["==", "$layer", "city-loop-label"],
    ["==", "$type", "LineString"],
  ],
  "national-highway-label": [
    "all",
    ["==", "$layer", "national-highway-label"],
    ["==", "$type", "LineString"],
  ],
  "provincial-highway-label": [
    "all",
    ["==", "$layer", "provincial-highway-label"],
    ["==", "$type", "LineString"],
  ],
  "secondary-road-label": [
    "all",
    ["==", "$layer", "secondary-road-label"],
    ["==", "$type", "LineString"],
  ],
  "tertiary-road-label": [
    "all",
    ["==", "$layer", "tertiary-road-label"],
    ["==", "$type", "LineString"],
  ],
  "four-level-road-label": [
    "all",
    ["==", "$layer", "four-level-road-label"],
    ["==", "$type", "LineString"],
  ],
  "internal-road-label": [
    "all",
    ["==", "$layer", "internal-road-label"],
    ["==", "$type", "LineString"],
  ],
  "railway-label": [
    "all",
    ["==", "$layer", "railway-label"],
    ["==", "$type", "LineString"],
  ],
  "express-rail-label": [
    "all",
    ["==", "$layer", "express-rail-label"],
    ["==", "$type", "LineString"],
  ],
  "subway-label": [
    "all",
    ["==", "$layer", "subway-label"],
    ["==", "$type", "LineString"],
  ],
  "constructing-railway-label": [
    "all",
    ["==", "$layer", "constructing-railway-label"],
    ["==", "$type", "LineString"],
  ],
  "other-road-label": [
    "all",
    ["==", "$layer", "other-road-label"],
    ["==", "$type", "LineString"],
  ],
  "bridge-label": ["all", ["==", "$layer", "bridge-label"]],
  "expressway-sign": [
    "all",
    ["==", "$layer", "expressway-sign"],
    ["==", "$type", "LineString"],
  ],
  "national-highway-sign": [
    "all",
    ["==", "$layer", "national-highway-sign"],
    ["==", "$type", "LineString"],
  ],
  "provincial-highway-sign": [
    "all",
    ["==", "$layer", "provincial-highway-sign"],
    ["==", "$type", "LineString"],
  ],
  poi: ["all", ["==", "$layer", "poi"], ["==", "$type", "Point"]],
};
```

　　 除了water和waterway外，其它面和面轮廓是共用的filter,只不过是不同插件。其它的每一个都是一种图层。


## renderOrder

　　前面的fill, line, text, icon代表的是插件，后面的代表图层的key， designer以图层这些key作为唯一标识，与上方的filter规则一一对应。

```
    "fill:desert",
    "fill:education",
    "fill:hospital",
    "fill:entertainment",
    "fill:shopping",
    "fill:parking",
    "fill:sport",
    "fill:subway-hub",
    "fill:train-station",
    "fill:passenger-station",
    "fill:airport",
    "fill:water",
    "fill:greenland",
    "fill:building",

    "line:greenland-outline",
    "line:education-outline",
    "line:hospital-outline",
    "line:entertainment-outline",
    "line:shopping-outline",
    "line:parking-outline",
    "line:sport-outline",
    "line:subway-hub-outline",
    "line:train-station-outline",
    "line:passenger-station-outline",
    "line:airport-outline",
    "line:waterway",
    "line:building-outline",

    "line:internal-road",
    "line:other-road",
    "line:four-level-road",
    "line:tertiary-road",
    "line:secondary-road",
    "line:provincial-highway",
    "line:national-highway",
    "line:city-loop",
    "line:expressway",
    "line:railway",
    "line:constructing-railway",
    "line:express-rail",
    "line:subway",
    "line:area-boundary",
    "line:city-boundary",
    "line:province-boundary",
    "line:foreign-boundary",
    "line:china-boundary",
    "line:bridge",

    "text:continent-label",
    "text:country-label",
    "text:province-label",
    "text:city-label",
    "text:area-label",
    "text:town-label",
    "text:village-label",
    "text:region-label",
    "text:water-label",

    "icon:poi",
    "icon:expressway-sign",
    "icon:national-highway-sign",
    "icon:provincial-highway-sign",

    "text:express-rail-label",
    "text:constructing-railway-label",
    "text:railway-label",
    "text:expressway-label",
    "text:subway-label",
    "text:city-loop-label",
    "text:national-highway-label",
    "text:provincial-highway-label",
    "text:secondary-road-label",
    "text:tertiary-road-label",
    "text:four-level-road-label",
    "text:other-road-label",
    "text:internal-road-label",
    "text:bridge-label",
```

## key的中英文对照表
```
    "regions": "区域面",
    "land": "陆地",
    "water": "水系",
    "greenland": "绿地",
    "desert": "沙漠",
    "education": "教育",
    "hospital": "医疗",
    "entertainment": "娱乐",
    "shopping": "购物",
    "parking": "停车场",
    "sport": "运动场所",
    "subway-hub": "地铁枢纽",
    "train-station": "火车站",
    "passenger-station": "客运站",
    "airport": "飞机场",
    "building": "建筑物",

    "regions-outline": "区域轮廓",
    "land-outline": "陆地",
    "waterway": "水系",
    "greenland-outline": "绿地",
    "education-outline": "教育",
    "hospital-outline": "医疗",
    "entertainment-outline": "娱乐",
    "shopping-outline": "购物",
    "parking-outline": "停车场",
    "sport-outline": "运动场所",
    "subway-hub-outline": "地铁枢纽",
    "train-station-outline": "火车站",
    "passenger-station-outline": "客运站",
    "airport-outline": "飞机场",
    "building-outline": "建筑物",

    "road-boundary": "道路和边界",
    "foreign-boundary": "外国国界",
    "china-boundary": "中国国界",
    "province-boundary": "省界",
    "city-boundary": "市界",
    "area-boundary": "区县界",
    "expressway": "高速",
    "city-loop": "城市环线",
    "national-highway": "国道",
    "provincial-highway": "省道",
    "secondary-road": "二级道路",
    "tertiary-road": "三级道路",
    "four-level-road": "四级道路",
    "internal-road": "内部道路",
    "railway": "铁路",
    "express-rail": "高铁",
    "subway": "地铁",
    "constructing-railway": "在建铁路",
    "other-road": "其他路线",
    "bridge": "桥",

    "road-label": "道路文字标注",
    "expressway-label": "高速",
    "city-loop-label": "城市环线",
    "national-highway-label": "国道",
    "provincial-highway-label": "省道",
    "secondary-road-label": "二级道路",
    "tertiary-road-label": "三级道路",
    "four-level-road-label": "四级道路",
    "internal-road-label": "内部道路",
    "railway-label": "铁路",
    "express-rail-label": "高铁",
    "subway-label": "地铁",
    "constructing-railway-label": "在建铁路",
    "other-road-label": "其他路线",
    "bridge-label": "桥",

    "label": "文字标注",
    "continent-label": "大洲",
    "country-label": "国家",
    "province-label": "省",
    "city-label": "市",
    "area-label": "区县",
    "town-label": "乡镇",
    "village-label": "村",
    "region-label": "区域标注",
    "water-label": "水系",

    "expressway-sign": "高速路牌",
    "national-highway-sign": "国道路牌",
    "provincial-highway-sign": "省道路牌",
    "poi": "兴趣点",
```
