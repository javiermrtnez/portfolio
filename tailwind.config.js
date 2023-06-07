/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'hi': 'hi 1.5s linear -.5s infinite',
      },
      keyframes: {
        "hi": {
          "0%": {
            transform: "rotate(0deg)"
          },
          "10%": {
            transform: "rotate(14deg)"
          },
          "20%": {
            transform: "rotate(-8deg)"
          },
          "30%": {
            transform: "rotate(14deg)"
          },
          "40%": {
            transform: "rotate(-4deg)"
          },
          "50%": {
            transform: "rotate(10deg)"
          },
          "60%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(0deg)"
          }
        },
      }
    },
  },
  plugins: [],
}

