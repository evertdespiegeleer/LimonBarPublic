module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/LimonBarPublic/'
    : '/',
  outputDir: './docs'
}
