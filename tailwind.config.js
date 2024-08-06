/** @type {import('tailwindcss').Config} */
import tailwindFormPlugin from "@tailwindcss/forms"


function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['class', '[class="dark-mode"]'],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--primary"),
        bg_light: withOpacity("--bg-light"),
        bg_primary: withOpacity("--bg-primary"),
        bg_active: withOpacity("--bg-active"),
        bg_modal: withOpacity("--bg-modal"),
        icon: withOpacity("--icon"),
        border: withOpacity("--border"),
        text_primary: withOpacity("--text_primary"),
        text_secondary: withOpacity("--text_secondary"),
        success: withOpacity("--success"),
        warning: withOpacity("--warning"),
        error: withOpacity("--error"),
        pending: withOpacity("--pending"),
        accept: withOpacity("--accept"),
      }
    },
  },
  plugins: [
    tailwindFormPlugin({
      strategy: 'class',
    }),
  ],
}