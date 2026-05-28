# ヘッダーと Cookie

HTTP ヘッダーは、リクエストやレスポンスに関するメタ情報を表します。

代表的なヘッダーには `Content-Type`、`Authorization`、`Location`、`Cache-Control` などがあります。

```csharp
app.MapGet("/download", (HttpResponse response) =>
{
    response.Headers.CacheControl = "no-store";
    return Results.Ok();
});
```

Cookie はブラウザーが保存して次回以降のリクエストに送る小さなデータです。API では認証方式によって使う場面があります。

