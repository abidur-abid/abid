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
        primaryColor: '#3C3C59',
        secondaryColor: '#F79784',
        tertiaryColor: '#78ACD9',
        headerBackgroundColor: '#3C3C60'
      }
    },
  },
  plugins: [require("daisyui")],

};
