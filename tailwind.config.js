module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkest': '#3B4B59',
        'warm': '#D98D62',
        'medium':'#F2B999',
        'cool': '#A68072',     
        'lightest': '#F2D9D0',

    },
  },
},
  plugins: [require("daisyui", "tailwindcss/forms")],
};
