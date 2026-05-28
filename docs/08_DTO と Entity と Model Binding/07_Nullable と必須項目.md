# Nullable と必須項目

DTO では、値が必須なのか省略できるのかを型とバリデーションで表します。

```csharp
public sealed class CreateArticleRequest
{
    public required string Title { get; init; }
    public string? Summary { get; init; }
}
```

`string` は基本的に値が必要な項目、`string?` は `null` を許可する項目として読みます。`required` はオブジェクト作成時に値を入れる意図を表します。

ただし、型だけでは空文字や文字数までは防げません。

```csharp
public sealed class CreateArticleRequest
{
    [Required]
    [StringLength(100)]
    public required string Title { get; init; }
}
```

DataAnnotations や FluentValidation は、DTO に入ってきた値が API の入力として妥当かを確認するために使います。

## よくある失敗

- `string?` にしたまま、Service 側で毎回 `null` を気にする
- 必須項目なのに空文字を許してしまう
- Entity の制約と Request DTO の制約がずれている

DTO の Nullable は、クライアントに対する API 契約の一部です。何を必須にするかを曖昧にしないことが重要です。
