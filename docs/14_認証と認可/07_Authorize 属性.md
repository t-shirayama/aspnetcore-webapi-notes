# Authorize 属性

Controller では `[Authorize]` 属性を使って、認証済みユーザーだけがアクセスできるようにします。

```csharp
[Authorize]
[ApiController]
[Route("api/[controller]")]
public class ArticlesController : ControllerBase
{
}
```

特定のアクションだけに付けることもできます。

```csharp
[AllowAnonymous]
[HttpGet]
public IActionResult GetPublicArticles() => Ok();
```

公開 API と保護 API の境界を明確にします。

ただし、`[Authorize]` は入口の制御です。認証済みユーザーなら誰でも全データを操作できる、という意味ではありません。

```csharp
[Authorize]
[HttpGet("{id:int}")]
public async Task<IResult> GetArticle(int id)
{
    var article = await service.FindAsync(id);

    if (article.OwnerUserId != currentUserId)
    {
        return Results.Forbid();
    }

    return Results.Ok(article);
}
```

ログイン済みかどうかと、対象リソースを操作できるかは別の確認です。リソース単位の認可は Controller や Service で明示的に判断します。
