import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#73a0e1",
        secondary: "#e3f0ff",
        accent: "#e2b474",
        text: "#21262B"
      },
      fontFamily: {
        title: ['Nunito', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        header: ['Montserrat', 'sans-serif'], // Added Montserrat
        code: ['Source Code Pro', 'monospace'], // Added Source Code Pro
      },
      maxWidth: {
        'max': '1300px',
      },
    },
  },
};

export default config;
