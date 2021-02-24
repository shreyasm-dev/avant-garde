module.exports = {
  title: 'Avant-garde',
  tagline: 'A better, newer, console',
  url: 'https://shreyasm-dev.github.io/avant-garde',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'shreyasm-dev', // Usually your GitHub org/user name.
  projectName: 'avant-garde', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Avant-garde',
      logo: {
        alt: 'Avant-garde Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/shreyasm-dev/avant-garde',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/shreyasm-dev/avant-garde',
            },
            {
              label: 'NPM',
              href: 'https://www.npmjs.com/package/avant-garde',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} shreyasm-dev. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/shreyasm-dev/avant-garde/edit/master/docusaurus/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
