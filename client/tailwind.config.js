/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#A37CF0', // Primary Violet/Lavender
          dark: '#3A1C61',   // Deep Eggplant (Text/Headings)
          canvas: '#FAF8FF', // Lavender Off-White (Background)
          pink: '#FADCD9',   // Soft Blush (Accents)
        }
      },
    },
  },
  plugins: [],
};