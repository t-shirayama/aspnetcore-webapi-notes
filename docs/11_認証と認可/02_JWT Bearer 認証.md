# JWT Bearer 認証

Web API では、`Authorization` ヘッダーに Bearer トークンを付ける方式がよく使われます。

```http
Authorization: Bearer eyJhbGciOi...
```

ASP.NET Core では JWT Bearer 認証を設定できます。

```csharp
builder.Services.AddAuthentication()
    .AddJwtBearer();
```

トークンには有効期限、発行者、対象者、署名などの検証が必要です。

