# Model Binding とは何か

Model Binding は、HTTP リクエストの値を Controller の Action 引数や DTO に入れる仕組みです。

ASP.NET Core は、ルート、クエリ文字列、ヘッダー、ボディなどから値を読み取り、型に変換します。

```csharp
[HttpGet("{id:int}")]
public ActionResult<UserResponse> GetById(int id)
{
    // id は URL からバインドされる
}

[HttpPost]
public ActionResult<UserResponse> Create(CreateUserRequest request)
{
    // request は主に JSON ボディからバインドされる
}
```

代表的な入力元は次の通りです。

| 入力元 | 例 |
| --- | --- |
| Route | `/users/10` の `10` |
| Query | `/users?page=1` の `page` |
| Body | JSON のリクエストボディ |
| Header | `Authorization` や独自ヘッダー |

Model Binding は便利ですが、受け取る型を Entity にすると、想定外の項目まで受け取る事故につながります。API の境界では Request DTO を使います。
