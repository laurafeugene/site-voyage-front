module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  plugins: [
    require('@tailwindcss/forms'),
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
        'darkest': {
          '50': '#f2f6f7', 
          '100': '#e9eef0', 
          '200': '#c5d1d6', 
          '300': '#a2b4bd', 
          '400': '#6b7f8c', 
          'DEFAULT': '#3b4b59', 
          '600': '#304152', 
          '700': '#203042', 
          '800': '#152336', 
          '900': '#0c1729', 
          '950': '#050c1a'
        },
        'warm': {
          '50': '#fcfaf5', 
          '100': '#fcf8f0', 
          '200': '#f5e7d3', 
          '300': '#f0d8bb', 
          '400': '#e6b78e', 
          'DEFAULT': '#d98d62', 
          '600': '#c47951', 
          '700': '#a35a37', 
          '800': '#824023', 
          '900': '#612813', 
          '950': '#401508'
        },
        'medium':{
          '50': '#fffdfa', 
          '100': '#fffbf5', 
          '200': '#fcf3e6', 
          '300': '#fae9d4', 
          '400': '#f7d5b7', 
          'DEFAULT': '#f2b999', 
          '600': '#db9e7d', 
          '700': '#b57355', 
          '800': '#915237', 
          '900': '#6e341f', 
          '950': '#471b0d'
        },
        'cool': {
          '50': '#faf8f5', 
          '100': '#f7f4f0', 
          '200': '#e8e0d5', 
          '300': '#dbcec1', 
          '400': '#c2a897', 
          'DEFAULT': '#a68072', 
          '600': '#966c5d', 
          '700': '#7d4f41', 
          '800': '#633529', 
          '900': '#4a2117', 
          '950': '#30100a'
        },     
        'lightest': {
          '50': '#fffefc', 
          '100': '#fffefc', 
          '200': '#fcf9f5', 
          '300': '#faf2eb', 
          '400': '#f7e8df', 
          'DEFAULT': '#f2d9d0', 
          '600': '#dbb5a9', 
          '700': '#b58374', 
          '800': '#915b4c', 
          '900': '#6e382b', 
          '950': '#471b12'
        },
    },
    fontFamily: {},
    borderRadius: {
      'none': '0', 
      'sm': '0.125rem',
      'md': '0.375rem', // DEFAULT
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem', 
    },
  extend: {},
},
  plugins: [require("daisyui", "flowbite/plugin")],
  daisyui: {
    themes: ['light'],
  }
};
