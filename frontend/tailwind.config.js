/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,tsx,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "1060px",
        lg: "1140px",
      },
    },
    plugins: [],
  },
};
