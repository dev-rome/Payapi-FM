import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSerifDisplay: ["var(--font-dm-serif-display)"],
        publicSans: ["var(--font-public-sans)"],
      },
      colors: {
        // primary colors
        "dark-pink": "#ba4270",
        "water-white": "#fbfcfe",
        // secondary colors
        "san-juan-blue": "#36536b",
        "mirage-blue": "#1b262f",
        "charm-pink": "#da6d97",
        "light-san-juan-blue": "#6c8294",
      },
    },
  },
  plugins: [],
};
export default config;
