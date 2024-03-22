/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      
    },
    fontFamily:{
      'cutive':["Cutive", 'serif']
    },
    colors:{
      'padauk':'#fcba03',
      'kyaeene':'#b5640d'
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}