/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1160px",
        },
      },
      colors: {
        green: {
          1: '#5FB848',
        },
        black: {
          1: '#000000',
        },
        white: {
          1: '#ffffff',
        }
      },
      fontFamily: {
        "sharp-sans": "Sharp Sans",
      },
    },
  },
  plugins: [],
};
