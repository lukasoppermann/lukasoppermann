module.exports = {
  pageExtensions: ['ts', 'tsx'],
  async rewrites () {
    return [
      {
        source: '/resume',
        destination: 'https://images.ctfassets.net/5dfliyp93yzg/cjGKGKXUMxAaOVJg53FHI/f3d3c9a2a176335affec167154b6881c/resume_lukas_oppermann_01.4.pdf'
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
  },
}