# 認証付き API を Swagger で確認する

認証付き API を Swagger UI から試すには、OpenAPI に認証方式を定義します。

JWT Bearer 認証では、Swagger UI の `Authorize` ボタンからトークンを入力して確認します。

```http
Authorization: Bearer {token}
```

開発環境で便利ですが、本番環境で Swagger UI を公開する場合は注意が必要です。

公開範囲、認証の有無、試せる操作の危険性を確認します。

