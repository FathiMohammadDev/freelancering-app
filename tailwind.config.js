/** @type {import('tailwindcss').Config} */
import tailwindFormPlugin from "@tailwindcss/forms"

const withOpacity = (variableName) => {
  console.log(variableName);
  console.log(variableName, "hello")
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) return `rgba(${variableName},${opacityValue})`

    return `rgb(${variableName})`
  }
}


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['class', '[class="dark-mode"]'],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("63, 162, 246"),
        bg_light: withOpacity("244, 244, 246"),
        text_primary: withOpacity("25, 25, 25"),
        text_secondary: withOpacity("135, 135, 135"),
        success: withOpacity("0, 192, 115"),
        warning: withOpacity("255, 153, 0"),
        error: withOpacity("255, 71, 87"),
      }
    },
  },
  plugins: [
    tailwindFormPlugin({
      strategy: 'class',
    }),
  ],
}