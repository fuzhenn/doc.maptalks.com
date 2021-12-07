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
      disableSwitch: false,
    },
    navbar: {
      title: 'maptalks doc',
      logo: {
        alt: 'maptalks doc',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/docs/studio/intro', activeBasePath: '/docs/studio', label: 'Studio', position: 'left'},
        {to: '/docs/designer/intro', activeBasePath: '/docs/designer', label: 'Designer', position: 'left'},
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
};
