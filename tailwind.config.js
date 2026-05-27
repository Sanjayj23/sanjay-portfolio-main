/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: "#3e0707",
          900: "#500a0a",
          800: "#6e1010",
          700: "#7a1414",
        },
        paper: {
          50: "#fff8ed",
          100: "#f5ede0",
          200: "#eadcca",
        },
        ink: "#1a0f0a",
        gold: "#d4923a",
        terracotta: "#9f2e22",
      },
      fontFamily: {
        body: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
        shout: ["Anton", "Barlow Condensed", "sans-serif"],
        condensed: ["Barlow Condensed", "sans-serif"],
        hand: ["Caveat", "cursive"],
      },
      boxShadow: {
        paper: "0 18px 44px rgba(0,0,0,0.34)",
        softpaper: "0 8px 24px rgba(0,0,0,0.24)",
      },
      maxWidth: {
        page: "1180px",
      },
    },
  },
  plugins: [],
};
