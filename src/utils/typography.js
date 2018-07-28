import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.7,
  headerFontFamily: ['Acumin Pro Wide', 'sans-serif'],
  bodyFontFamily: ['Acumin Pro', 'sans-serif'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
