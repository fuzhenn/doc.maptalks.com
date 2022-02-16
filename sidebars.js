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
      type: "doc",
      id: "ide/guide/ui",
    },
    {
      type: "category",
      label: "入门指南",
      collapsed: false,
      items: [
        "ide/guide/tutorial/create",
        
      ],
    },
    {
      type: "category",
      label: "基础知识",
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'GIS知识入门',
          href: 'https://mp.weixin.qq.com/s/UkQvMFEWyHDbsmh7LDWU7A',
        },
        "ide/guide/basic/vt",
        "ide/guide/basic/gltf",
        
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
      items: [
        "ide/guide/publish/publish",
        "ide/guide/publish/iis"
      ],
    },
    {
      type: "category",
      label: "程序加载",
      collapsed: false,
      items: [
        "ide/guide/useInProgram/intro",
        "ide/guide/useInProgram/path",
        {
          type: 'link',
          label: 'MSDJSONLoader接口',
          href: 'https://github.com/maptalks/MSDJSONLoader',
        },
        {
          type: 'link',
          label: '程序加载示例',
          href: 'https://github.com/maptalks/MSDJSONLoader',
        },
      ],
    },
    {
      type: "category",
      label: "性能优化",
      collapsed: false,
      items: [
        "ide/guide/performance/resource",
      ],
    },
    {
      type: "category",
      label: "崩溃处理",
      collapsed: false,
      items: [
        "ide/guide/crash/crashRecovery",
        "ide/guide/crash/autosave",
        "ide/guide/crash/log",
        "ide/guide/crash/report"
      ],
    },
  ],
  designer: [
    {
      type: "doc",
      id: "designer/intro"
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
  ],
  bds: [
    {
      type: "doc",
      id: "bds/intro"
    },
    {
      type: "doc",
      id: "bds/install"
    },
    {
      type: "doc",
      id: "bds/configuration"
    },
    {
      type: "doc",
      id: "bds/api"
    },
  ],
  api: [
    {
      type: "doc",
      id: "api/intro"
    },
    {
      type: "category",
      label: "矢量瓦片图层",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api/vt/vector-tile-layer"
        },
        {
          type: "doc",
          id: "api/vt/geojson-vector-tile-layer"
        },
        {
          type: "doc",
          id: "api/vt/point-layer"
        },
        {
          type: "doc",
          id: "api/vt/linestring-layer"
        },
        {
          type: "doc",
          id: "api/vt/polygon-layer"
        },
      ]
    },
    {
      type: "category",
      label: "GLTF图层",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api/gltf/gltf-layer"
        },
        {
          type: "doc",
          id: "api/gltf/gltf-marker"
        },
        {
          type: "doc",
          id: "api/gltf/multi-gltf-marker"
        }
      ]
    },
    {
      type: "category",
      label: "3dtiles图层",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api/3dtiles/geo-3dtiles-layer"
        }
      ]
    },
    {
      type: "category",
      label: "GL图层",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api/gl/group-gl-layer"
        }
      ]
    }
  ]
};