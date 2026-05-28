# appsettings.json

`appsettings.json` はアプリの設定を書くファイルです。

```json
{
  "ConnectionStrings": {
    "Default": "Host=localhost;Database=app"
  },
  "AllowedHosts": "*"
}
```

環境別には `appsettings.Development.json` のようなファイルを使えます。

接続文字列や外部サービス URL など、**コードに直接書きたくない値** を設定として分離します。

