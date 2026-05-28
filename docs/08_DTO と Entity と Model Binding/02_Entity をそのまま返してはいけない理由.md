# Entity をそのまま返してはいけない理由

Entity をそのまま API レスポンスに返すと、内部構造を外部へ公開してしまいます。

実務で問題になりやすいのは次のような点です。

- DB のカラム構造が外部に漏れる
- `PasswordHash`、`IsAdmin`、`DeletedAt` など不要な項目まで返る
- 関連 Entity がつながってレスポンスが大きくなる
- 循環参照で JSON 変換に失敗する
- DB 構造を変えたとき API 仕様まで壊れる

```csharp
public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Email { get; set; } = "";
    public string PasswordHash { get; set; } = "";
    public bool IsAdmin { get; set; }
}
```

この Entity をそのまま返すと、外部に見せたくない情報までレスポンスに含まれる可能性があります。

```csharp
public sealed record UserResponse(
    int Id,
    string Name,
    string Email);
```

**Entity は内部モデル、Response DTO は公開モデル** と分けて考えます。
