/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue, js, ts}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      dark: "#1D1D1D",
      light: "#FAFCFD",
      "light-darked": "#F3F3F3",
      grey: "#707173",
      accent: "#FF5C00",
      extra: "#FFC95C",
      links: "#4550C2",
    },
    fontFamily: {
      sans: '"Poppins", sans-serif',
    },
    extend: {},
  },
  plugins: [],
};
