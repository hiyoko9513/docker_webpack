## 動作確認時のバージョン
```json
{
  "css-loader": "^6.2.0",
  "html-loader": "^2.1.2",
  "html-webpack-plugin": "^5.3.2",
  "mini-css-extract-plugin": "^2.2.0",
  "sass": "^1.37.5",
  "sass-loader": "^12.1.0",
  "style-loader": "^3.2.1",
  "webpack": "^5.49.0",
  "webpack-cli": "^4.7.2",
  "webpack-dev-server": "^3.11.2",
  "webpack-merge": "^5.8.0"
}
```

## 使い方
.envの作成

dockerの起動
```shell
$ make up
```

## WebPack
dockerへ接続
```shell
$ docker-compose exec front ash
```

イニシャライズ
```shell
$ yarn init -y
```

必要なライブラリのインストール
```shell
$ yarn add --dev webpack webpack-cli webpack-dev-server sass sass-loader css-loader style-loader html-loader mini-css-extract-plugin html-webpack-plugin webpack-merge
```

コンパイル
```shell
# dev
$ rm -rf dist || true && yarn run webpack --config ./webpack.dev.js
# prod
$ yarn run webpack --config ./webpack.prod.js
```

watch
```shell
$ yarn run webpack --watch --config ./webpack.dev.js
```

dev server
```shell
$ yarn run webpack server --mode development --config ./webpack.dev.js
```