/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            theme: '#0092df',
            accent: '#113245',
            dark: '#101010',
            light: '#fafafa'
        },
        backgroundImage: {
          'heroImg': "url('../img/hero-bg.png')",
        }
      },
    },
    plugins: [],
  }