# HTTPS と launchSettings.json

開発時の起動 URL は `Properties/launchSettings.json` に定義されます。

```json
{
  "profiles": {
    "https": {
      "applicationUrl": "https://localhost:7001;http://localhost:5001"
    }
  }
}
```

ASP.NET Core は開発用 HTTPS 証明書を使ってローカルでも HTTPS を試せます。

```bash
dotnet dev-certs https --trust
```

API クライアントから呼ぶときは、実際に起動している URL とポートを確認します。

