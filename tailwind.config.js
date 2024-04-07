/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm-md':{'max':'450px'}
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
   },

}

