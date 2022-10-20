# FloodAnalysis

水淹分析空间分析对象，用于对三维场景实现水淹分析。

## 构造函数

```js
import { FloodAnalysis } from '@maptalks/gl-layers';

const floodAnalysis = new FloodAnalysis({
  waterHeight: 100,
  waterColor: [0.1451, 0.2588, 0.4863]
});

floodAnalysis.addTo(groupGLLayer);
```

<details><summary>详细信息</summary>
<div>
参数：

* options\* **Object** 配置参数，可选的配置项如下：

| 配置名               |  类型    |  描述                     | 默认值 |
|  ------             | :----:   | ----                      |   :-----------:  |
|waterHeight          | Number   | 水面高度                   | 0 |
|waterColor           | Number[] | 三位归一化数组，水面颜色    | [0.1451, 0.2588, 0.4863] |

</div>
</details>

## 继承自Analysis的方法

{@include: includes/analysis-methods.md}