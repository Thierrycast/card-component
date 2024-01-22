/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        width:{
          300: '300px',
        },
        height:{
          500: '500px',
        },
        screens: {
          
          'md': '920px',
          
        },
      },
    },
    plugins: [],
  }