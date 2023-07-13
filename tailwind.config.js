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
      colors: {
        'primary': { // Accent Background color -- vert
          '50': '#edfcf3',
          '100': '#d4f7e0',
          '200': '#adedc7',
          '300': '#78dda6',
          '400': '#41c683',
          'DEFAULT': '#20b970',
          '600': '#118a53',
          '700': '#0d6f45',
          '800': '#0d5838',
          '900': '#0c482f',
          '950': '#05291b',
      },
      'secondary': { // Text color -- noir bleuté
        '50': '#eaf1ff',
        '100': '#d9e5ff',
        '200': '#bbcfff',
        '300': '#91aeff',
        '400': '#6680ff',
        '500': '#4353ff',
        '600': '#2223ff',
        '700': '#1a17eb',
        '800': '#1616bd',
        '900': '#1b1e94',
        'DEFAULT': '#060620',
},
      'accent': { // Accent color -- orange
          '50': '#fff5ed',
          '100': '#ffe8d4',
          '200': '#ffcea8',
          '300': '#ffab71',
          'DEFAULT': '#ff7b36',
          '500': '#fe5911',
          '600': '#ef3e07',
          '700': '#c62b08',
          '800': '#9d240f',
          '900': '#7e2010',
          '950': '#440c06',
      },
      'neutral': { // Neutral color -- white
        'DEFAULT': '#ffffff',
    },
},

    },
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

