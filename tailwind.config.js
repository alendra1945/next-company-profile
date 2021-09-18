const colors = require('./src/theme/color.theme');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: colors,
      width: {
        100: '25rem',
        104: '26rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem',
        148: '37rem',
      },
      margin: {
        70: '17.5rem',
        '-70': '-17.5rem',
      },
      maxWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        full: '100%',
      },
      screens: {
        xs: 'var(--xs-screen)',
        sm: 'var(--sm-screen)',
        md: 'var(--md-screen)',
        lg: 'var(--lg-screen)',
        xl: 'var(--xl-screen)',
        '2xl': 'var(--xl2-screen)',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      borderWidth: ['hover', 'focus'],
      visibility: ['group-hover'],
    },
  },
  plugins: [],
};
