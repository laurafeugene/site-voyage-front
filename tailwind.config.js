module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'darkest': '#3B4B59',
        'warm': '#D98D62',
        'medium':'#F2B999',
        'cool': '#A68072',     
        'lightest': '#F2D9D0',
    },
    fontFamily: {},
    borderRadius: {
      'none': '0', 
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem', 

    },
  extend: {},
},
  plugins: [require("daisyui")],
};

