# 過剰投稿と Mass Assignment

過剰投稿と Mass Assignment は、クライアントが送った想定外のプロパティまで更新されてしまう問題です。

例えば、ユーザー更新 API で Entity をそのまま受け取ると、クライアントが `IsAdmin` を送って管理者権限を変更できてしまう危険があります。

```csharp
public class User
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Email { get; set; } = "";
    public bool IsAdmin { get; set; }
}
```

```json
{
  "name": "Taro",
  "email": "taro@example.com",
  "isAdmin": true
}
```

対策は、更新を許可する項目だけを持つ Request DTO を使うことです。

```csharp
public sealed record UpdateUserRequest(
    string Name,
    string Email);
```

```mermaid
flowchart TD
    A["JSON Body"] --> B{"Request DTO か"}
    B -- "Entity を直接受ける" --> C["想定外の項目まで更新される危険"]
    B -- "DTO を受ける" --> D["許可した項目だけ更新"]
    D --> E["Entity に明示的に反映"]
```

**外部から変更できる項目は DTO で絞る**、これが Mass Assignment 対策の基本です。
