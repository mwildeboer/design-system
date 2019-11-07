module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: "ts-loader"
  });
  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  });

  return config;
};


      // {
      //   loader: 'css-loader',
      //   options: {
      //     modules: {
      //       mode: 'local',
      //       localIdentName: '[local]-[hash:base64:5]',
      //     },
      //     importLoaders: 1
      //   },
      // },