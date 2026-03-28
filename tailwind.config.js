/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ash': '#8b8b8b',
        'ash-dark': '#6b6b6b',
        'ash-light': '#a0a0a0',
        'black': '#0a0a0a',
        'black-dark': '#000000',
        'dark-gray': '#1a1a1a',
        'blue': '#3b82f6',
        'blue-dark': '#1d4ed8',
        'blue-light': '#60a5fa',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

