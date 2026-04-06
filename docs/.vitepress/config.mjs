import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/knowlege-base/',
  title: "Asher的知识库",
  description: "记录Asher所学",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '编程', link: '/code/index' },
      { text: '读书笔记', link: '/books/index' },
      { text: '其他', link: '/others/index' },
    ],

    sidebar: {
      '/code/': [
        {
          text: '编程',
          collapsed: false,
          items: [
            { text: '目录', link: '/code/index' },
            { text: 'JavaScript', link: '/code/javascript' },
            { text: 'Python', link: '/code/python' },
          ]
        }
      ],
      '/books/': [
        {
          text: '读书笔记',
          collapsed: false,
          items: [
            { text: '目录', link: '/books/index' },
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