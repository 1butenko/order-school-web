import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgorund: "#E6E1D0",
      },
      fontFamily: {
        gotham: ["var(--font-gotham-pro)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;