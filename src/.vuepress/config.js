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
        yuu: {
            defaultDarkTheme: true,
            defaultColorTheme: 'blue',
            disableThemeIgnore: true,
            colorThemes: ['blue'],
            labels: {
                darkTheme: 'Dark Mode'
            }
        },
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: true,
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
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: true,
                    children: [
                        '/',
                    ]
                }
            ],
        }
    },

    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
