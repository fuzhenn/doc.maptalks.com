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
      collapsed: false,
      items: [
        "ide/guide/basic/vt",
        "ide/guide/basic/gltf",
        
      ],
    },
    {
      type: "doc",
      id: "ide/guide/formats",
    },
    {
      type: "category",
      label: "程序加载",
      collapsed: false,
      items: [
        "ide/guide/useInProgram/intro",
        "ide/guide/useInProgram/path"
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
    // {
    //   type: "doc",
    //   id: "ide/basic/full-demo",
    // },
    // {
    //   type: "doc",
    //   id: "ide/basic/size",
    // },
    // {
    //   type: "category",
    //   label: "概览",
    //   collapsed: false,
    //   items: [
    //     "ide/basic/soft",
    //     "ide/basic/layer",
    //     "ide/basic/coord",
    //     "ide/basic/mode",
    //     "ide/basic/data-properties",
    //     "ide/basic/environment",
    //     "ide/basic/post-processing",
    //     "ide/basic/gltf",
    //     "ide/basic/pbr",
    //     "ide/basic/material",
    //     "ide/basic/animation",
    //     "ide/basic/mime",
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "初级教程",
    //   collapsed: false,
    //   items: [
    //     "ide/basic/roof-building",
    //     "ide/basic/shadow-water",
    //     "ide/basic/bloom-material",
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "中级教程",
    //   collapsed: false,
    //   items: [
    //     "ide/intermediate/bloom-road",
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "高级教程",
    //   collapsed: false,
    //   items: [
    //     "ide/advanced/advanced-bloom-road",
    //   ],
    // },
    // {
    //   type: "category",
    //   label: "数据",
    //   collapsed: false,
    //   items: [
    //     "ide/data/geojson",
    //   ],
    // },
    // {
    //   type: "doc",
    //   id: "ide/tip",
    // },
    // {
    //   type: "doc",
    //   id: "ide/faq",
    // },
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
};
