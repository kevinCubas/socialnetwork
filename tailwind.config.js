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
    },
    keyframes: {
      progress: {
        '0%': { width: '0%' },
        '100%': { width: '100%' },
      },
      pulseLoadingBackground: {
        '0%': { 
          opacity: '0%',
        },
        '25%': {
          opacity: '0.25',
        },
        '50%': {
          opacity: '1',
        },
        '75%': {
          opacity: '0.25',
        },
        '100%': {
          opacity: '0',
        }
      }
    },
    animation: {
      progress: 'progress 5s linear forwards',
      pulseLoadingBackground: 'pulseLoadingBackground 2.5s linear infinite',
    }
  },
  plugins: [],
}

