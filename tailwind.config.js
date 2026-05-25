/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Barlow', 'sans-serif'],
      accent: ['Instrument Serif', 'serif'],
    },
  },
  plugins: [],
}
