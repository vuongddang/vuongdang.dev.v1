const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Biko', ...defaultTheme.fontFamily.sans],
      },
      opacity: {
        10: '.1',
        20: '.2',
        30: '.3',
        40: '.4',
        50: '.5',
        60: '.6',
        70: '.7',
        80: '.8',
        90: '.9',
        100: '1',
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [require('@tailwindcss/ui')],
}
