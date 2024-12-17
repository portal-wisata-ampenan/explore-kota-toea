/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main
        primary: "#FCAD3D",
        secondary: "#CD9E6A",
        accent: "#92280E",
        // BG
        bg: "#CD9E6A",
        // Yellow
        y50: "#FFF7EB",
        y100: "#FEE9C7",
        y200: "#FDD18A",
        y300: "#FCAD3D",
        y400: "#FB9824",
        y500: "#F5740B",
        y600: "#D95106",
        y700: "#B43409",
        y800: "#92280E",
        y900: "#78220F",
        y950: "#450E03",
        // Brown
        b50: "#FBF8F1",
        b100: "#F5EEDF",
        b200: "#EAD9BF",
        b300: "#DCBE95",
        b400: "#CD9E6A",
        b500: "#C2854D",
        b600: "#B47142",
        b700: "#965938",
        b800: "#794933",
        b900: "#623E2C",
        b950: "#351E15",
      },
      textColor: {
        // Main
        title: "#FBF8F1",
        cp: "#450E03",
        // Button lable
        light: "#450E03",
      },
      fontSize: {
        h1: "3.812rem",
        h2: "3.062rem",
        h3: "2.438rem",
        h4: "1.938rem",
        h5: "1.562rem",
        h6: "1.250rem",
        p: "1.000rem",
        small: "0.812rem",
        tiny: "0.625rem",
      },
      fontWeight: {
      },
      width: {
        carousel: "[calc(100vw/3.5)]",
      },
      gap: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        xxl: "2rem",
      },
      padding: {
        body: "24rem",
        card: "2rem",
        button: "1rem",
      },
      margin: {
        title: "1rem",
        p: "0.5rem"
      },
    },
  },
  plugins: [],
}
