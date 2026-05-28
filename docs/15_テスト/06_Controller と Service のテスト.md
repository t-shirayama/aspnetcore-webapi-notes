# Controller と Service のテスト

Controller と Service では、テストで確認したいことが違います。

Controller は HTTP の入口です。リクエストを受け取り、Service を呼び、HTTP レスポンスに変換します。

Service は業務処理の中心です。入力値、権限、状態、DB 操作などをもとに、何をするかを判断します。

## Controller で見ること

Controller のテストでは、HTTP として正しく返せるかを見ます。

- 正しいステータスコードを返すか
- 正しい Response DTO を返すか
- バリデーションエラーを `400` として返すか
- 対象がないときに `404` を返すか
- 業務競合を `409` として返すか
- 認証・認可が必要な API を守れているか

ただし、Controller の単体テストを細かく書きすぎると、実際のルーティング、モデルバインディング、フィルター、ミドルウェアを通らないため、API としての確認が弱くなります。

Controller の振る舞いは、`WebApplicationFactory` を使った統合テストで確認する方が自然な場面も多いです。

## Service で見ること

Service のテストでは、業務判断が正しいかを見ます。

- 入力に対して期待した結果になるか
- 権限がない場合に拒否できるか
- 重複時に業務エラーにできるか
- 日付や状態による分岐が正しいか
- DB 更新の対象や値が正しいか
- 外部依存を呼ぶ条件が正しいか

Service は HTTP に依存させない方がテストしやすくなります。

例えば、Service が `IActionResult` を返すようになると、業務ロジックと HTTP の責務が混ざります。Service は業務上の結果を返し、Controller がそれを HTTP ステータスコードへ変換する形にすると整理しやすいです。

## Fat Controller を避ける

Controller に業務ロジックが増えると、テスト対象が曖昧になります。

```csharp
// 避けたい例: Controller に判断が集まりすぎる
if (article.OwnerId != userId)
{
    return Forbid();
}

if (article.IsPublished)
{
    return Conflict();
}
```

このような判断は Service に寄せると、単体テストで確認しやすくなります。

Controller は薄く、Service は業務判断を持つ、という分担を意識します。
