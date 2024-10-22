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
        offwhite: "#fafafa",
        primary: "#73a0e1",
        secondary: "#e3f0ff",
        complement: "#f3e2ca",
        header: "#23313f",
        body: "#4A4A4A"
      },
      fontFamily: {
        title: ['Plus Jakarta Sans', 'sans-serif'], 
        accent: ['Roboto Mono', 'monospace'],
        code: ['Source Code Pro', 'monospace']
      },
      maxWidth: {
        'max': '1300px',
      },
      spacing: {
        'x': '20px', 
      }
    },
  },
};

export default config;
