module.exports = {
  title: 'Avant Garde',
  tagline: 'A newer, better, console',
  url: 'https://shreyasm-dev.github.io',
  baseUrl: '/avant-garde',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'shreyasm-dev', // Usually your GitHub org/user name.
  projectName: 'avante-garde', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Avant Garde',
      logo: {
        alt: 'Avant Garde Logo',
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
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/shreyasm-dev/avant-garde',
            },
            {
              label: 'NPM',
              href: 'https://npmjs.com/package/avant-garde',
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
