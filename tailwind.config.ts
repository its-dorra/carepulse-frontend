import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "linear-gradient(to bottom, #82DBF7, #B6F09C)",
      },
      colors: {
        background: "#131619",
        foreground: "#1A1D21",
        primaryGreen: "#24AE7C",
        "n-1": "#76828D",
      },
    },
  },
  plugins: [],
};
export default config;
