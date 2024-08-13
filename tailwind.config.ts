import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "theme-dark": "#000000",
        "theme-white": "#FFFFFF",
        "black-new": "#25262B",
        "header": "#25262B",
        "footer-new": "#5C5F66",
        "footer-color": "#121212",
        "body-font": "#CCCCCC",
        "body-bg": "#121214",
        "body-border": "#343A40",
        "dark-sidebar": "#101113",
        "sidebar2": "#AEAEAE",
        "light-border": "#E0E0E0",
        "dark-border": "#33383F",
        "light-bg": "#ECEFF3",
        "dark-bg": "#23272C",
        "text-light": "#637381",
        "text-dark": "#B9B9B9",
        "icon-yellow": "#FFD700", // For the yellow color used in icons
      },
    },
  },
  plugins: [],
};

export default config;
