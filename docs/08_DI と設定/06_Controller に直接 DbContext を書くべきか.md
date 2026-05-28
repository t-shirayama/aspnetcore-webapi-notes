# Controller に直接 DbContext を書くべきか

小さなサンプルでは、Controller や Minimal API から直接 `DbContext` を使っても問題ありません。

```csharp
app.MapGet("/articles", async (AppDbContext db) =>
    await db.Articles.ToListAsync());
```

ただし実務では、業務ルール、権限チェック、マッピング、トランザクションなどが増えます。

その場合は Service 層に処理を移し、Controller はリクエストとレスポンスの組み立てに寄せます。

判断基準は、**DB 操作以外の判断が増えてきたか** です。

