const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')()

module.exports = withPlugins([[withMDX]], {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  async rewrites () {
    return [
      {
        source: '/resume',
        destination: 'https://images.ctfassets.net/5dfliyp93yzg/cjGKGKXUMxAaOVJg53FHI/f3d3c9a2a176335affec167154b6881c/resume_lukas_oppermann_01.4.pdf'
      }
    ]
  }
})
