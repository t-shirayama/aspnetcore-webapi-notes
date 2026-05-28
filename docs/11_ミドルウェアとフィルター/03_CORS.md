# CORS

CORS は、ブラウザーが異なるオリジンへのリクエストを制限する仕組みです。

フロントエンドと API のドメインやポートが違う場合、API 側で許可設定が必要になることがあります。

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod());
});

app.UseCors("Frontend");
```

本番では `AllowAnyOrigin` を安易に使わず、許可するオリジンを絞ります。

