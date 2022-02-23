# 材质说明文档

材质是指三维渲染算法中，物体和光的交互过程中涉及到的参数。当前可用到的材质有[pbr材质](#pbr材质)和[phong（冯氏光照）](#phong材质)两种材质。

目前材质主要用于：

* [VectorTileLayer](../api/vt/vector-tile-layer)的[lit渲染插件](plugin-lit)(pbr材质)和[phong渲染插件](plugin-phong)。
* [GLTF图层](../api/gltf/gltf-layer)渲染模型默认的渲染材质是pbr材质。
* [Geo3DTilesLayer](../api/3dtiles/geo-3dtiles-layer)默认用的phong材质。

## pbr材质

pbr算法是以粗糙度和金属度为中心的材质系统，详细介绍可以参考基础知识中的[什么是pbr](../ide/guide/basic/pbr)。

pbr材质参数如下：

| 名称 | 类型 | 描述 | 默认值 |
| :---------------- | ----------  | :-----------------------------------  | -------------- |
|baseColorTexture   | String      | 基础色纹理的路径，支持url或者base64      | null          |
|baseColorFactor    | Number[4]   | 基础色，四位归一化数组                                                        | [1, 1, 1, 1]  |
|hsv                | Number[3]   | [hsv颜色](https://baike.baidu.com/item/HSV/547122)参数，三位分别是hue，saturation，value，即色相，饱和度和明度，每一位的取值范围都是0-1 | [0, 0, 0] |
|baseColorIntesity  | Number      | 颜色强度，颜色 = baseColorFactor * baseColorIntesity                          | 1        |
|contrast           | Number      | 颜色对比度，取值范围 0 - 5, 当值为1时则不影响原有颜色                           | 1         |
|outputSRGB         | Number      | 是否输出[SRGB色](https://baike.baidu.com/item/sRGB/1350619?fr=aladdin)       | 1         |
|metallicRoughnessTexture | String| 金属度粗糙度的路径，纹理的g通道是金属度，b通道是粗糙度，支持url或者base64        | null       |
|roughnessFactor    | Number      | 粗糙度，取值范围 0 - 1，0为最光滑，1为最粗糙                                   | 0.4       |
|metallicFactor     | Number      | 金属度，取值范围 0 - 1，0为非金属，1为金属                                     | 0         |
|normalTexture      | String      | 发现纹理的路径，支持url或者base64                     | null          |
|normalMapFactor    | Number      | 法线纹理的强度因子。                                  | 1             |
|bumpTexture        | String      | 高度纹理的路径，支持url或者base64                     | null          |
|bumpScale          | Number      | 高度纹理强度因子。                                    | 1             |
|occlusionTexture   | String      | 环境光遮蔽纹理的路径，支持url或者base64                | null          |
|emissiveTexture    | String      | 自发光纹理的路径，支持url或者base64                    | null          |
|emissiveFactor     | Number      | 自发光颜色值                                          | [0, 0, 0]    |
|emitColorFactor    | Number      | 自发光颜色强度因子。                                   | 1             |
|emitMultiplicative | Number      | 自发光与原颜色是否是相乘，0表示相加，1表示相乘。          | 0            |
|clearCoatThickness | Number      | 清漆厚度                                              | 5             |
|clearCoatFactor    | Number      | 清漆强度因子。                                         | 0            |
|clearCoatIor       | Number      | 清漆的反射率(IOR)                                      | 1.4          |
|clearCoatRoughnessFactor | Number| 清漆的粗糙度，0 - 1                                   | 0.04         |
|noiseTexture       | String      | 随机分布纹理的随机值纹理的路径，支持url或者base64       | null          |
|uvScale            | Number[2]   | uv坐标缩放比例。                                       | [1, 1]       |
|uvOffset           | Number[2]   | uv偏移量，0表示不偏移，1表示刚好偏移一个纹理尺寸。        | [0, 0]       |
|uvRotation         | Number      | 纹理旋转角度，单位度，0 - 360                          | 0            |
|uvOffsetAnim       | Number[2]   | uv方向上的偏移动画，不为1时开启动画，绝对值越大动画越快，负值时则反方向动画 | [0, 0] |

示例：

```js
{
  "material": {
    "baseColorTexture": "/path/to/baseColorTexture.jpg",
    "baseColorFactor": [1, 1, 1, 1],
    "hsv": [0, 0, 0],
    "baseColorIntensity": 1,
    "contrast": 1,
    "outputSRGB": 1,
    "metallicRoughnessTexture": "/path/to/metallicRoughnessTexture.jpg",
    "roughnessFactor": 1,
    "metallicFactor": 1,
    "normalTexture": "/path/to/normalTexture.jpg",
    "noiseTexture": null,
    "uvScale": [1, 1],
    "uvOffset": [0, 0],
    "uvRotation": 0,
    "uvOffsetAnim": [0, 0],
    "normalMapFactor": 1,
    "bumpTexture": null,
    "bumpScale": 0.02,
    "clearCoatThickness": 5,
    "clearCoatFactor": 0,
    "clearCoatIor": 1.4,
    "clearCoatRoughnessFactor": 0.04,
    "occlusionTexture": "/path/to/occlusionTexture.jpg",
    "emissiveTexture": null,
    "emissiveFactor": [0, 0, 0],
    "emitColorFactor": 1,
    "emitMultiplicative": 0
  }
}
```

## phong材质

因为pbr材质需要WebGL支持standard_deractive等扩展，在客户端不支持这些扩展时，可以用冯氏光照材质来代替。

冯氏光照不需要任何WebGL扩展支持，兼容性是最好的。

| 名称 | 类型 | 描述 | 默认值 |
| :---------------- | ----------  | :-----------------------------------  | -------------- |
|baseColorTexture   | String      | 基础色纹理的路径，支持url或者base64      | null          |
|baseColorFactor    | Number[4]   | 基础色，四位归一化数组                                | [1, 1, 1, 1]  |
|materialShininess  | Number      | 材质高光值。                                          | 32            |
|specularStrength   | Number      | 高光的强度因子。                                      | 32             |
|ambientStrength    | Number      | 漫反射强度因子。                                      | 1             |
|opacity            | Number      | 透明度，0 - 1                                        | 1             |
|normalTexture      | String      | 发现纹理的路径，支持url或者base64                     | null          |
|occlusionTexture   | String      | 环境光遮蔽纹理的路径，支持url或者base64                | null          |
|emissiveTexture    | String      | 自发光纹理的路径，支持url或者base64                    | null          |
|uvScale            | Number[2]   | uv坐标缩放比例。                                       | [1, 1]       |
|uvOffset           | Number[2]   | uv偏移量，0表示不偏移，1表示刚好偏移一个纹理尺寸。        | [0, 0]       |
|extrusionOpacityRange| Number[2] | 侧面透明度的变化范围，如果最大值超过1，则表示在顶部一部分比例都是不透明的。 | [0, 1.8]     |


示例：

```js
{
  material: {
    'baseColorFactor': [1, 1, 1, 1],
    'materialShininess' : 32.0,
    'ambientStrength' : 1,
    'specularStrength' : 32,
    'opacity' : 1.0,
    'extrusionOpacityRange': [0, 1.8],

    'baseColorTexture': null,
    'normalTexture': null,
    'emissiveTexture': null,
    'occlusionTexture': null,

    'uvScale': [1, 1],
    'uvOffset': [0, 0]
  }
}