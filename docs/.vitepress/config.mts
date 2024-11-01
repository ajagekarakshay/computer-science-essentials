import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Computer Science Essentials",
  description: "Digital garden of concepts in data structures, algorithms, and programming.",
  markdown: {
    math: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Data Structures & Algorithms',
        items: [
          { text: 'Arrays, Stacks, & Queues', link: '/algos/arrays' },
          { text: 'Linked Lists', link: '/algos/linked-lists' },


          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ajagekarakshay/computer-science-essentials' }
    ]
  }
})
