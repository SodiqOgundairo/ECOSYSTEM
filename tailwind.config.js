const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            theme: '#0092df',
            accent: '#044485',
            dark: '#101010',
            light: '#fafafa'
        },
        backgroundImage: {
          'heroImg': "url('../img/hero-bg.jpg')",
          'aboutHero': "url('../img/hero-about.jpg')",
          'servicesImg': "url('../img/services-bg.jpg')",
          'ninHero': "url('../img/ninReg.png')",
          'agentHero': "url('../img/agent.jpg')",
          'payHero': "url('../img/paypoint.jpg')",
          'posHero': "url('../img/pos.jpg')",
          'contactHero': "url('../img/customerSupport.jpg')",
          'unicornHero': "url('../img/unicorn.jpg')",
        }
      },
    },
    plugins: [],
  });