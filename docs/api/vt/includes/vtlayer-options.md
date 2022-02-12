|fetchOptions     | Object          | [fetch参数](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch) | null |
|style            | Object          | 图层样式对象          |  null  |
|subdomains       | String[]        | subdomains, 用于替换url模板中的 {s} | null |
|tileSize         | Number[]        | 瓦片高宽，单位像素     | [512, 512] |
|offset           | Number[]/Function | 瓦片的偏移量，单位像素，二位数组或函数，函数的参数为 zoom，瓦片的zoom级别，offset(zoom) {} | null |
|features         | Boolean         | 瓦片是否返回feature数据 | true |
|schema           | Boolean         | 瓦片是否返回数据的属性schema | false |
|collision        | Boolean         | 是否开启点和文字的碰撞检测   | true |
|picking          | Boolean         | 是否允许图层用identify或identifyAtPoint方法查询数据 | true |
|pickingPoint     | Boolean         | identify或identifyAtPoint方法的查询结果是否返回查询点的三维空间坐标 | false |
|pickingGeometry  | Boolean         | identify或identifyAtPoint方法的查询结果是否包含Geometry | false |
|iconErrorUrl     | Boolean         | icon请求失败后的替换图片url                             | null |
|collisionFrameLimit | Number       | 每帧用于计算Collision的时间限制，单位ms                  | 1.5  |
|defaultRendering | Boolean         | 是否开启没有style时的默认样式绘制                        | true |
|textGamma        | Number          | 文字的Gamma值，可以用于调整文字清晰度                     | 1   |
|maxIconSize      | Number          | 图标最大尺寸限制                                        | 254  |
|styleScale       | Number          | 图层图标和文字的整体放大系数                        		 | 1    |
|spatialReference | String / Object | 图层的空间参考         | "preset-vt-3857" |
|tileSystem       | Number[]        | 一个四位数数组，用于描述 TileSystem，TileSystem用于定义瓦片的起始坐标和X/Y轴上的编号规律，具体含义参考该[链接](https://github.com/maptalks/maptalks.js/wiki/Tile-System) | [1, -1, -6378137 \* Math.PI, 6378137 * Math.PI] |maxAvailableZoom | Number          | 最大可用级别，当地图级别超过maxAvailableZoom后，则显示maxAvailableZoom级别的瓦片。 | null |
|repeatWorld      | Boolean         | 在低级别时，整个世界不满一屏时，是否重复显示世界  | true |
|crossOrigin      | String          | 瓦片数据的[cross origin](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)  | null |
|debug            | Boolean         | 是否开启调试信息，开启后地图上会绘制瓦片的编号和范围  | null |
|maxCacheSize     | Number          | 瓦片缓存的最大数量       | 72 |
|zoomOffset       | Number          | 瓦片zoom级别和地图zoom级别的差值    | 0 |
|errorUrl         | String          | 瓦片请求失败后的替代链接    | null |
|token            | String          | 用于替换url模板中的{token}，例如 http://foo/bar/{z}/{x}/{y}?token={token}   | null |
