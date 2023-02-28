module.exports = {
    module: {
      rules: [
        ...
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: 'url-loader',
          },
        },
      ],
    },

    module: {
      loaders: [
        { test: /\.html$/, loader: 'html' }
      ]
    }
    
  };