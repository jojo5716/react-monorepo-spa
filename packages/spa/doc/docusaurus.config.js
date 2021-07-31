module.exports = {
    title: 'Documentación de SPA',
    tagline: 'Documentación técnica sobre la estructura del proyecto',
    url: 'https://bitbucket.org/i2tic/monorepo-boilerplate/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'I2TIC',
    projectName: 'react-spa',
    themeConfig: {
        navbar: {
            title: ' - ',
            logo: {
                alt: 'app',
                src: 'img/logo.png',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    href: 'https://bitbucket.org/i2tic/monorepo-boilerplate/',
                    label: 'Repository',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Enlaces externos',
                    items: [
                        {
                            label: 'Repositorio',
                            to: 'https://bitbucket.org/i2tic/monorepo-boilerplate/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} React SPA.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    homePageId: 'index',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://bitbucket.org/i2tic/monorepo-boilerplate/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
