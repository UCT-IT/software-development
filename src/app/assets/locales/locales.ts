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
      aboutUs: {
        titlePartOne: `We are committed to staying at`,
        titlePartTwo: `
      the forefront of technological innovation,
      `,
        titlePartThree: `constantly exploring emerging trends and 
      incorporating the`,
        titlePartFour: ` latest   advancements 
      into our solutions.`,
        aboutButton: "about us",
      },

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
      whoWeAreTwo: {
        subtitle: `Who we are`,
        title: `How we help you`,
        description: `Transparency, reliability, and outstanding customer experiences are at the core of our values. We take pride in fostering strong relationships with our clients, communicating openly at every stage of the development process.`,
        btnText: `View More`,
        cards: [
          {
            icon: `/images/home/globe.svg`,
            iconAltText: `Globe Icon`,
            title: `Custom Software Development`,
            description: `Tailor-made software solutions designed to align seamlessly with your unique business needs and drive productivity to new heights.`,
            btnText: `Learn More`,
          },
          {
            icon: `/images/home/lock.svg`,
            iconAltText: `Lock Icon`,
            title: `Cybersecurity
            Solutions`,
            description: `Safeguarding your invaluable digital assets and fortifying your online against the relentless and ever-evolving global landscape of cyber threats.`,
            btnText: `Learn More`,
          },
          {
            icon: `/images/home/pieChart.svg`,
            iconAltText: `pie chart Icon`,
            title: `Data Analytics and
            Insights`,
            description: `Unlocking the power of data to make informed decisions, identify trends, and gain a competitive edge in your industry.`,
            btnText: `Learn More`,
          },
          {
            icon: `/images/home/cloud.svg`,
            iconAltText: `pie chart Icon`,
            title: `Cloud Services and
            Migration`,
            description: `Transitioning your business to the cloud, unlocking scalability, efficiency, and enhanced collaboration across your organization.`,
            btnText: `Learn More`,
          },
        ],
},
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
        serviceButton: { text: "view all", url: "#" },

        company: {
          about: {},
          values: {},
          whyChooseUs: {},
          pricing: {},
        serviceButton: {text: "view all", url: "#"},
},
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
      },
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
        services: {},
        caseStudies: {},
      },
      getInTouch: {
        title: `Let’s build 
        something different`,
        description: `Take the first step towards a brighter future and supercharge your business with cutting-edge technologies, expert 
        guidance, and unparalleled support.`,
        getInTouchButton: {text: "get in touch", url: "#"}
      },
    },
  },
});
