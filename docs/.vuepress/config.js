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
          ["/approval-guidelines/", "1. Approval Guidelines"],
          ["/byte-authoring/", "2. Byte Authoring Essentials"],
          ["/learning-design-team-workflow/", "3. Design Team Workflow"],
        ],
      },
    ],

    algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>'
    },

    nav: [
      { text: 'Guide', link: '/guide/', target: "_blank" },
      { text: 'Product-Specification-Sheet', link: '/productSpecs/', target: "_blank" },
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
