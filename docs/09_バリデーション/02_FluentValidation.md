# FluentValidation

FluentValidation は、入力値の検証ルールをコードで表現するためのライブラリです。

```csharp
public class CreateArticleRequestValidator : AbstractValidator<CreateArticleRequest>
{
    public CreateArticleRequestValidator()
    {
        RuleFor(request => request.Title)
            .NotEmpty()
            .MaximumLength(100);
    }
}
```

`DataAnnotations` よりも複雑なルールを書きやすく、条件付きの検証や複数項目を使う検証にも向いています。

ただし、標準機能ではないため、チームで導入方針をそろえる必要があります。

