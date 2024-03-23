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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

