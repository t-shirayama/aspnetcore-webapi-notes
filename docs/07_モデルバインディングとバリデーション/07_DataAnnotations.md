# DataAnnotations

`DataAnnotations` を使うと、入力値にルールを付けられます。

```csharp
public class CreateArticleRequest
{
    [Required]
    [MaxLength(100)]
    public string Title { get; set; } = "";
}
```

Controller に `[ApiController]` が付いている場合、バリデーションエラーは自動的に `400 Bad Request` として返されます。

Minimal API では、必要に応じて自分でバリデーション処理やライブラリを組み合わせます。

