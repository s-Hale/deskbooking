module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors: {
        primaryLighter: '#D0EBFD',
        primaryLightest: '#EAF6FD',
        primary: '#3DB0F7',
        darkPink:'#AD005C',
        midPink: '#E10078',
        textColor: '#333',
        inputGray: '#A1A9B3',
        textLink: '#0057AD'
      },
      fontFamily: {
        galano: ['galano', 'sans-serif']
      },
    },
    minWidth: {
      '60': '60%',
    },
    maxWidth: {
      '90': '90%'
    },

  },
  plugins: [],
}
