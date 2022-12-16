/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html','./js/**/*.js'],
  theme: {
    fontFamily:{
      sans:['Poppins', "sans-serif"],
    },
    extend: {
      colors:{
       "primary":"#EFEBCE",
       "primaryVariant":"#D6CE93",
       "secondary":"#CFA5B4",
       "tertiary":"#A23E48"
      },
      fontFamily:{
        "lora":['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}
