---
id: path
title: 资源路径
---

## 资源的相对路径问题

msd JSON中的资源路径都是相对路径，相对的是map.json的存储路径。

例如下面的 foo.jpg，在msd JSON 中的路径为 `./res/resources/foo.jpg`。

```
+-- res
|   +-- resources
|   |      +-- foo.jpg
+-- map.json
```


而在页面程序中，资源的相对路径都是参考的页面的路径，当map.json和页面不在同一目录下时，程序会找不到资源。

最简单的方法是把 `map.json` 以及 `res` 目录永远和页面存储在同一路径下。 这样就不需要转换路径了。

但现实中`map.json`和`res`目录往往没和页面在一起，此时需要将msd JSON中的相对路径转换为绝对路径。

## 通过 msd-json-loader 转换路径

最简单的解决办法是通过 [msd-json-loader](https://github.com/maptalks/msd-json-loader) 加载MSD中的样式, msd-json-loader会自动将JSON中的相对路径转换为绝对路径。

其转换规则如下：

### 默认根路径

按照默认方式加载时，msd-json-loader会用map.json的路径 `path/to/map.json` 将资源路径中的 `./res` 替换为 `path/to/res`。
```js
import MSDJSONLoader from '@maptalks/gl-layers';
const loader = new MSDJSONLoader({
	data: 'http://example.com/map.json'
});
await loader.load();
const marker = loader.getLayer('gltf0').getGeometryById('data0');
// 此时的gltfURL不再是相对路径，而是绝对路径了。
const gltfURL = marker.options.symbol.url;
```
此时map.json中原有的GLTFMarker的模型路径：
```js
symbol: {
	url: './res/resources/gltf.json'
}
````
会被替换为:
```js
symbol: {
	url: 'http://example.com/res/resources/gltf.json'
}
````

### 自定义根路径

您也可以在创建MSDJSONLoader时，通过 basePath 参数指定一个根路径，例如：
```js
import MSDJSONLoader from '@maptalks/gl-layers';
const loader = new MSDJSONLoader({
	data: 'http://example.com/map.json',
	basePath: 'http://resources.example.com'
});
```
此时map.json中原有的GLTFMarker的模型路径：
```js
symbol: {
	url: './res/resources/gltf.json'
}
````
会被替换为:
```js
symbol: {
	url: 'http://resources.example.com/res/resources/gltf.json'
}
````

## 人工转换路径

如果某种特殊情况下，需要人工将msd JSON中的相对路径替换为绝对路径，您可以按如下代码将json中的相对路径都替换为绝对路径：

```js
let jsonString = JSON.stringify(msdJSON);
const pattern = /".\/res/g;
const basePath = 'http://resources.example.com'

jsonString = jsonString.replace(pattern, `"#${basePath}/res`);
const json = JSON.parse(jsonString);
```