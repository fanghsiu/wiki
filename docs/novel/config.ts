// @ts-expect-error
import { createRequire } from 'module'
import { defineAdditionalConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineAdditionalConfig({
  title: "FangHsiu's Novel",
  lang: 'zh-Hans',
  description: '由 Vite 和 Vue 驱动的静态站点生成器',
  themeConfig: {
    nav: nav(),

    search: {  provider: "local" /* options: searchOptions() */ },

    sidebar: {
      '/novel/test/': { base: '/novel/test/', items: sidebarNovel() },
      // '/zh/reference/': { base: '/zh/reference/', items: sidebarReference() }
    },

    socialLinks: [],

    editLink: {
      pattern: 'https://github.com/fanghsiu/wiki/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 方脩`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Novel',
      link: '/novel/test/0',
      activeMatch: '/novel/test/'
    },
    // {
    //   text: '参考',
    //   link: '/zh/reference/site-config',
    //   activeMatch: '/zh/reference/'
    // },
    // {
    //   text: pkg.version,
    //   items: [
    //     {
    //       text: '更新日志',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: '参与贡献',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
  ]
}

function sidebarNovel(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '蒋某某的一生',
      // collapsed: false,
      items: [
        { text: '简介', link: '0' },
        { text: '第一章 废物的降生', link: '1' },
        { text: '第二章 莫欺少年穷', link: '2' },
        { text: '第三章 莫欺中年穷', link: '3' },
        { text: '第四章 莫欺老年穷', link: '4' },
        { text: '第五章 孤独的离世', link: '5' },
        { text: '第六章 下一个轮回', link: '6' }
      ]
    },
    // {
    //   text: '写作',
    //   collapsed: false,
    //   items: [
    //     { text: 'Markdown 扩展', link: 'markdown' },
    //     { text: '资源处理', link: 'asset-handling' },
    //     { text: 'frontmatter', link: 'frontmatter' },
    //     { text: '在 Markdown 使用 Vue', link: 'using-vue' },
    //     { text: '国际化', link: 'i18n' }
    //   ]
    // },
    // {
    //   text: '自定义',
    //   collapsed: false,
    //   items: [
    //     { text: '自定义主题', link: 'custom-theme' },
    //     { text: '扩展默认主题', link: 'extending-default-theme' },
    //     { text: '构建时数据加载', link: 'data-loading' },
    //     { text: 'SSR 兼容性', link: 'ssr-compat' },
    //     { text: '连接 CMS', link: 'cms' }
    //   ]
    // },
    // {
    //   text: '实验性功能',
    //   collapsed: false,
    //   items: [
    //     { text: 'MPA 模式', link: 'mpa-mode' },
    //     { text: 'sitemap 生成', link: 'sitemap-generation' }
    //   ]
    // },
    // { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
  ]
}

// function sidebarReference(): DefaultTheme.SidebarItem[] {
//   return [
//     {
//       text: '参考',
//       items: [
//         { text: '站点配置', link: 'site-config' },
//         { text: 'frontmatter 配置', link: 'frontmatter-config' },
//         { text: '运行时 API', link: 'runtime-api' },
//         { text: 'CLI', link: 'cli' },
//         {
//           text: '默认主题',
//           base: '/zh/reference/default-theme-',
//           items: [
//             { text: '概览', link: 'config' },
//             { text: '导航栏', link: 'nav' },
//             { text: '侧边栏', link: 'sidebar' },
//             { text: '主页', link: 'home-page' },
//             { text: '页脚', link: 'footer' },
//             { text: '布局', link: 'layout' },
//             { text: '徽章', link: 'badge' },
//             { text: '团队页', link: 'team-page' },
//             { text: '上下页链接', link: 'prev-next-links' },
//             { text: '编辑链接', link: 'edit-link' },
//             { text: '最后更新时间戳', link: 'last-updated' },
//             { text: '搜索', link: 'search' },
//             { text: 'Carbon Ads', link: 'carbon-ads' }
//           ]
//         }
//       ]
//     }
//   ]
// }

// function searchOptions(): Partial<DefaultTheme.AlgoliaSearchOptions> {
//   return {
//     placeholder: '搜索文档',
//     translations: {
//       button: {
//         buttonText: '搜索文档',
//         buttonAriaLabel: '搜索文档'
//       },
//       modal: {
//         searchBox: {
//           resetButtonTitle: '清除查询条件',
//           resetButtonAriaLabel: '清除查询条件',
//           cancelButtonText: '取消',
//           cancelButtonAriaLabel: '取消'
//         },
//         startScreen: {
//           recentSearchesTitle: '搜索历史',
//           noRecentSearchesText: '没有搜索历史',
//           saveRecentSearchButtonTitle: '保存至搜索历史',
//           removeRecentSearchButtonTitle: '从搜索历史中移除',
//           favoriteSearchesTitle: '收藏',
//           removeFavoriteSearchButtonTitle: '从收藏中移除'
//         },
//         errorScreen: {
//           titleText: '无法获取结果',
//           helpText: '你可能需要检查你的网络连接'
//         },
//         footer: {
//           selectText: '选择',
//           navigateText: '切换',
//           closeText: '关闭',
//           searchByText: '搜索提供者'
//         },
//         noResultsScreen: {
//           noResultsText: '无法找到相关结果',
//           suggestedQueryText: '你可以尝试查询',
//           reportMissingResultsText: '你认为该查询应该有结果？',
//           reportMissingResultsLinkText: '点击反馈'
//         }
//       }
//     }
//   }
// }