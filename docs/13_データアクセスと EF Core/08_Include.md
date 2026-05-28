# Include

`Include` は、関連データを一緒に読み込むためのメソッドです。

例えば、記事と著者を一緒に取得したい場合に使います。

```csharp
var articles = await db.Articles
    .Include(article => article.Author)
    .ToListAsync();
```

ただし、`Include` を使えば常に良いわけではありません。不要な関連データまで読み込むと、レスポンスも SQL も重くなります。

API では、Response DTO に必要な形へ `Select` で射影する方が分かりやすい場面も多いです。

```csharp
var articles = await db.Articles
    .Select(article => new ArticleResponse(
        article.Id,
        article.Title,
        article.Author.Name))
    .ToListAsync();
```

`Include` は N+1 問題の対策になりますが、読み込みすぎにも注意します。
