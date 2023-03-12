/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      noto: ['Noto Sans JP', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        bebop: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
