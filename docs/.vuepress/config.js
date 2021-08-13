module.exports = {
  lang: 'zh-CN',
  title: 'b-element-plus-ui ！',
  description: '基于element-plus的业务组件库',
  base: "/b-element-plus-ui-doc/",
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [ // 配置顶部导航栏
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/comps/'
      }
    ],
    sidebar: { // 配置侧边栏部分
      '/comps/': ['/comps/', '/comps/select.md']
    }
  },
}