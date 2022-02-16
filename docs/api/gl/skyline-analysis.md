# SkylineAnalysis

天际线空间分析对象，用于对三维场景实现天际线分析。

## 构造函数

```js
import { SkylineAnalysis } from '@maptalks/gl';

const skylineAnalysis = new SkylineAnalysis({
  lineColr: [1, 0, 0]
  lineWidth: 1
});

skylineAnalysis.addTo(groupGLLayer);
```

<details><summary>详细信息</summary>
<div>
参数：

* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型    |  描述                     | 默认值 |
|  ------              | :----:   | ----                      |   :-----------:  |
|lineColor             | Number[] | 三位归一化数组，天际线轮廓颜色   | [1, 0, 0] |
|lineWidth             | Number[] | 轮廓线宽度       | 1 |
</div>
</details>

## 继承自Analysis的方法

{@include: includes/analysis-methods.md}