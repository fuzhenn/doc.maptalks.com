      // [可选] 默认为 "src alpha"
      // WebGL的blendEquation的src参数，可选的值有：
      // 0, 1, "src color", "one minus src color", "src alpha", "one minus dst color", "dst alpha",
      // "one minus dst alpha", "constant color", "one minus constant color", "constant alpha",
      // "one minus constant alpha", "src alpha saturate"
      blendSrc: "src alpha",
      // [可选] 默认为 "one minus src alpha"
      // WebGL的blendEquation的dst参数，可选的值有：
      // 0, 1, "src color", "one minus src color", "src alpha", "one minus dst color", "dst alpha",
      // "one minus dst alpha", "constant color", "one minus constant color", "constant alpha",
      // "one minus constant alpha", "src alpha saturate"
      blendDst: "one minus src alpha",
      // [可选] 默认为[0, 1]
      // WebGL深度值范围
      depthRange: [0, 1],
      // 【可选]，默认为null
      // feature-filter类型，符合条件的数据将不被渲染
      excludes: []