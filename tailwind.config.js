/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#703BF7',
        'primary-hover': '#5c2fd6',
        'bg-light': '#EFEFEF',
        'text-dark': '#1F1F1F',
        'text-medium': '#0F0F0F',
        'text-gray': '#686666',
        dark: {
          100: '#F5F5F5',
          200: '#999999',
          300: '#666666',
          400: '#1A1A1A',
        },
      },
      borderRadius: {
        '14': '14px',
        '20': '20px',
      },
      fontFamily: {
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
