# Entity と DTO の違い

Entity は、業務データやデータベース上のデータを表すオブジェクトです。EF Core ではテーブルに対応するクラスとして使われることが多いです。

DTO は Data Transfer Object の略で、API の入出力としてデータを運ぶための型です。

```csharp
public class Article
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string InternalMemo { get; set; } = "";
}

public record ArticleResponse(int Id, string Title);
```

Entity は内部の都合、DTO は外部との契約です。**この 2 つを同じものとして扱わない** ことが重要です。

