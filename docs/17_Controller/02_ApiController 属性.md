# ApiController 属性

`[ApiController]` は、Web API 用 Controller として便利な動作を有効にする属性です。

```csharp
[ApiController]
[Route("api/[controller]")]
public class ArticlesController : ControllerBase
{
}
```

主な効果:

- モデルバインディングやバリデーションエラーの扱いが API 向けになる
- バリデーションエラー時に自動で `400 Bad Request` を返す
- バインディング元の推論が働く
- Problem Details 形式のエラーに寄せやすい

特に、Request DTO に `DataAnnotations` を付けたとき、自動的に入力エラーを返せる点が重要です。

```csharp
public class CreateArticleRequest
{
    [Required]
    public string Title { get; set; } = "";
}
```

`[ApiController]` は、Controller ベースの Web API では基本的に付けるものとして覚えます。

