function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}

var cdn = (process.env.NODE_ENV === 'production' ? 'public/' : 'http://localhost:8080/public/');

module.exports = {
  entry: {
    helloWorld: getEntrySources([
      './js/app.js'
    ])
  },

  output: {
    publicPath: cdn,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'jsx', 'babel'], exclude: /node_modules/ }
    ]
  }
};

