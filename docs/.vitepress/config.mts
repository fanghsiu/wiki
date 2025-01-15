import { defineConfig } from 'vitepress'
import { localesConfig } from './configs/locales.mts'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: "Fanghsiu's Wiki",
  description: "Fanghsiu's Wiki",
  head: [['link', { rel: 'icon', href: '/images/logo.svg' }]],
  cleanUrls: true,
  locales: localesConfig,
  themeConfig: {
    logo: '/images/logo.svg',
    // https://vitepress.dev/zh/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fanghsiu/wiki' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/424096741' }
    ],
    search: {
      provider: 'local'
    }
  },
  markdown: {
    math: true,
  },
  vite: {
    server: {
      host: '0.0.0.0'
    }
  }
})
