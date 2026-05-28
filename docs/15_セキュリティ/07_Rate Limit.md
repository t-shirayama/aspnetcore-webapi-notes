# Rate Limit

Rate Limit は、一定時間あたりのリクエスト数を制限する仕組みです。

ログイン、検索、作成 API、外部 API を呼ぶ処理などは、過剰なリクエストで負荷や悪用の原因になります。

```csharp
builder.Services.AddRateLimiter(options =>
{
    // 制限ルールを登録する
});

app.UseRateLimiter();
```

Rate Limit は認証や認可の代わりではありません。正しい利用者でも、短時間に大量アクセスされるとシステム全体に影響するため、負荷と悪用を抑えるために使います。

## よくある対象

- ログイン試行
- パスワード再発行
- 重い検索 API
- 大量作成や一括更新 API

制限に達した場合は、`429 Too Many Requests` を返す設計が一般的です。
