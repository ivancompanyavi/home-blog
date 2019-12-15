const withCSS = require('@zeit/next-css')
const fs = require('fs')

module.exports = withCSS({
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
    };

    const posts = fs.readdirSync('./posts')
      .map(p => p.split('.')[0])

    posts.forEach(post => {
      paths[`/posts/${post}`] = { page: '/posts/[slug]', query: { slug: post } };
    });

    return paths;
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    config.module.rules.push({
      test: /\.svg$/,
      use: 'svg-inline-loader',
    })
    return config
  },
});
