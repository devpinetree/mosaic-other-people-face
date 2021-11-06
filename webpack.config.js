const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development', // 현재 모드를 개발 환경으로 설정
  entry: './src/index.js', // 애플리케이션 진입점
  output: {
    // 번들된 파일을 저장할 경로
    filename: 'bundle.[hash].js', // 번들된 파일의 이름
  },
  module: {
    rules: [
      {
        // es6 바벨 관련 loader
        // .js, .jsx 확장자를 번들한다.
        // node_modules 안에 있는 파일은 번들에 제외
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // html loader
        // minimize: true 는 코드 최적화를 하는 옵션
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', // public/index.html을 템플릿으로 지정
    }),
  ],

  // 개발 서버 설정
  devServer: {
    host: 'localhost', // 개발 서버의 url
    port: port, // 기본값으로 3000번 포트를 사용
    open: true, // 서버가 실행될 때 브라우저를 자동으로 열어줄지 결정
  },
};
