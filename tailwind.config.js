module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'subtle-pattern': "url('/subtlebg.jpg')"
      },
      keyframes: {
        rtl: {
          '0%': { transform: 'translateX(0)'},
          '100%': { transform: 'translateX(-50%)'}
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)'},
          '100%': { transform: 'rotate(360deg)'}
        }
      },
      animation: {
        rtl: 'rtl 75s infinite linear',
        'spin-slow': 'spin 100s infinite linear'
      },
      transitionProperty: {
        "width": "width",
        "spacing": 'margin, padding',
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "3xsmall": "320px",
        "2xsmall": "512px",
        "xsmall": "768px",
        "small": "1024px",
        "medium": "1280px",
        "large": "1440px",
        "xlarge": "1680px",
        "2xlarge": "1920px",
      },
      fontFamily: {
        sans: ['var(--font-ibm)'],
        mono: ['var(--font-russo-one)'],
      },
      width: {
        '128': '32rem'
      },
      height: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}
