import { defineConfig } from 'vitepress'
import { nav, sidebar } from './configs/index.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fanghsiu's Wiki",
  description: "Fanghsiu's Wiki",
  head: [['link', { rel: 'icon', href: '/images/logo.svg' }]],
  cleanUrls: true,
  themeConfig: {
    logo: '/images/logo.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: nav.zh,

    sidebar: sidebar.zh,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fanghsiu/wiki' }
    ],

    footer: {
      message: 'MIT Licensed | Powered by <a target="_blank" href="https://vitepress.dev/zh">VitePress</a> | <a target="_blank" href="https://github.com">Github</a>',
      copyright: 'Copyright © Unknow-Unknow',
    },
    editLink: {
      pattern: 'https://github.com/fanghsiu/wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    search: {
      provider: 'local'
    }
  }
})
