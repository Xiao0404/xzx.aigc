/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontSize: {
          base: '14px', // 将 text-base 的值设置为 14px
        },
      },
    },
    plugins: [],
  }
  