/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy:   '#030D1A',
        navy2:  '#071525',
        navy3:  '#0C1F33',
        navy4:  '#112540',
        gold:   '#C09A45',
        gold2:  '#D4B469',
        cream:  '#F2EDE5',
        steel:  '#8899AA',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['Jost', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
