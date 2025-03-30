/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hf-black': '#1A1A1A',
        'hf-dark': '#222222',
        'hf-silver': '#D1D1D1',
        'hf-copper': '#E25822',
        'hf-light-copper': '#FF7F41',
        'hf-gray': '#333333',
        'hf-light-gray': '#444444',
        'chakra-root': '#FF0000',
        'chakra-sacral': '#FF7F00',
        'chakra-solar': '#FFFF00',
        'chakra-heart': '#00FF00',
        'chakra-throat': '#0000FF',
        'chakra-third-eye': '#4B0082',
        'chakra-crown': '#9400D3',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'title': ['Cormorant Garamond', 'serif'],
        'quote': ['Cormorant', 'serif'],
        'button': ['Poppins', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
        'copper': '0 4px 15px rgba(226, 88, 34, 0.15)',
        'subtle': '0 4px 25px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
} 