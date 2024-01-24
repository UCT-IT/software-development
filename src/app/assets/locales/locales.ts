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
      whoWeAreOne: {
        subTitle: `Who we are`,
        title: `We are more
        than just a
        company`,
        description: `We are architects of innovation, trailblazers of technological advancement, and partners
        in your success. As a dynamic and forward-thinking organization, we are dedicated to
        reshaping industries and empowering businesses to navigate the digital age with
        confidence.`,
        btnText: `Learn More`,
        experience: {
          years: `12+`,
          text: `Years of experience in
          software development`,
        },
        awards: {
          number: `50`,
          text: `Winning awards as one of the top
          world company`,
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
