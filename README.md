## 動作確認時のバージョン
```json
{
  "css-loader": "^6.2.0",
  "file-loader": "^6.2.0",
  "html-loader": "^2.1.2",
  "html-webpack-plugin": "^5.3.2",
  "image-webpack-loader": "^7.0.1",
  "mini-css-extract-plugin": "^2.2.0",
  "sass": "^1.37.5",
  "sass-loader": "^12.1.0",
  "style-loader": "^3.2.1",
  "webpack": "^5.49.0",
  "webpack-cli": "^4.7.2",
  "webpack-merge": "^5.8.0"
}
```

## 使い方
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

webpack、sass、webpack serverのインストール
```shell
$ yarn add --dev webpack webpack-cli sass sass-loader css-loader style-loader html-loader mini-css-extract-plugin html-webpack-plugin webpack-merge
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