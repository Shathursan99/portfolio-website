/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        'primary':'#11235A'
      }
      
    },
    fontFamily:{
      'name-font':'Bodoni'
    }
  },
  plugins: [],
}

