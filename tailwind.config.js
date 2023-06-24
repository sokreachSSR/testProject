/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      'pink_custom': '#D61355',
      'green_custom': '#04AA9C',
      'light_gray_custom': '#F6F6F6',
      'icons_color': '#5D6D79',
      'light_green_custom': '#DBFAF7',
      'yellow_custom': '#FCE22A',
      'bg_custom': '#F6F6F6',
      'input_custom': '#D9D9D9',
      'hover_green_custom': '#028B80',
    }, 
    fontFamily: {
      'MainFont': ['Montserrat', 'sans-serif'],
      'SecondaryFont': ['Roboto', 'sans-serif'],
      'KhmerFont': ["Noto Sans Khmer", "sans-serif"],
    },
    boxShadow: {
      'shadow_custom': '0px 2px 6px rgba(0, 0, 0, 0.1)',
          'greens-custom':'#F9FFFE',
          'sub-text':'#535353'
    },
    fontSize:{
      'font-8':'8px',
      'font-10':'10px'
      
    },
    screens: {
      'vs': '0px', 
      // iPhone SE
      // => @media (min-width: 0px) { ... }

      'xs': '375px', 
      // iPhone SE
      // => @media (min-width: 375px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // iPad Mini
      // => @media (min-width: 768px) { ... }

      '2md': '820px',
      // iPad Air
      // => @media (min-width: 820px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2lg': '1124px',
      // => @media (min-width: 1124px) { ... }

      '3lg': '1150px',
      // => @media (min-width: 1200px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  columns: {
    '1': '200px',
    '2': '400px',
    '3': '600px',
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
],
variants: {
  scrollbar: ['rounded']
}

}

