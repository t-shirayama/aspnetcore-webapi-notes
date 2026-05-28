# EF Core とは

Entity Framework Core は、.NET でデータベースを扱うための ORM です。

テーブルを C# のクラス、レコードをオブジェクトとして扱えます。

```csharp
public class Article
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
}
```

SQL を直接書く場面もありますが、基本的な CRUD は LINQ と `DbContext` で表現できます。

