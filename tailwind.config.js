/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./**/*.html", "./assets/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        machine: "url('../image/machineAEcrire.jpg')",
      },
    },
  },
  plugins: [],
};
