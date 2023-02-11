// const customMedia = require('./src/assets/styles/custom-queries.cjs')
// ({ importFrom: './src/assets/styles/custom-media.css' })

module.exports = {
  plugins: [
    require('postcss-custom-media')(),
    require('postcss-nesting'),
  ],
};