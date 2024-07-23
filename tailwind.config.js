/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors : {
        "transparent": 'transparent',
        "background": '#0d0d12',
        "secondBackground": "#26262a",
        "secondAfterBackground": '#0d0d12',
        "selected": "#757575",
        "white": '#FFFFFF',
        "textButton": '#272727',
      }
    },
  },
  plugins: [],
}

