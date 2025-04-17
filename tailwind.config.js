module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "float": "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "blob": "blob 7s infinite",
        "blob-delay-2000": "blob 7s infinite 2s",
        "blob-delay-4000": "blob 7s infinite 4s"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" }
        }
      },
      animationDelay: {
        '2000': '2000ms',
        '4000': '4000ms'
      },
      colors: {
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-animation-delay')
  ]
}