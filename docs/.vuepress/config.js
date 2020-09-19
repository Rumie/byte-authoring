module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "Byte Authoring",
      description:
        "Rumie is offering a wiki based intranet for Byte Authoring.",
    },
  },
  themeConfig: {
    logo: "",
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
