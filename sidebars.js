/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
module.exports = {
  // But you can create a sidebar manually

  ide: [
    {
      type: "doc",
      id: "ide/guide/intro",
    },
    {
      type: "doc",
      id: "ide/guide/compare",
    },
    {
      type: "doc",
      id: "ide/guide/browser",
    },
    {
      type: "doc",
      id: "ide/guide/install",
    },
    {
      type: "doc",
      id: "ide/guide/purchase",
    },
    {
      type: "category",
      label: "入门指南",
      collapsed: false,
      items: [
        "ide/guide/tutorial/create",
        "ide/guide/tutorial/ui",
        "ide/guide/tutorial/save",
      ],
    },
    {
      type: "category",
      label: "基础知识",
      collapsed: true,
      items: [
        {
          type: "link",
          label: "GIS知识入门",
          href: "https://mp.weixin.qq.com/s/UkQvMFEWyHDbsmh7LDWU7A",
        },
        "ide/guide/basic/vt",
        "ide/guide/basic/gltf",
        "ide/guide/basic/pbr",
      ],
    },
    {
      type: "category",
      label: "导入数据",
      collapsed: false,
      items: [
        "ide/guide/data/formats",
        "ide/guide/data/errors",
        "ide/guide/data/coord",
      ],
    },
    {
      type: "category",
      label: "发布",
      collapsed: false,
      items: ["ide/guide/publish/publish", "ide/guide/publish/iis"],
    },
    {
      type: "category",
      label: "程序加载",
      collapsed: false,
      items: [
        "ide/guide/useInProgram/intro",
        "ide/guide/useInProgram/path",
        {
          type: "link",
          label: "msd-json-loader接口",
          href: "https://github.com/maptalks/msd-json-loader",
        },
        {
          type: "link",
          label: "程序加载示例",
          href: "https://github.com/maptalks/msd-json-loader",
        },
      ],
    },
    {
      type: "category",
      label: "性能优化",
      collapsed: false,
      items: ["ide/guide/performance/resource"],
    },
    {
      type: "category",
      label: "崩溃处理",
      collapsed: false,
      items: [
        "ide/guide/crash/crashRecovery",
        "ide/guide/crash/autosave",
        "ide/guide/crash/log",
        "ide/guide/crash/report",
      ],
    },
  ],
  "design-guide": [
    {
      type: "doc",
      id: "design-guide/intro",
    },
    {
      type: "category",
      label: "设计入门",
      collapsed: false,
      items: [
        "design-guide/basic/layer",
        "design-guide/basic/vt",
        "design-guide/basic/gltf",
        "design-guide/basic/select",
        "design-guide/basic/select2",
        "design-guide/basic/resource",
        "design-guide/basic/light-hdr",
        "design-guide/basic/light-hdrcolor",
        "design-guide/basic/light-direction",
        "design-guide/basic/light-skybox",
        "design-guide/basic/light-save",
        "design-guide/basic/texture",
        "design-guide/basic/material",
        "design-guide/basic/material2",
        "design-guide/basic/height",
        "design-guide/basic/shader-ball",
        "design-guide/basic/setting",
        "design-guide/basic/attribute",
      ],
    },
    {
      type: "category",
      label: "设计案例",
      collapsed: false,
      items: [
        "design-guide/design-tutorial/road",
        "design-guide/design-tutorial/fill-animation",
        "design-guide/design-tutorial/classification",
        "design-guide/design-tutorial/reflection",
        "design-guide/design-tutorial/windows",
        "design-guide/design-tutorial/roof",
        "design-guide/design-tutorial/transparent",
      ],
    },
    {
      type: "category",
      label: "更多设计",
      collapsed: false,
      items: [
        "design-guide/design-more/city",
        "design-guide/design-more/glass",
      ],
    },
    {
      type: "category",
      label: "常见问题",
      collapsed: false,
      items: ["design-guide/faqs/group"],
    },
  ],
  designer: [
    {
      type: "doc",
      id: "designer/intro",
    },
    {
      type: "category",
      label: "新建设计",
      collapsed: false,
      items: [
        "designer/create/data-source",
        "designer/create/vector",
        "designer/create/maptalks",
      ],
    },
    {
      type: "doc",
      id: "designer/full-demo",
    },
    {
      type: "doc",
      id: "designer/skill-help",
    },
    {
      type: "doc",
      id: "designer/style",
    },
    {
      type: "doc",
      id: "designer/filter",
    },
    {
      type: "doc",
      id: "designer/faq",
    },
    {
      type: "doc",
      id: "designer/mapbox",
    },
  ],
  bds: [
    {
      type: "doc",
      id: "bds/intro",
    },
    {
      type: "doc",
      id: "bds/install",
    },
    {
      type: "doc",
      id: "bds/configuration",
    },
    {
      type: "doc",
      id: "bds/api",
    },
  ],
  api: [
    {
      type: "doc",
      id: "api/intro",
    },
    {
      type: "category",
      label: "矢量数据图层",
      collapsed: false,
      items: [
        "api/vt/intro",
        "api/vt/vector-tile-layer",
        "api/vt/geojson-vector-tile-layer",
        "api/vt/point-layer",
        "api/vt/linestring-layer",
        "api/vt/polygon-layer",
        "api/vt/vector-perf",
        "api/vt/compare",
      ],
    },
    {
      type: "category",
      label: "GLTF图层",
      collapsed: false,
      items: [
        "api/gltf/gltf-layer",
        "api/gltf/gltf-marker",
        "api/gltf/multi-gltf-marker",
      ],
    },
    {
      type: "category",
      label: "3dtiles图层",
      collapsed: false,
      items: ["api/3dtiles/geo-3dtiles-layer"],
    },
    {
      type: "category",
      label: "GL图层",
      collapsed: false,
      items: [
        "api/gl/group-gl-layer",
        "api/gl/viewshed-analysis",
        "api/gl/skyline-analysis",
        "api/gl/flood-analysis",
        "api/gl/analysis",
      ],
    },
  ],
  style: [
    {
      type: "doc",
      id: "style/intro",
    },
    {
      type: "doc",
      id: "style/symbols",
    },
    {
      type: "doc",
      id: "style/material",
    },
    {
      type: "category",
      label: "数据过滤与函数类型",
      collapsed: false,
      items: ["style/filter/feature-filter", "style/filter/function-type"],
    },
    {
      type: "category",
      label: "矢量渲染插件",
      collapsed: false,
      items: [
        "style/plugin-icon",
        "style/plugin-text",
        "style/plugin-line",
        "style/plugin-line-gradient",
        "style/plugin-fill",
        "style/plugin-native-point",
        "style/plugin-native-line",
        "style/plugin-lit",
        "style/plugin-phong",
        "style/plugin-wireframe",
        "style/plugin-gltf-lit",
        "style/plugin-gltf-phong",
        "style/plugin-water",
      ],
    },
  ],
};
