import { defineConfig, type DefaultTheme } from 'vitepress'

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
      { text: 'Data Structures & Algorithms', link: '/dsa/dstruct/arrays' },
      { text: 'Programming', link: '/programming/programming' }
    ],

    sidebar: {
      '/dsa/': { base: '/dsa/', items: sidebarDSA() },
      '/programming/': { base: '/programming/', items: sidebarProgramming() },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ajagekarakshay/computer-science-essentials' }
    ]
  }
})

function sidebarDSA(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Data Structures',
      collapsed: false,
      items: [
        { text: 'Arrays', link: 'dstruct/arrays' },
        { text: 'Linked Lists', link: 'dstruct/linked-lists' },
      ]
    },
    {
      text: 'Algorithms',
      collapsed: true,
      items: [

      ]
    },
    {
      text: 'Leetcode Problems',
      collapsed: false,
      items: [

      ]
    },
  ]
}

function sidebarProgramming(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Data Structures',
      collapsed: false,
      items: [
        { text: 'Arrays', link: 'dstruct/arrays' },
        { text: 'Linked Lists', link: 'dstruct/linked-lists' },
      ]
    },
    {
      text: 'Algorithms',
      collapsed: true,
      items: [

      ]
    },
    {
      text: 'Leetcode Problems',
      collapsed: false,
      items: [

      ]
    },
  ]
}