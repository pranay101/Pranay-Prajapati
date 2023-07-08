/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes:{
        "social-icon":{
          "0%" : {
              transform: "translateY(0)"
          },
          "50%" : {
              transform: "translateY(20px)"
          },
          "100%":{
              transform: "translateY(0)"
          }
      }
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Doboto', 'sans-serif'],
      'dancing': ['Dancing Script', 'sans-serif'],
    },
    animation:{
      social: "social-icon 3s infinite ease-in-out",
    }
  },
  plugins: [],
}
