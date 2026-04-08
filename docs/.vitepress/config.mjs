import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Asher的知识库",
  description: "记录Asher所学",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '编程', link: '/code/index' },
      { text: '玄学', link: '/daoism/index' },
      { text: '吉他', link: '/guitar/index' },
      { text: '其他', link: '/others/index'}
    ],

    sidebar: {
      '/code/': [
        {
          text: '编程',
          collapsed: false,
          items: [
            { text: '目录', link: '/code/index' },
            {
              text: 'Computer Architecture',
              collapsed: true,
              items: [
                { text: '目录', link: '/code/computer-architecture/index' },
                { text: '基本概念', link: '/code/computer-architecture/basic' },
              ]
            }
          ]
        }
      ],
      '/daoism/': [
        {
          text: '玄学',
          collapsed: false,
          items: [
            { text: '目录', link: '/daoism/index' },
            {
              text: '奇门遁甲',
              collapsed: true,
              items: [
                { text: '目录', link: '/daoism/qimen/index' },
                {
                  text: '案例',
                  collapsed: true,
                  items: [
                    { text: '舅舅问11年佳女健康', link: '/daoism/qimen/examples/jiujiu-question' },
                  ]
                }
              ]
            },
            { text: '六爻', link: '/daoism/liuyao/index' },
          ]
        }
      ],
      '/guitar/': [
        {
          text: '吉他',
          collapsed: false,
          items: [
            { text: '目录', link: '/guitar/index' },
          ]
        }
      ],
      '/others/': [
        {
          text: '其他',
          collapsed: false,
          items: [
            { text: '目录', link: '/others/index' },
          ]
        }
      ],
    },

    search: {
      provider: 'local'
    },
  }
})