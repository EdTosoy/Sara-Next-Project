module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pitch: "#e75849",
      },
      height: {
        "80vh": "80vh",
        400: "400px",
      },
      width: {
        200: "200px",
        "80vw": "80vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
