---
id: configuration
title: 配置
hide_title: true
---

## 配置

在运行之前，可能需要做少量的配置。配置文件以TOML格式存在。

### 配置文件示例

```toml
[server]
addr = ":8080"


### memory cache for features
[cache]
  maximumSize = 500000
  [cache.tile]
    ## backend: file(dir), memory(library: freecache/bigcache)
    backend = "memory"
    # library = "freecache"
    size = "512 MiB"
    # dir = "data/cache/tile"
  [cache.lowzoom]
    backend = "file"
    dir = "data/cache/lowzoom"


### tile generation
[tile]
  compress = true
  parallelism = 0


### data store
[data]
  backend = "elastic"
  [data.elastic]
    urls = ["http://localhost:9200"]
    memorySize = "512M"
    # maxIdle = 2000
    # maxIdlePerHost = 1000
    # idleTimeout = 90 # in seconds


[logging]
  level = "info"
  ## backends: stderr, file
  backend = "stderr"
  # [logging.file]
    # path = "vts.log"
    # maxSize = 10 # in MB
```

### 配置项说明

以下仅列出可能需要修改的配置项。

| 配置项                    | 说明                             | 示例                      |
|---------------------------|----------------------------------|---------------------------|
| `server.addr`             | 服务监听地址                     | `:8080`, `127.0.0.1:8080` |
| `cache.maximumSize`       | 设置内存中缓存的Features最大数量 | `500000`                  |
| `data.elastic.memorySize` | ElasticSearch将要使用的内存大小  | `512M`，`2G`              |
| `tile.compress`           | 是否使用gzip压缩生成的瓦片数据   | `true`/`false`            |
| `tile.parallelism`        | 瓦片生成时的并发数，0表示CPU核数 | `0`                       |
