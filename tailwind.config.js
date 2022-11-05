/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03A84E",
        secondary: "#F0F1E8"
      },
      gridTemplateColumns:{
        process:"1fr 0.8fr",
        processPhone:"1fr 100px",
      }
    },
  },
  plugins: [],
};
