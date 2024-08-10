import { defineConfig } from 'vitepress'
import { locales, nav, sidebar } from './configs/index.mts'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: "Fanghsiu's Wiki",
  description: "Fanghsiu's Wiki",
  head: [['link', { rel: 'icon', href: '/images/logo.svg' }]],
  cleanUrls: true,
  locales: locales.locales,
  themeConfig: {
    logo: '/images/logo.svg',
    // https://vitepress.dev/zh/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fanghsiu/wiki' }
    ],
    search: {
      provider: 'local'
    }
  },
  vite: {
    server: {
      host: '0.0.0.0'
    }
  }
})
