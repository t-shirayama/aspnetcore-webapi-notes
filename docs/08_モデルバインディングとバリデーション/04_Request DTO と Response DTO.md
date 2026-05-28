# Request DTO と Response DTO

Request DTO は、クライアントから受け取る入力の形を表します。

```csharp
public record CreateArticleRequest(
    string Title,
    string Body
);
```

Response DTO は、クライアントへ返す出力の形を表します。

```csharp
public record ArticleResponse(
    int Id,
    string Title,
    DateTime CreatedAt
);
```

作成時に受け取る項目と、取得時に返す項目は同じとは限りません。入力と出力を分けると、API の意図が明確になります。

