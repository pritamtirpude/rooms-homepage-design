import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        rooms: {
          black: 'hsl(0, 0%, 0%)',
          darkGray: 'hsl(0, 0%, 63%)',
          white: 'hsl(0, 0%, 100%)',
          veryDarkGray: 'hsl(0, 0%, 27%)'
        }
      }
    }
  },
  plugins: []
};
export default config;
