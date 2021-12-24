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
      id: "ide/intro",
    },
    {
      type: "doc",
      id: "ide/basic/full-demo",
    },
    {
      type: "category",
      label: "初级教程",
      collapsed: false,
      items: [
        "ide/basic/soft",
        "ide/basic/layer",
        "ide/basic/environment",
        "ide/basic/gltf",
        "ide/basic/size",
        "ide/basic/import-material",
        "ide/basic/pbr",
        "ide/basic/roof-building",
        "ide/basic/shadow-water",
        "ide/basic/bloom-material",
      ],
    },
    {
      type: "category",
      label: "中级教程",
      collapsed: false,
      items: [
        "ide/intermediate/bloom-road",
      ],
    },
    {
      type: "category",
      label: "高级教程",
      collapsed: false,
      items: [
        "ide/advanced/advanced-bloom-road",
      ],
    },
    {
      type: "doc",
      id: "ide/tip",
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
};
