/** @type {import('tailwindcss').Config} */

const withOpacity = (variableName) => {
  console.log(variableName, "hello")
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) return `rgba(${variableName},${opacityValue})`

    return `rgb(${variableName})`
  }
}


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("63, 162, 246"),
        bg_light: withOpacity("241,245,249"),
        text_bold: withOpacity("(33,33,33)"),
        text_light: withOpacity("(122,122,122)"),
      }
    },
  },
  plugins: [],
}