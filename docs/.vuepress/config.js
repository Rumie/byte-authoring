module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "Byte Authoring",
      description:
        "",
    },
  },
  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: '',
    sidebar: [
      {
        title: "Main",
        collapsable: false,
        children: [
          ["/byte-authoring/", "1. Byte Authoring Essentials"],
          ["/learning-design-team-workflow/", "2. Learning Design Team Workflow"],
          ["/approval-guidelines/", "3. Approval Guidelines"], 
          ["/frequentlyAskedQuestions/", "Frequentyly Asked Questions (FAQ)"],
        ],
      },
    ],

    algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>'
    },

    nav: [
      { text: 'Guide', link: '/guide/'},
      { text: 'Product-Specification-Sheet', link: '/productSpecs/' },
      { text: "Rumie", link: "https://rumie.org", target: "_blank" },
      {
        text: "Rumie-Build",
        link: "https://build.rumie.org",
        target: "_blank",
      },
      {
        text: "Rumie-Learn",
        link: "https://learn.rumie.org",
        target: "_blank",
      },
    ],
  },
};
