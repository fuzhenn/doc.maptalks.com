/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Maptalks Doc',
  tagline: 'Maptalks are cool',
  url: 'http://doc.maptalks.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'maptalks', // Usually your GitHub org/user name.
  projectName: 'doc.maptalks.com', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      title: 'maptalks doc',
      logo: {
        alt: 'maptalks doc',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/docs/studio/intro', activeBasePath: '/docs/studio', label: 'Studio', position: 'left'},
      ],
    },
    footer: {
      copyright: `2020&ensp;&copy;&ensp;MapTalks&ensp;3D.com版权所有&ensp;&ensp;&ensp;&ensp;鄂ICP备14002653号-6&ensp;&ensp;&ensp;&ensp;鄂公网安备&ensp;35020302033941号`, // You can also put own HTML here
    },
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: 'YOUR_APP_ID',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
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
          editUrl:
            'https://github.com/fuzhenn/com.maptalks.com/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
