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
      aboutUs: {
        titlePartOne: `We are committed to staying at`,
        titlePartTwo: `
        the forefront of technological innovation,
        `,
        titlePartThree: `constantly exploring emerging trends and 
        incorporating the`,
        titlePartFour: ` latest   advancements 
        into our solutions.`,
        aboutButton: "about us"
      hero: {
        title: {
          text1: "Unlock Your",
          text2: "Digital Potential",
        },
        description: `Your one-stop digital software solutions company. At Tech, we thrive
         on transforming your ideas into cutting-edge digital realities.`,
        buttons: {
          startProject: "start a project",
          work: "out work",
        },
        altText: {
          logo: "UCTIT BD Official Log",
          gallry: "gallery",
        },
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
