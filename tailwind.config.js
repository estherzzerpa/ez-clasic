/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'fontPrincipal' : ['Aboreto', 'cursive']
      },
      colors: {
        ochre: {
          '50':  '#fcfbf7',
          '100': '#f9f0d3',
          '200': '#f3daa5',
          '300': '#e1b470',
          '400': '#cb8742',
          '500': '#b16525',
          '600': '#924b18',
          '700': '#6f3814',
          '800': '#4c2610',
          '900': '#30170b',
        }
      }
    },
  },
  plugins: [],
}

