# Policy ベース認可

ポリシーベース認可は、権限ルールに名前を付けて管理する方法です。

```csharp
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("AdminOnly", policy =>
        policy.RequireRole("Admin"));
});
```

使う側ではポリシー名を指定します。

```csharp
[Authorize(Policy = "AdminOnly")]
public IActionResult Delete(int id) => NoContent();
```

ロールやクレームを組み合わせた認可ルールを整理できます。
