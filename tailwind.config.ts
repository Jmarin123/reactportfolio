import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // fontFamily: {

    // }
    extend: {
      colors: {
        dark: {
          'text': '#ffffff',
          'background': '#040307',
          'primary': '#5c428f',
          'secondary': '#231735',
          'accent': '#7e62b7',
        },
        light: {
          'text': '#040307',
          'background': '#ffffff',
          'primary': '#5c428f',
          'secondary': '#f1edf7',
          'accent': '#382858',
        },
      }
    },
  },
  plugins: [],
}
export default config
