
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    colors: {
      'text': '#5e330d',
      'background': '#fdca8b',
      'primary': '#a7540c',
      'secondary': '#c09a8c',
      'accent': '#865846',
     },     
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
