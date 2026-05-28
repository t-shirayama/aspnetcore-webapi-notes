# Route 属性

`[Route]` は、Controller や Action に対応する URL を定義する属性です。

```csharp
[ApiController]
[Route("api/articles")]
public class ArticlesController : ControllerBase
{
    [HttpGet("{id}")]
    public ActionResult<ArticleResponse> Get(int id)
    {
        return Ok();
    }
}
```

この例では、`GET /api/articles/10` が `Get` Action に対応します。

`[controller]` というトークンを使うこともできます。

```csharp
[Route("api/[controller]")]
```

`ArticlesController` なら、`[controller]` は `Articles` として扱われます。

明示的な URI を使うか、トークンを使うかはチーム方針でそろえます。

