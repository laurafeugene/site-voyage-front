module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [
    require('@tailwindcss/forms', require('flowbite/plugin')),
  ],
  theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
//       colors: {
//         'primary': { // Background
//           '50': '#fdf6f3',
//           '100': '#fceae4',
//           '200': '#fbd9cd',
//           '300': '#f6bfab',
//           'DEFAULT': '#f2ab91',
//           '500': '#e4774f',
//           '600': '#d05c32',
//           '700': '#af4b26',
//           '800': '#914023',
//           '900': '#793a23',
//           '950': '#411c0e',
//       },
      
//       'secondary': { 
//         '50': '#eff5fe',
//         '100': '#e2ecfd',
//         '200': '#cadbfb',
//         '300': '#aac4f7',
//         'DEFAULT': '#94abf2',
//         '500': '#6c81e8',
//         '600': '#505ddb',
//         '700': '#414ac1',
//         '800': '#37409c',
//         '900': '#333b7c',
//         '950': '#1e2148',
//     },

//     'color': { // Text
//       '50': '#f2f8fd',
//     '100': '#e5eff9',
//     '200': '#c4dff3',
//     '300': '#90c5e9',
//     '400': '#55a8db',
//     '500': '#2f8dc8',
//     '600': '#2070a9',
//     '700': '#1b5989',
//     '800': '#1a4c72',
//     '900': '#1b415f',
//     'DEFAULT': '#122a40',
//   },
    
//     'accent': {
//     '50': '#fdf4f3',
//     '100': '#fde5e3',
//     '200': '#fcd0cc',
//     '300': '#f8afa9',
//     'DEFAULT': '#f28177',
//     '500': '#e7594c',
//     '600': '#d43b2e',
//     '700': '#b22f23',
//     '800': '#932a21',
//     '900': '#7b2821',
//     '950': '#42110d',
//   },
  
//   'neutral': {
//       '50': '#f2f8fd',
//       '100': '#e5eff9',
//       '200': '#c4dff3',
//       '300': '#90c5e9',
//       '400': '#55a8db',
//       '500': '#2f8dc8',
//       '600': '#2070a9',
//       '700': '#1b5989',
//       '800': '#1a4c72',
//       '900': '#1b415f',
//       '950': '#122a40',
// },

// 'base': {
//   '50': '#ffffff',
//     '100': '#efefef',
//     '200': '#dcdcdc',
//     '300': '#bdbdbd',
//     '400': '#989898',
//     '500': '#7c7c7c',
//     '600': '#656565',
//     '700': '#525252',
//     '800': '#464646',
//     '900': '#3d3d3d',
//     '950': '#292929',
// },

// 'info': {
//   '50': '#fbf4f8',
//   '100': '#f8ebf1',
//   '200': '#f3d7e5',
//   '300': '#e9b8d0',
//   '400': '#db8bb0',
//   '500': '#cc6893',
//   '600': '#b84a74',
//   '700': '#9e385c',
//   '800': '#83314d',
//   'DEFAULT': '#5e2639', // default
//   '950': '#421524',
// },

//     },
    fontFamily: {},
    // borderRadius: {
    //   'none': '0', 
    //   'sm': '0.125rem',
    //   'md': '0.375rem', // DEFAULT
    //   'lg': '0.5rem',
    //   'xl': '0.75rem',
    //   '2xl': '1rem', 
    // },
  extend: {},
plugins: [require("daisyui")],
daisyui: {
  themes: ['light'],
}
  }
}

