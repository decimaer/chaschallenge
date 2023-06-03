/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            josefin: ['Josefin Sans', 'sans-serif'],
            manrope: ['Manrope', 'sans-serif'],
         },
         colors: {
            purplePrimary: "#291242",
            purpleHeader: "#6328A0",
            fontGreen: "#AAE23B",
            fontYellow: "#FFE400",
            fontDialogue: "#FFF7B2",
            fontPink: "#F94FAF"
         }
      },
      keyframes: {
         'slide-in': {
           '0%': {
             transform: 'translateY(-1000px)',
           },
           '100%': {
             transform: 'translateY(0)',
           },
         },
       },
       animation: {
         'slide-in': 'slide-in 0.5s both',
       },
   },
   plugins: [],
};
