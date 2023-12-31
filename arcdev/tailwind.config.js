import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      xs: "150px",
      xxs: "300px",
      ssm: "400px",
      sm: "468px",
      md: "768px",
      mmd: "800px",
      lg: "992px",
      lgg: "1024px",
      xl: "1440px"
    },
    extend: {
      colors:{
        DEFAULT: colors.neutral[100]
      }
    },
  },
  plugins: [],
}

