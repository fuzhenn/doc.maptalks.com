图层事件监听示例代码：
```js
// 监听workerready事件
layer.once('workerready', e => {
  // e为事件参数
  console.log('worker is ready');
});

// 监听tileload事件
layer.on('tileload', e => {
  // e为事件参数
  console.log('loaded a tile', e.tile);
});
````
