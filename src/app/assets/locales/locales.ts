import LocalizedStrings from "react-localization";

export let strings = new LocalizedStrings({
  en: {
    home: {
      hero: {
        title: {
          text1: "Unlock Your",
          text2: "Digital Potential",
        },
        description: `Your one-stop digital software solutions company. At Tech, we thrive
         on transforming your ideas into cutting-edge digital realities.`,
         buttons:{
          button1: "start a project",
          button2: "out work"
         },
         altText: {
          logo: "hero icon",
          gallry: "gallery image"
         }
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
