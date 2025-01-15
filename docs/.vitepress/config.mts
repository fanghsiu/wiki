import { defineConfig } from "vitepress"
import { localesConfig } from "./configs/locales.mts"
import { sociaLinksConfig } from "./configs/sociaLinks.mts"

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: "Fanghsiu's Wiki",
  description: "Fanghsiu's Wiki",
  head: [["link", { rel: "icon", href: "/images/logo.svg" }]],
  cleanUrls: true,
  locales: localesConfig,
  themeConfig: {
    logo: "/images/logo.svg",
    // https://vitepress.dev/zh/reference/default-theme-config
    socialLinks: sociaLinksConfig,
    search: { provider: "local" }
  },
  markdown: { math: true },
  vite: { server: { host: "0.0.0.0" } }
})
