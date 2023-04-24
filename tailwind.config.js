/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      'gradient-primary' :'#1c8c81',
      'gradient-secondary' :'#f2a922',
      'gradient-ternary' :'#70a84e',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

