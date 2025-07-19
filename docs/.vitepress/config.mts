import { defineConfig } from "vitepress"
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
// Custom Configuration
import navConfig from "./configs/nav.mts"
import sidebarConfig from "./configs/sidebar.mts"
import sociaLinksConfig from "./configs/sociaLinks.mts"

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: "FangHsiu's Wiki",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/images/logo.svg" }]],
  lang: "zh-CN",
  cleanUrls: true,
  lastUpdated: true,
  // https://vitepress.dev/zh/reference/default-theme-config
  themeConfig: {
    logo: "/images/logo.svg",

    nav: navConfig,

    sidebar: sidebarConfig,

    outline: { label: "页面导航", level: "deep" },

    socialLinks: sociaLinksConfig,

    footer: {
      message: "基于 MIT 许可发布",
      copyright: "版权所有 © 方脩"
    },

    editLink: {
      pattern: "https://github.com/fanghsiu/wiki/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面"
    },

    lastUpdated: { text: "最后更新于" },

    docFooter: { prev: "上一页", next: "下一页" },

    search: { provider: "local" }
  },
  markdown: {
    math: true,
    config(md) {
      md.use(groupIconMdPlugin)
    }
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          anaconda: "devicon:anaconda",
          bash: "devicon:bash"
        }
      })
    ]
  }
})
