function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}

module.exports = {
  entry: {
    helloWorld: getEntrySources([
      './js/app.js'
    ])
  },

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['jsx', 'babel'], exclude: /node_modules/ }
    ]
  }
};

