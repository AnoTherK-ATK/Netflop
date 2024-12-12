/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './build/**/*.html',
    './build/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      translate: ['group-hover'],
      screen: {
        'mf': '400px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')({
      charts: true,
    })
  ],
  darkMode: 'class',
}
