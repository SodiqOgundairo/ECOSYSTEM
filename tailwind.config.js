/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            theme: '#6554af',
            accent: '#9507de'
        },
        // backgroundImage: {
        //   'heroImg': "url('assets/img/bg2_cl.png')",
        //   'footer-texture': "url('/img/footer-texture.png')",
        // }
      },
    },
    plugins: [],
  }