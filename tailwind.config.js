// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Optionally define a custom gold color
      colors: {
        gold: "#FFD700",
      },
    },
  },
  plugins: [],
};