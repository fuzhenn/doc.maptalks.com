# ViewshedAnalysis

可视域分析空间分析对象，用于对三维场景实现可视域分析。

## 构造函数

```js
import { ViewshedAnalysis } from '@maptalks/gl-layers';

const viewshedAnalysis = new ViewshedAnalysis({
  eyePos: [121, 39, 100],
  lookPoint: [121, 39, 0],
  verticalAngle: 90,
  horizontalAngle: 90,
  visibleColor: [0.0, 1.0, 0.0, 1.0],
  invisibleColor: [1.0, 0.0, 0.0, 1.0]
});

viewshedAnalysis.addTo(groupGLLayer);
```

<details><summary>详细信息</summary>
<div>
参数：

* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型    |  描述                     | 默认值 |
|  ------              | :----:   | ----                      |   :-----------:  |
|eyePos*               | Number[] | 观察者位置，[x, y, h]，x和y是经纬度，h是海拔高度  | null |
|lookPoint*            | Number[] | 观察目标位置，[x, y, h]，x和y是经纬度，h是海拔高度  | null |
|verticalAngle         | Number  | 垂直视角，单位角度          | 90 |
|horizontalAngle       | Number  | 水平视角，单位角度          | 90 |
|visibleColor          | Number[] | 四位归一化数组，可视区域颜色   | [0, 1, 0, 1] |
|invisibleColor        | Number[] | 四位归一化数组，不可视区域颜色 | [1, 0, 0, 1] |
</div>
</details>

## 继承自Analysis的方法

{@include: includes/analysis-methods.md}