// tailwind.config.js

import tailwindScrollbar from 'tailwind-scrollbar';
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust path to match your src structure
  ],
  darkMode: 'class', // This enables class-based dark mode
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#ffffff',
          text: '#1f2937',
          linkbg: '#f4f4f5',
          bordertopgreen: "#65c286",
          bordertoppurpol: "#915fda",
        },
        dark: {
          bg: '#1f2937',
          text: '#f9fafb',
          linkbg: '#27272a',
        },
        'light-bg': '#f3f4f6', // Light mode background color
        'dark-bg': '#1f2937',  // Dark mode background color
        'light-text': '#1f2937', // Light mode text color
        'dark-text': '#f3f4f6', // Dark mode text color
      },
    },
  },
  plugins: [tailwindScrollbar],
};
