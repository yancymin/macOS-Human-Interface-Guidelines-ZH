module.exports = {
  title: ' Human Interface Guidelines',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: 'macOS',
        collapsable: true,
        children: [
          ['/1-macOS/Themes', 'Themes'],
          ['/1-macOS/VisualIndex', 'Visual Index']
        ]
      },
      {
        title: 'App Architecture',
        children: [
          ['/2-App Architecture/Full-ScreenMode', 'Full-Screen Mode'],
          ['/2-App Architecture/Loading', 'Loading'],
          ['/2-App Architecture/Modality', 'Modality'],
        ]
      }
    ],
    nav: [
      {
        text: '英文文档',
        link:
          'https://developer.apple.com/design/human-interface-guidelines/macos'
      }
    ],
    lastUpdated: 'Last Updated', // string | boolean
    displayAllHeaders: true,

    /***********git************/

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/yancymin/macOS-Human-Interface-Guidelines-CN',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '改善此页面'
  }
}
