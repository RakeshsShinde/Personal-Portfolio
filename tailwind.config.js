/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mons: ["'Montserrat', sans-serif !important"],
        dance: ["'Dancing Script', cursive !important"],
        open_sans: [" 'Open Sans', sans-serif !important"],
        raleway:["'Raleway', sans-serif !important"]
      },
      backgroundImage: {
        gradient: 'linear-gradient(to right, #0c0c1d, #111132)',
      },
    },
  },
  plugins: [],
}

