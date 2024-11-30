import { nav, sidebar } from "./index.mts"

export const locales = {
  root: {
    label: '中文简体',
    lang: 'zh',
    link: '/',
    themeConfig: {
      nav: nav.zh,
      sidebar: sidebar.zh,
      footer: {
        message: '基于 MIT 许可发布',
        copyright: '版权所有 © 方脩',
      },
      editLink: {
        pattern: 'https://github.com/fanghsiu/wiki/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页面'
      },
      docFooter: {
        prev: '上一页',
        next: '下一页'
      }
    }
  },
}
