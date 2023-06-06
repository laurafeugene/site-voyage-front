module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkest': '#3B4B59',
        'lightest': '#F2D9D0',
        'medium':'#F2D999',
        'warm': '#D998D62',
        'cool': '#A68072',     
    },
  },
},
  plugins: [require("daisyui")],
};
