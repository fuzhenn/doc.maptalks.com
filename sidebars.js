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

  studio: [
    {
      type: "doc",
      id: "studio/intro",
    },
    {
      type: "doc",
      id: "studio/basic/full-demo",
    },
    {
      type: "category",
      label: "初级教程",
      collapsed: false,
      items: [
        "studio/basic/soft",
        "studio/basic/layer",
        "studio/basic/environment",
        "studio/basic/gltf",
        "studio/basic/size",
        "studio/basic/import-material",
        "studio/basic/pbr",
        "studio/basic/roof-building",
        "studio/basic/shadow-water",
        "studio/basic/bloom-material",
      ],
    },
    {
      type: "category",
      label: "中级教程",
      collapsed: false,
      items: [
        "studio/intermediate/bloom-road",
      ],
    },
    {
      type: "category",
      label: "高级教程",
      collapsed: false,
      items: [
        "studio/advanced/advanced-bloom-road",
      ],
    },
    {
      type: "doc",
      id: "studio/tip",
    },
  ],
  designer: [
    {
      type: "doc",
      id: "designer/intro"
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
};
