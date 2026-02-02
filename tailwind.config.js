/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // Action/Focus Blue
        secondary: "#64748b", // Muted Slate
        brand: "#0f172a",     // Deep Navy
      },
    },
  },
  plugins: [],
}