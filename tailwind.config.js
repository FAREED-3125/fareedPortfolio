/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}", "./public/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        Kumbh: "Kumbh Sans",
        redhat: "Red Hat Mono",
        poppins: "poppins",
      },
      colors: {
        primary: "#ffda0f",
      },
    },
  },
  plugins: [],
  darkMode: ["class"],
};
