import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '15px',
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: 'Noto Sans JP',
      styles: ['400', '500', '700'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerWeight: 700,
  bodyWeight: 400,
  lineHeight: 1.1,
  boldWeight: 700,
  headerFontFamily: ['Noto Sans JP', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
  overrideStyles: ({ rhythm }, options, styles) => ({
    h1: {
      fontSize: '52px',
      marginBottom: '30px'
    },
    h2: {
      fontSize: '38px',
      marginBottom: '30px'
    },
    h3: {
      fontSize: '24px',
      marginBottom: '15px'
    },
    h4: {
      fontSize: '18px',
      marginBottom: '15px'
    },
    p: {
      color: '#666666',
      marginBottom: '30px'
    },
    a: {
      textDecoration: 'none'
    }
  }),
})

export default typography