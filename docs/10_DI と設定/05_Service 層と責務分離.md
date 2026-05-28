# Service 層と責務分離

Controller やエンドポイントに処理を書きすぎると、Fat Controller になりやすくなります。

Fat Controller とは、リクエスト処理、業務判断、DB 操作、外部 API 呼び出しなどが Controller に詰め込まれた状態です。

Service 層を作ると、Controller は HTTP の入口に集中できます。

```csharp
public class ArticleService
{
    public Task<ArticleResponse> CreateAsync(CreateArticleRequest request)
    {
        throw new NotImplementedException();
    }
}
```

Controller は **HTTP を C# の処理へ橋渡しする場所** と考えると、責務を分けやすくなります。

