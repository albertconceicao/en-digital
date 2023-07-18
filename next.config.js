const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      loader: 'file-loader',
      options: {
        publicPath: `/_next/static/videos`,
        outputPath: 'static/videos',
        name: '[name].[ext]',
        esModule: false,
      },
    });

    return config;
  },
});
