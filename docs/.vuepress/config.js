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
          ["/approval-guidelines/", "Approval Guidelines"],
          ["/byte-authoring/", "Byte Authoring Essentials"],
          ["/learning-design-team-workflow/", "Design Team Workflow"],
        ],
      },
    ],
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
