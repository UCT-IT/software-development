import LocalizedStrings from "react-localization";

export let strings = new LocalizedStrings({
  en: {
    navbar: {
      logoAltText: "UCTIT BD Official Logo",
      buttonText: "Get in Touch",
      buttonIconAltText: "Right Arrow Sign",
      navs: {
        home: {
          navTitle: "Home",
          url: "/",
        },
        company: {
          navTitle: "Company",
          subNavs: [
            {
              navTitle: "About Us",
              url: "#",
            },
            {
              navTitle: "Our Values",
              url: "#",
            },
            {
              navTitle: "Why Choose Us",
              url: "#",
            },
            {
              navTitle: "Pricing",
              url: "#",
            },
          ],
        },
        services: {
          navTitle: "Services",
          url: "#",
        },
        caseStudies: {
          navTitle: "Case Studies",
          url: "#",
        },
      },
    },
    home: {},
    company: {
      about: {},
      values: {},
      whyChooseUs: {},
      pricing: {},
    },
    services: {},
    caseStudies: {},
  },
});
