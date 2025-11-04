/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a4d2e',
        secondary: '#ff8a08',
        accent: '#ffe382',
        dark: '#0f172a',
      },
      boxShadow: {
        card: '0 20px 40px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};
