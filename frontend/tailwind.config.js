/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    colors:{
      'mainBg': '#EAE0CC',
      'todo': '#C9ADA1',
      'red': '#FF0000',
    },

    extend: {
      fontFamily:{
        'primary': ['Ubuntu']
      }
    },
  },
  plugins: [],
}

