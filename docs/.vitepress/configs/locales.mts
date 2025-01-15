import { navConfig } from "./nav.mts"
import { sidebarConfig } from "./sidebar.mts"

export const localesConfig = {
  root: {
    label: '中文简体',
    lang: 'zh',
    link: '/',
    themeConfig: {
      nav: navConfig,
      sidebar: sidebarConfig,
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
