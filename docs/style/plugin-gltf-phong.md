# gltf-phong渲染插件

用phong材质的GLTF模型渲染点类型数据的渲染插件。

## 配置说明
```js
{
  renderPlugin: {
    // [必填] 固定为lit
    type: 'gltf-phong',
    // [必填] 数据设置
    dataConfig: {
      // [必填] 固定为 native-point
      type: 'native-point'
    }
  },
  filter: true,
  symbol: {
    visible: true,
    bloom: false,
    ssr: false,
    polygonFill: [1, 1, 1, 1],
    polygonOpacity: 1,
    translation: [0, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    fixSizeOnZoom: 10
  }
}
```

filter 数据过滤条件的具体说明请点击[这里](../filter/feature-filter)。

## 支持的数据类型

{@include: includes/point-supports.md}

{@include: includes/plugin-gltf-content.md}