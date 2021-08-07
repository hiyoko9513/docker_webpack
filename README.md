## 動作確認時のバージョン
```json
{ 
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