const colors=require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors:{
        primary:'var(--primary)',
        white:'#fff',
        orange:colors.orange
      },
     
    },
  },
  variants: {
    extend: {
      scale:['hover'],
      placeholderColor: ['hover', 'active'],
      hidden:['hover','focus'],
     grayscale: ['hover', 'focus'],
     inset: ['hover', 'focus','group-hover']
    }
  },
  plugins: [],
}
