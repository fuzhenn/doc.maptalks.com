---
id: vector
title: 矢量瓦片数据源
hide_title: true
---

## 本地文件模式

目前数据源模式支持本地文件和远程链接两种，默认是本地文件模式。

![图片](./assets/vector-1.png)

#### 文件格式

这里的文件一般指的是从 mapbox，arcgis 等平台导出的style json文件。以 mapbox 为例，下面是 mapbox studio 里面导出 style json 文件的入口，只需要导出 zip 包，解压后在 designer 里面导入其中的 style json 文件即可。（对于 mapbox 底图已经设计好的样式，designer 会尽可能转换成 maptalks 支持的样式格式设置到地图上，资源文件除外。）

![图片](./assets/vector-2.png)

#### 文件导入

导入解压后的 style.json 文件。

![图片](./assets/vector-3.png)

#### 填写 Token

导入文件成功后，如果有些数据源访问需要 token，需要把 token 填上，然后点击分析，如果不需要 token，就可以直接点击分析按钮。

![图片](./assets/vector-4.png)

#### 瓦片地址

如果之前的操作没有问题，这里在点击分析后，就会展示出分析到的矢量瓦片服务地址，可能会有多个，默认选择第一个，也可以根据需要来切换地址。

![图片](./assets/vector-5.png)