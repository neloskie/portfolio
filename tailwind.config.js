/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        ink: "#101827",
        steel: "#243447",
        aqua: "#0f766e",
        cyanSoft: "#d9edf7",
        amberSoft: "#f6c453",
        coral: "#e85d75"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(16, 24, 39, 0.14)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "float-slow": "float 4.5s ease-in-out infinite",
        "float-delay": "float 5.25s ease-in-out 0.8s infinite"
      }
    }
  },
  plugins: []
};
