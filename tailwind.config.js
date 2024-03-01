/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kdam': ['Kdam Thmor Pro', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

