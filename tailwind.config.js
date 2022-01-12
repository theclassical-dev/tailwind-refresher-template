module.exports = {
  content: [
    // './src/style.css',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        "t-purple": "#5267DF",
        "t-red": "#FA5959",
        "t-blue": "#243A45",
        "t-gray": "#9194A2",
        "t-white": "#f7f7f7",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
}
