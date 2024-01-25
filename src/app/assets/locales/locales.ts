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
    home: {
      services: {
        heading: "Variety solution for IT services",
        contents: [
          {
            title: { text: "Website Maintenance", url: "#" },
            description: `Involves the ongoing management and updates required to keep
            a website functioning smoothly.`,
          },
          {
            title: { text: "IT Consultancy", url: "#" },
            description: `Involves a systematic process of evaluating software applications 
            or systems to identify and fix issues.`,
          },
          {
            title: { text: "Q&A Testing", url: "#" },
            description: `Involves a systematic process of evaluating software applications 
            or systems to identify and fix issues.`,
          },
          {
            title: { text: "Account & Security", url: "#" },
            description: `Focus on safeguarding digital assets, sensitive information, and
            user accounts from unauthorized access and cyber threats.`,
          },
        ],
        serviceButton: {text: "view all", url: "#"},
      },
    },
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
