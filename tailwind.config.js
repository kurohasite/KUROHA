/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  corePlugins: { preflight: false }, // site uses its own base styles in globals.css
  theme: { extend: { colors: { kuroha: { bg: '#050608', navy: '#080F1C', green: '#19ff6c' } } } },
};
