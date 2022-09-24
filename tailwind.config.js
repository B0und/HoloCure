/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pop: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      vt: ["VT323", "monospace"],
    },
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "0.7" },
        },
        slideIn: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },
      },
      animation: {
        slideIn: "slideIn 500ms 200ms both",
        fadeIn: "fadeIn 600ms 400ms both",
      },
    },
  },
};
