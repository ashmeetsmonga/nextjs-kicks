/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "theme-blue": "#4A69E2",
        "theme-yellow": "#FFA52F",
        "theme-fa-white": "#FAFAFA",
        "theme-gray": "#E7E7E3",
        "theme-gray-main": "#70706E",
        "theme-dark-gray": "#232321",
      },
    },
  },
  plugins: [],
};
