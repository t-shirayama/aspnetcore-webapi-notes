# Request DTO と Response DTO

Request DTO は、クライアントから受け取る入力の形です。

Response DTO は、クライアントへ返す出力の形です。

```csharp
public sealed record CreateUserRequest(
    string Name,
    string Email);

public sealed record UserResponse(
    int Id,
    string Name,
    string Email);
```

Request DTO には、外部から変更を許可する項目だけを入れます。

Response DTO には、外部へ公開してよい項目だけを入れます。

| 種類 | 役割 | 入れるもの |
| --- | --- | --- |
| Request DTO | API が受け取る形 | 作成・更新に必要な入力 |
| Response DTO | API が返す形 | 画面やクライアントに公開する情報 |
| Entity | 内部で扱う形 | DB や業務処理に必要な情報 |

作成時に `Id` を受け取らない、更新時に `IsAdmin` を受け取らない、一覧では詳細項目を返さない、という判断がしやすくなります。
