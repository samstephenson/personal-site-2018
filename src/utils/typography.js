import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.65,
  headerFontFamily: ['fira sans', 'serif'],
  bodyFontFamily: ['fira sans', 'sans-serif'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
