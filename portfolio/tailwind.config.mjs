/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        padding: "15px",
        center: true,
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '120px',
      },
      fontFamily: {
        primary: "var(--font-jetbrainsMono)",
      },
      extend: {
        colors: {
          primary: '#1c1c22',
          accent: {
            DEFAULT: '#00ff99',
            hover: '#00e187',
          },
      },
      keyframes: {

      },
      animation: {
        
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
