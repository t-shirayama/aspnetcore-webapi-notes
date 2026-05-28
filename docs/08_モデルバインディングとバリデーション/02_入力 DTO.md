# 入力 DTO

入力 DTO は、API が受け取るデータの形を表す型です。

```csharp
public record CreateArticleRequest(
    string Title,
    string Body
);
```

データベースの Entity をそのまま受け取ると、外部に公開したくないプロパティまで変更される危険があります。

API の境界では **入力 DTO と出力 DTO を分ける** と、変更に強くなります。

