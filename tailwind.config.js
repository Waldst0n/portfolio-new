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
        black: '#151412',
        white: '#FDFDFD',
        gray: '#454346',
        orange: '#F46C38',
        green: '#C3FE42',
      },
    },
  },
  plugins: [],
};
