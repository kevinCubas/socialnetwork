/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff', // background post and modal
      'black': '#000000', // text
      'gray': {
        '300': '#CCCCCC', // placeholder and border modal
        '400': '#999999', // button stroke
        '500': '#777777', // input border
      },
      'blue': '#7695EC', // button login and post header
      'red': '#FF5151', // cancel button
      'green': '#47B960', // save button
    }
  },
  plugins: [],
}

