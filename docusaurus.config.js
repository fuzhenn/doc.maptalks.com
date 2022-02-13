/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MapTalks Doc',
  tagline: 'MapTalks are cool',
  url: 'http://doc.maptalks.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'maptalks', // Usually your GitHub org/user name.
  projectName: 'doc.maptalks.com', // Usually your repo name.
  themeConfig: {
    prism: {
      defaultLanguage: 'javascript',
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/vsDark')
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
        {to: '/docs/ide/guide/intro', activeBasePath: '/docs/ide', label: 'IDE', position: 'left'},
        {to: '/docs/design-guide/intro', activeBasePath: '/docs/design-guide', label: '设计指南', position: 'left'},
        {to: '/docs/designer/intro', activeBasePath: '/docs/designer', label: 'Designer', position: 'left'},
        {to: '/docs/bds/intro', activeBasePath: '/docs/bds', label: 'BDS', position: 'left'},
        {to: '/docs/api/intro', activeBasePath: '/docs/api', label: 'API', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
      ],
    },
    footer: {
      copyright: `2020&ensp;&copy;&ensp;MapTalks&ensp;3D.com版权所有&ensp;&ensp;&ensp;&ensp;鄂ICP备14002653号-6&ensp;&ensp;&ensp;&ensp;鄂公网安备&ensp;35020302033941号`, // You can also put own HTML here
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
            'https://github.com/fuzhenn/doc.maptalks.com/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-includes',
      {
        sharedFolders: [
          { source: '../../_shared', target: '../docs/shared'},
        ],

        postBuildDeletedFolders: ['shared'],

        replacements: [
          { key: '{ProductName}', value: 'My long product name for XYZ' },
          { key: '{ShortName}', value: 'XYZ' },
        ],

        embeds: [
          {
            key: 'myAwesomePlugin',
            embedFunction: function(code) {
              return `...`;
            }
          }
        ],
        injectedHtmlTags: {
          preBodyTags: [`<link rel="stylesheet" href="https://cdn.example.com/style.css" type="text/css">`]
        }
      },
    ],
  ]
};