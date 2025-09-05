// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Barlow Condensed"', "sans-serif"], // default
        barlow: ['"Barlow Condensed"', "sans-serif"], // optional
      },
      colors: {
        primary: {
          DEFAULT: "rgb(175,214,57)",
          dark: "rgb(146,181,41)",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
