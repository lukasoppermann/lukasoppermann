// const customMedia = require('./src/assets/styles/custom-queries.cjs')
// ({ importFrom: './src/assets/styles/custom-media.css' })

module.exports = {
  plugins: [
    require("@csstools/postcss-global-data")({
      files: ["./src/assets/styles/includes/custom-media.css"],
    }),
    require("postcss-custom-media")(),
    require("postcss-nesting"),
  ],
};