/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        "purple-neon": "#b36bff",
      },
      keyframes: {
        neon: {
          "0%, 100%": {
            textShadow: "0 0 5px #b36bff, 0 0 20px #b36bff, 0 0 40px #b36bff",
          },
          "50%": {
            textShadow: "0 0 10px #b36bff, 0 0 30px #b36bff, 0 0 60px #b36bff",
          },
        },
      },
      animation: {
        neon: "neon 1.5s infinite alternate",
      },
    },
  },
  plugins: [],
};
