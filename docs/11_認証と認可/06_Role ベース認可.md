# Role ベース認可

Role ベース認可は、ユーザーに付いたロールでアクセス可否を判断する方法です。

```csharp
[Authorize(Roles = "Admin")]
public IActionResult Delete(int id)
{
    return NoContent();
}
```

`Admin`、`User`、`Manager` のような単純な権限分類には向いています。

ただし、ロールが増えすぎると管理が難しくなります。条件が複雑な場合は Policy ベース認可を検討します。

