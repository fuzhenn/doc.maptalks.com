/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MapTalks Doc',
  tagline: 'MapTalks are cool',
  url: 'http://doc.maptalks.com',
  trailingSlash: true,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'maptalks', // Usually your GitHub org/user name.
  projectName: 'doc.maptalks.com', // Usually your repo name.
  themeConfig: {
    prism: {
      defaultLanguage: 'javascript',
      /*theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/vsDark')*/
      themes: ['classic']
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
    navbar: {
      title: 'MapTalks Doc',
      logo: {
        alt: 'MapTalks Doc',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/docs/ide/guide/intro', activeBasePath: '/docs/ide', label: 'IDE手册', position: 'left'},
        {to: '/docs/design-guide/intro', activeBasePath: '/docs/design-guide', label: 'IDE设计指南', position: 'left'},
        {to: '/docs/designer/intro', activeBasePath: '/docs/designer', label: 'Designer手册', position: 'left'},
        {to: '/docs/api/intro/', activeBasePath: '/docs/api', label: 'SDK', position: 'left'},
        {to: '/docs/style/intro', activeBasePath: '/docs/style', label: '样式手册', position: 'left'},
        {to: '/docs/download/', activeBasePath: '/docs/download', label: '产品下载', position: 'left'},
        {to: '/docs/plan', activeBasePath: '/docs/plan', label: '开发计划', position: 'left'},
        // {to: '/docs/bds/intro', activeBasePath: '/docs/bds', label: '服务端软件文档', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
      ],
    },
    footer: {
      copyright: `2022&ensp;&copy;&ensp;maptalks.com&ensp;版权所有&ensp;&ensp;&ensp;&ensp;鄂ICP备2020021619号`, // You can also put own HTML here
    },
  },
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn',"en"],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editLocalizedFiles: true,
          editUrl:
            'https://github.com/maptalks/doc.maptalks.com/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-EMPT1PBFDK'
      },
    ]
  ]
};