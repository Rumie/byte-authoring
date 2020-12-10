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
          ["/training-resources/", "4. Training & Resources"],
          ["/frequentlyAskedQuestions/", "5. Frequently Asked Questions (FAQ)"],
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
      { text: "Rumie", link: "https://learn.rumie.org", target: "_blank" },
      {
        text: "Rumie-Build",
        link: "https://build.rumie.org",
        target: "_blank",
      },
      { text: "Byte Building Checklist", link: "http://r.rumie.org/bytebuilding/rumie-byte-building-checklist.pdf", target: "_blank"},
    ],
  },
};
