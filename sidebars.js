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

  tutorial: [
    {
      type: "category",
      label: "tutorial",
      items: ["tutorial/version", "tutorial/translate"],
    },
  ],
  studio: [
    {
      type: "category",
      label: "初级教程",
      collapsed: false,
      items: ["studio/intro"],
    },
    {
      type: "category",
      label: "中级教程",
      collapsed: false,
      items: [
        "studio/medium/pbr"
      ],
    },
  ],
  designer:    [{
    type: "category",
    label: "designer",
    collapsed: false,
    items: ["designer/index", "designer/intro", "designer/hello"],
  }]
};
