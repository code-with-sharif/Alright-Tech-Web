/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'headingfont':'30px',
        'subheadingfont':'17px',
        'textfont': '15px', 
        
      },
      
      backgroundColor: {
        'deepfuchsia': '#C054D4', 
        'whitecolor':"#FFFFFF",
        'Darkviolet': '#9900CC'
      },

      textColor: {
        'deepfuchsia': '#C054D4', 
        'Darkviolet': '#9900CC', 
        'whitecolor':"#FFFFFF",
      },
      // fontFamily: {
      //  font:['Nunito','sans-serif']
      // },
    },
  },
  plugins: [],
}