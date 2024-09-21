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
        header: "#2C3E50",
        body: "#4A4A4A"
      },
      fontFamily: {
        title: ['Nunito', 'sans-serif'],
        accent: ['Roboto Mono', 'monospace'],
        header: ['Montserrat', 'sans-serif'],
        code: ['Source Code Pro', 'monospace'],
      },
      maxWidth: {
        'max': '1300px',
      },
    },
  },
};

export default config;
