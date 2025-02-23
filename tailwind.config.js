/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Dark blue
        secondary: '#9333EA', // Purple
        accent: '#FACC15', // Yellow
        background: '#F3F4F6', // Light gray
        text: '#1F2937', // Dark gray
      },
    },
  },
  plugins: [],
};
