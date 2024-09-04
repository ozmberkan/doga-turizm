/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary : "#4FC646",
        hoverPrimary : "#4FE100"
      },
      backgroundImage : {
        "banner" : "url('/src/assets/banner/banner.png')",
        "banner-mobile" : "url('/src/assets/banner/banner-mobile.png')",
      }
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
 
   
  },
  plugins: [],
};
