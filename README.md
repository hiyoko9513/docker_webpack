# 利用目的
JSモジュールのバンドルとscssのみ  

今後scssをwebpackの機能を利用するかどうか。。。？(分割しているとscssのホットリロードができない。だが、webpack内で利用すると内部cssで書き込まれる。)

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

webpackのインストール
```shell
$ yarn add webpack webpack-cli webpack-dev-server --dev
```

コンパイル(script.jsが存在していない時)
```shell
$ yarn run webpack
```

ホットリロード
```shell
$ yarn run webpack server
```

## scss
自動コンパイル
```shell
$ docker-compose exec scss sass --watch style.scss:../css/style.css
```
