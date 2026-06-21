/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", // Pure white background
        secondary: "#0f172a", // Very dark slate for text
        tertiary: "#f8fafc", // Very subtle off-white for cards
        "tertiary-dark": "#e2e8f0",
        accent: "#3b82f6", // Blue accent
        "accent-dark": "#2563eb",
        "accent-light": "#60a5fa",
        "glass": "rgba(255, 255, 255, 0.8)", // More opaque glass
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 35px 120px -15px rgba(210, 215, 226, 0.5)',
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "none", // Removed dark pattern
      },
    },
  },
  plugins: [],
}
