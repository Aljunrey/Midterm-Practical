/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#09090f",
        panel: "#12121c",
        violetglow: "#8b5cf6"
      },
      boxShadow: {
        glow: "0 0 35px rgba(139, 92, 246, 0.18)"
      }
    },
  },
  plugins: [],
};
