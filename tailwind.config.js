/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './blog/**/*.{md,mdx}' // 👈 nếu bạn dùng .md files ở thư mục blog
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
