/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "montserrat":["montserrat","sans-serif"],
        "russo":["russo","sans-serif"]
      }
    },
  },
  plugins: [],
}

