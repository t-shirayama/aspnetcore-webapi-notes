# Mass Assignment

Mass Assignment は、想定していないプロパティまで外部から更新されてしまう問題です。

例えば、ユーザー更新 API で Entity をそのまま受け取ると、`IsAdmin` のような本来変更させてはいけない項目まで更新される危険があります。

```csharp
public class User
{
    public string Name { get; set; } = "";
    public bool IsAdmin { get; set; }
}
```

対策として、更新可能な項目だけを持つ Request DTO を使います。

```csharp
public record UpdateUserRequest(string Name);
```

API の入力型は、外部から変更を許可する項目の一覧です。

