/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      animation: {
        slideIn: "slideIn 500ms both cubic-bezier(0, 0.6, 0.32, 1.06)",
        fadeIn: "fadeIn 600ms both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { translateX: "100%" },
          "100%": { translateX: "0%" },
        },
      },
    },
  },
};
