# Controller とは

Controller は、HTTP リクエストを受け取り、アプリ内部の処理を呼び出し、HTTP レスポンスを返すクラスです。

```csharp
[ApiController]
[Route("api/[controller]")]
public class ArticlesController : ControllerBase
{
}
```

ASP.NET Core Web API の Controller は、通常 `ControllerBase` を継承します。

Controller の責務は、HTTP の入口としての処理です。

- ルートに対応する
- リクエスト値を受け取る
- Service を呼ぶ
- 結果をステータスコードと DTO に変換する

業務判断を Controller に詰め込みすぎると、Fat Controller になりやすくなります。

