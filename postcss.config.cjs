// const customMedia = require('./src/assets/styles/custom-queries.cjs')
// ({ importFrom: './src/assets/styles/custom-media.css' })

module.exports = {
  plugins: [
    require('postcss-custom-media')({ importFrom: './src/assets/styles/includes/custom-media.css' }),
    require('postcss-nesting'),
  ],
};