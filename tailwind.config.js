/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#244B36", dark: "#183325", light: "#3a6b50" },
        gold: { DEFAULT: "#D8B878", dark: "#b8975a" },
        cream: "#FAF7F0",
        ink: "#2B2B2B",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(36,75,54,0.25)",
      },
    },
  },
  plugins: [],
};
