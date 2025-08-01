/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(6,0,16)",
        secondary: "#ffffff",
        accent: "rgb(125,93,253)",
      },
    },
  },
  plugins: [],
};
  