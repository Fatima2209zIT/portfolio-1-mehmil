import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",   // Refers to a CSS variable for background color
        foreground: "var(--foreground)",   // Refers to a CSS variable for foreground color
      },
    },
  },
  plugins: [],
};

export default config;


