module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
        "bookmark-orange": "#FD7014"
      },
    },
    fontFamily: {
      Poppins: ["Roboto, sans-serif"]
    },
    container: {
      center: true,
      padding: "1rem",
      screen: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    },
  },
  plugins: [],
}