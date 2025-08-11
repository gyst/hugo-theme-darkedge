/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./layouts/**/*.html', './assets/ts/**/*.ts'],
  plugins: [require('@tailwindcss/typography')],
  safelist: ['chroma']
};
