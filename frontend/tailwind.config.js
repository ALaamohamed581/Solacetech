/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,tsx,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "640px", // من عمود إلى عمودين عند هذه النقطة
        md: "1044px", // من عمودين إلى ثلاثة أعمدة عند هذه النقطة
        lg: "1140px", // من ثلاثة أعمدة إلى أربعة أعمدة عند هذه النقطة
      },
    },
  },
  plugins: [],
};
