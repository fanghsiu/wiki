import { defineConfig } from "vitepress"
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
  appearance: "dark",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
    logo: "/images/logo.svg",

    nav: navConfig,

    sidebar: sidebarConfig,

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
  markdown: { math: true }
})
