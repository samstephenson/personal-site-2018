import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "17px",
  baseLineHeight: 1.6,
  headerFontFamily: ['usual', 'sans-serif'],
  bodyFontFamily: ['usual', 'sans-serif'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
