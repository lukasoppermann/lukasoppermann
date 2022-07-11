const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  pageExtensions: ['ts', 'tsx'],
  async rewrites () {
    return [
      {
        source: '/resume',
        destination: '/resume_lukas_oppermann.pdf'
      },
      {
	      source: "/bee.js",
	      destination: "https://cdn.splitbee.io/sb.js",
	    },
	    {
	      source: "/_hive/:slug",
	      destination: "https://hive.splitbee.io/:slug",
	    },
    ]
  },
  async redirects() {
    return [
      {
        source: '/blog/:slug',
        destination: '/blog',
        permanent: false,
      },
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
})