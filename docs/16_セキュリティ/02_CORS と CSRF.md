# CORS と CSRF

CORS は、ブラウザーが異なるオリジンへのリクエストを制限する仕組みです。

API 側で許可するオリジンを設定します。

```csharp
policy.WithOrigins("https://example.com")
      .AllowAnyHeader()
      .AllowAnyMethod();
```

CSRF は、ログイン済みユーザーのブラウザーを悪用して、意図しないリクエストを送らせる攻撃です。

Cookie 認証を使う場合は CSRF 対策を考えます。Bearer トークンを `Authorization` ヘッダーで送る API では、Cookie 認証とはリスクの形が変わります。

CORS は CSRF 対策そのものではありません。

