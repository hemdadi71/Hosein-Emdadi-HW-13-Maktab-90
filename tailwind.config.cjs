/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        trBlack: '#000000d0',
      },
    },
    screens: {
      sm: '280px',
      md: '445px',
    },
  },
}
