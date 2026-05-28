# SQL インジェクション

SQL インジェクションは、外部入力を使って意図しない SQL を実行させる攻撃です。

EF Core の LINQ やパラメーター化された SQL を使うと、リスクを減らせます。

危険なのは、ユーザー入力を文字列連結で SQL に埋め込むことです。

```csharp
// 避ける
var sql = $"SELECT * FROM Articles WHERE Title = '{keyword}'";
```

検索条件、並び替え、動的 SQL を扱うときは特に注意します。

