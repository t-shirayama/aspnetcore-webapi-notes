# Tracking と NoTracking

EF Core は、取得した Entity の変更を追跡できます。この仕組みを Tracking と呼びます。

Tracking されている Entity は、プロパティを変更して `SaveChangesAsync` を呼ぶと DB に反映されます。

```csharp
var article = await db.Articles.FindAsync(id);
article!.Title = "Updated";
await db.SaveChangesAsync();
```

一方、一覧表示や参照専用の API では、変更追跡が不要なことがあります。その場合は `AsNoTracking` を使います。

```csharp
var articles = await db.Articles
    .AsNoTracking()
    .OrderByDescending(article => article.CreatedAt)
    .ToListAsync();
```

| モード | 向いている用途 |
| --- | --- |
| Tracking | 更新する Entity を取得する |
| NoTracking | 参照専用、一覧表示、Response DTO への射影 |

参照専用の API で不要な Tracking を避けると、メモリ使用量や処理負荷を抑えやすくなります。
