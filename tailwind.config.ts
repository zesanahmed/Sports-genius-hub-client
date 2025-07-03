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
    },
  },
  plugins: [require("daisyui")],
};

export default config;
