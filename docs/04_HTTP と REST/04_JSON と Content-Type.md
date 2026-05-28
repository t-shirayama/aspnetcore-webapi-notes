# JSON と Content-Type

Web API では、リクエストやレスポンスの本文に JSON を使うことが多いです。

```json
{
  "title": "ASP.NET Core",
  "published": true
}
```

JSON を送るときは `Content-Type: application/json` を付けます。ASP.NET Core はこの情報を見て、本文を C# のオブジェクトへ変換します。

レスポンスでは、クライアントが **どの形式のデータを受け取ったか** を判断できるようにします。

