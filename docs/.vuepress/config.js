module.exports = {
    // Global Variables + Edits
    // Make sure that base + repo are in correct cheatsheet
    base: '/spss/',

    repo: 'Kuma-Cheatsheet/spss',
    repoLabel: 'Repository',
    editLinks: true,
    editLinkText: 'Help us improve this page!',

    // Official : https://vuepress.vuejs.org/config/#head
    head: [
        ['link', { rel: 'icon', href: 'https://avatars1.githubusercontent.com/u/44744915' }]
    ],

    // Official : https://vuepress.vuejs.org/config/#markdown
    markdown: {
        lineNumbers: 'True',
    },

    // https://vuepress.vuejs.org/plugin/
    plugins: [
        // Official : https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#install
        ['@vuepress/pwa'],

        // Official : https://vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html
        ['@vuepress/medium-zoom'],

        // Official : https://vuepress.vuejs.org/plugin/official/plugin-back-to-top.html
        ['@vuepress/back-to-top'],

        // Official : https://vuepress.vuejs.org/plugin/official/plugin-blog.html
        ['@vuepress/blog'],
    ],

    // Editing header for each language
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Kuma Cheatsheet',
            description: 'Cheatsheet for all',
        },
        '/th/': {
            lang: 'th-TH',
            title: 'Kuma Cheatsheet',
            description: 'ชีทสรุปสำหรับทุกคน',
        },
    },

    // Editing themes
    // Official : https://vuepress.vuejs.org/theme/default-theme-config.html
    themeConfig: {
        // Supports of mulitple languages
        // https://vuepress.vuejs.org/guide/i18n.html#default-theme-i18n-config
        locales: {

            // [Default] English Language
            '/': {
                selectText: 'Languages',
                label: 'English',

                // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#last-updated
                lastUpdated: 'Last update',

                // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#service-worker
                serviceWorker: {
                    // When there is website version, notify user
                    updatePopup: {
                        // Official : https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#options
                        message: "New update of this website is available",
                        buttonText: "Reload",
                    }
                },

                nav: [
                    { text: 'Home', link: '/' },
                    {
                        text: 'Other Cheatsheet', items: [
                            {
                                text: 'Languages', items: [
                                    { text: 'Python', link: 'http://kuma-cheatsheet.github.io/python' },
                                    { text: 'SQL', link: 'http://kuma-cheatsheet.github.io/sql' },
                                ]
                            },
                            {
                                text: 'Tools', items: [
                                    { text: 'SPSS', link: 'http://kuma-cheatsheet.github.io/spss' },
                                    { text: 'Git', link: 'http://kuma-cheatsheet.github.io/git' },
                                ]
                            },
                            {
                                text: 'Diagrams & Algorithms', items: [
                                    { text: 'Class Diagram (UML)', link: 'http://kuma-cheatsheet.github.io/class-diagram' },
                                ]
                            },
                            {
                                text: 'Others', items: [
                                    { text: 'See all', link: 'https://github.com/Kuma-Cheatsheet' },
                                ]
                            }
                        ]
                    },
                    {
                        text: 'Contribute & Others', items: [
                            {
                                text: 'Contribute', items: [
                                    { text: 'Contribute to Cheatsheet', link: 'https://github.com/Kuma-Cheatsheet/core/' },
                                    { text: 'Contribution Guidelines', link: 'https://kuma-cheatsheet.github.io/Guidelines/' },
                                ]
                            },
                            {
                                text: 'Others', items: [
                                    { text: 'Legal Terms', link: 'https://github.com/Kuma-Cheatsheet/core/blob/master/LICENSE.md' },
                                    { text: 'Changelog', link: 'https://github.com/Kuma-Cheatsheet/core/commits/master' },
                                    { text: 'List of Contributor', link: 'https://github.com/Kuma-Cheatsheet/core/pulse' },
                                    { text: 'Development Milestones', link: 'https://github.com/Kuma-Cheatsheet/core/releases' },
                                ]
                            },
                        ]
                    },
                ],

                sidebar: [
                    // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
                    {
                        title: 'Data Preparation',
                        collapsable: false,
                        children: [
                            '/Data/DataCleansing/',
                            '/Data/DataTransformation/'
                        ]
                    },
                    {
                        title: 'Test Assumption',
                        collapsable: false,
                        children: [
                            '/AssumptionTest/'
                        ]
                    },
                    {
                        title: 'Create Model',
                        collapsable: false,
                        children: [
                            '/Model/TwoWayANOVA/',
                            '/Model/LinearRegression/',
                            '/Model/MultipleLinearRegression/',
                            '/Model/LogisticsRegression/',
                            '/Model/TimeSeries/'
                        ]
                    },
                ],
            },

            // Thai Language
            '/th/': {
                selectText: 'ภาษา',
                label: 'ภาษาไทย',

                // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#last-updated
                lastUpdated: 'อับเดทล่าสุด',

                // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#service-worker
                serviceWorker: {
                    // When there is website version, notify user
                    updatePopup: {
                        // Official : https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#options
                        message: "New update of this website is available",
                        buttonText: "OK",
                    }
                },

                nav: [
                    { text: 'หน้าแรก', link: '/' },
                    {
                        text: 'ชีทสรุปอื่นๆ', items: [
                            {
                                text: 'Languages', items: [
                                    { text: 'Python', link: 'http://kuma-cheatsheet.github.io/python' },
                                    { text: 'SQL', link: 'http://kuma-cheatsheet.github.io/sql' },
                                ]
                            },
                            {
                                text: 'Tools', items: [
                                    { text: 'SPSS', link: 'http://kuma-cheatsheet.github.io/spss' },
                                    { text: 'Git', link: 'http://kuma-cheatsheet.github.io/git' },
                                ]
                            },
                            {
                                text: 'Diagrams & Algorithms', items: [
                                    { text: 'Class Diagram (UML)', link: 'http://kuma-cheatsheet.github.io/class-diagram' },
                                ]
                            },
                            {
                                text: 'Others', items: [
                                    { text: 'See all', link: 'https://github.com/Kuma-Cheatsheet' },
                                ]
                            }
                        ]
                    },
                    {
                        text: 'การช่วยเหลือ', items: [
                            {
                                text: 'พัฒนาชีทสรุป', items: [
                                    { text: 'ผ่าน GitHub', link: 'https://github.com/Kuma-Cheatsheet/core/' },
                                    { text: 'วิธีการช่วยพัฒนา', link: 'https://kuma-cheatsheet.github.io/Guidelines/' },
                                ]
                            },
                            {
                                text: 'อื่นๆ', items: [
                                    { text: 'ข้อมูลทางกฎหมาย', link: 'https://github.com/Kuma-Cheatsheet/core/blob/master/LICENSE.md' },
                                    { text: 'ข้อมูลการเปลี่ยนแปลง', link: 'https://github.com/Kuma-Cheatsheet/core/commits/master' },
                                    { text: 'รายชื่อผู้พัฒนา', link: 'https://github.com/Kuma-Cheatsheet/core/pulse' },
                                    { text: 'เป้าหมายของการพัฒนา', link: 'https://github.com/Kuma-Cheatsheet/core/releases' },
                                ]
                            },
                        ]
                    },
                ],

                sidebar: [
                    // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
                    {
                        title: 'Data Preparation',
                        collapsable: false,
                        children: [
                            '/Data/DataCleansing/',
                            '/Data/DataTransformation/'
                        ]
                    },
                    {
                        title: 'Test Assumption',
                        collapsable: false,
                        children: [
                            '/AssumptionTest/'
                        ]
                    },
                    {
                        title: 'Create Model',
                        collapsable: false,
                        children: [
                            '/Model/TwoWayANOVA/',
                            '/Model/LinearRegression/',
                            '/Model/MultipleLinearRegression/',
                            '/Model/LogisticsRegression/',
                            '/Model/TimeSeries/'
                        ]
                    },
                ],
            },
        },
    },
}
