import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "whoWeAre-image": "url('/images/home/whoWeAre/whoWeAre.webp')",
        "whoWeAre-gradient":
          "radial-gradient(circle, rgba(128, 0, 255, .4), #fff)",
      },
      colors: {
        primary: "#8000ff",
        secondary: "#180030",
        textColor: "#7987a1",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        customSpin: "spin 7s linear infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
