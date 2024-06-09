// next.config.js
module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '/_next/static/files',
            outputPath: 'static/files',
          },
        },
      });
      return config;
    },
  };
  