/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "var(--primary-green)",
        "secondary-green": "var(--secondary-green)",
        "accent-blue": "var(--accent-blue)",
      },
    },
  },
  plugins: [],
};
