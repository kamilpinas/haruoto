/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
    files: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Or your preferred sans-serif font
        serif: ["Montserrat", "serif"], // Or your preferred serif font
      },
      colors: {
        primary: "#CE999B", //Text & buttons
        secondary: "#546581", // Background
        accent: "#311E1E", // Accent
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
      },
    },
  },
  plugins: [require("taos/plugin")],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
    "translate-x-0",
    "-translate-x-full",
    "lg:translate-x-0",
  ],
}
