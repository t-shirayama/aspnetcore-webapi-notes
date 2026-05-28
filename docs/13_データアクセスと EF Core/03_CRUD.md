# CRUD

CRUD は Create、Read、Update、Delete の略です。

EF Core では `DbSet` と `SaveChangesAsync` を使って操作します。

```csharp
var article = new Article { Title = request.Title };
db.Articles.Add(article);
await db.SaveChangesAsync();
```

読み取りでは LINQ を使います。

```csharp
var articles = await db.Articles
    .OrderByDescending(article => article.Id)
    .ToListAsync();
```

Web API では、DB 操作の結果を HTTP ステータスコードへ対応させます。

