module.exports = {
  purge: {
    enabled: true,
    content: ['src/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'christmas-green': '#283414'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
