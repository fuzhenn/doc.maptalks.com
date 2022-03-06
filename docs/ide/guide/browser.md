---
id: browser
title: 浏览器支持
---

MapTalks IDE是基于以Chrominum为核心的[Electron](https://www.electronjs.org/)开发的，所以IDE本身不存在浏览器兼容问题。

对于IDE导出的用于在页面程序中加载的样式数据，其浏览器支持情况如下：

* Chrome
* Firefox
* Microsoft Edge 13 及以上.
* Safari 9+
* 各类以Chrominum为核心的第三方浏览器，如360浏览器，傲游浏览器等。
* IOS，安卓及鸿蒙操作系统上的现代手机浏览器
* 微信或手机QQ上的浏览器

> 公测版部分渲染功能在手机浏览器上还存在兼容性问题，正式版会完成修复

我们放弃了对IE浏览器（包括IE11）的支持，主要考虑到以下几个原因：
* IE不支持最新的Javascript标准，极大的增加了工程的开发和维护难度。
* IE11的WebGL性能很弱。
* IE不支持WASM，很多基于WASM的功能或优化都无法支持。
* IE的市场占有率已经小到可以忽略了。
* 2022年6月15日起，IE11将会停止维护。

如果您的应用因为某些原因必须采用IE浏览器，推荐您基于 [maptalks.js](https://maptalks.org) 开源库开发您的地图应用。