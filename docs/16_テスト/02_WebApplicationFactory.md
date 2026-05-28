# WebApplicationFactory

`WebApplicationFactory` を使うと、ASP.NET Core アプリをテスト内で起動できます。

```csharp
public class ApiTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public ApiTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }
}
```

`HttpClient` で実際に API を呼び、ステータスコードや JSON を確認します。

