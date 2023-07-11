module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require('@tailwindcss/forms'), require('flowbite/plugin')
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
        'blue-zodiac': {
          '50': '#f1f7fe',
          '100': '#e3edfb',
          '200': '#c0dbf7',
          '300': '#89bef0',
          '400': '#4b9ce5',
          '500': '#237fd4', // DEFAULT
          '600': '#1563b4',
          '700': '#124f92',
          '800': '#134479',
          'DEFAULT': '#153a65',
          '950': '#0c1f38',
      },
      
      'bittersweet': {
        '50': '#fff2f1',
        '100': '#ffe4e1',
        '200': '#ffcdc7',
        '300': '#ffaaa0',
        'DEFAULT': '#ff7767', // DEFAULT
        '500': '#f84f3b',
        '600': '#e5321d',
        '700': '#c12614',
        '800': '#a02314',
        '900': '#842318',
        '950': '#480e07',
    },
    
    'half-baked': {
      '50': '#f1f8fa',
      '100': '#dcedf1',
      '200': '#bedbe3',
      '300': '#83bac9', // DEFAULT
      '400': '#5da0b3',
      '500': '#418399',
      '600': '#396c81',
      '700': '#335a6b',
      '800': '#314c59',
      '900': '#2c414d',
      '950': '#192933',
  },
  
  'peach-orange': {
    '50': '#fff4ed',
    '100': '#ffe7d5',
    '200': '#febe96', // default
    '300': '#fda574',
    '400': '#fb753c',
    '500': '#fa5015',
    '600': '#ea360c',
    '700': '#c2260c',
    '800': '#9a1f12',
    '900': '#7c1d12',
    '950': '#430b07',
},

'tawny-port': {
  '50': '#fbf4f8',
  '100': '#f8ebf1',
  '200': '#f3d7e5',
  '300': '#e9b8d0',
  '400': '#db8bb0',
  '500': '#cc6893',
  '600': '#b84a74',
  '700': '#9e385c',
  '800': '#83314d',
  '900': '#5e2639', // default
  '950': '#421524',
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
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    themes: ['light'],
  }
};
