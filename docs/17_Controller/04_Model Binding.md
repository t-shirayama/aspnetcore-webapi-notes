# Model Binding

Model Binding は、HTTP リクエストの値を Action の引数や DTO に入れる仕組みです。

```csharp
[HttpGet("{id}")]
public ActionResult<ArticleResponse> Get(int id, [FromQuery] string? keyword)
{
    return Ok();
}
```

この例では、`id` はルート、`keyword` はクエリ文字列から入ります。

よく使う属性:

| 属性 | 取得元 |
| --- | --- |
| `[FromRoute]` | ルートパラメーター |
| `[FromQuery]` | クエリ文字列 |
| `[FromBody]` | リクエストボディ |
| `[FromHeader]` | ヘッダー |

`[ApiController]` があると、ASP.NET Core が取得元を推論してくれる場面もあります。

ただし、読み手に分かりやすくしたい場合は、明示的に属性を書くこともあります。

