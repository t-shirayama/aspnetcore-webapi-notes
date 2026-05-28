# Swagger UI

Swagger UI は、OpenAPI 定義をブラウザーで見やすく表示し、リクエストも試せる UI です。

```csharp
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
```

開発中は Swagger UI でエンドポイントの一覧、パラメーター、レスポンス形式を確認できます。

本番で公開するかどうかは、セキュリティと利用者を考えて決めます。

