const {description} = require('../../package')

module.exports = {
    title: 'ModularKit Documentation',
    description: description,
    head: [
        ['meta', {name: 'theme-color', content: '#2196f3'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],
    theme: 'yuu',
    themeConfig: {
        sidebar: 'auto',
        smoothScroll: true,
        displayAllHeaders: true,
        searchPlaceholder: 'Search...',
        lastUpdated: true,
        yuu: {
            defaultDarkTheme: true,
            defaultColorTheme: 'blue',
            disableThemeIgnore: true,
            colorThemes: ['blue'],
            labels: {
                darkTheme: 'Dark Mode'
            }
        },
        nav: [
            {
                text: 'Guide',
                link: '/guide/',
            },
            {
                text: 'API',
                link: '/API/'
            },
            {
                text: 'Github',
                link: 'https://github.com/NukaWorks/ModularKit'
            }
        ],
        sidebarDepth: 2,
        sidebar: {
            '/guide/': [
                {
                    title: 'intro',
                    path: '/',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: ['/']
                },
                {
                    title: 'Advanced',
                    children: ['/external-modules'],
                    initialOpenGroupIndex: -1
                }
            ]
        }
    },

    plugins: ['@vuepress/plugin-back-to-top']
}
