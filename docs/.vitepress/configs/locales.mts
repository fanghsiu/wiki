import { nav, sidebar } from "./index.mts"

export const locales = {
  root: {
    label: '中文简体',
    lang: 'zh',
    link: '/'
  },
  en: {
    label: 'English(No Write)',
    lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
    link: '/en/', // 显示在导航栏翻译菜单上，可以是外部的

    // 其余 locale 特定属性...
    themeConfig: {
      nav: nav.en,
      sidebar: sidebar.en
    }
  }
}
