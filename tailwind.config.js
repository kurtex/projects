const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements-react/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
        orbit: ['Orbit', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  darkMode: 'class',
  plugins: [require('tw-elements-react/dist/plugin.cjs')]
}
