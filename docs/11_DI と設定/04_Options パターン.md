# Options パターン

Options パターンは、設定値を型として受け取る仕組みです。

```csharp
public class AppOptions
{
    public string ServiceName { get; set; } = "";
}

builder.Services.Configure<AppOptions>(
    builder.Configuration.GetSection("App"));
```

利用側では `IOptions<AppOptions>` や `IOptionsSnapshot<AppOptions>` を受け取ります。

設定値を型にすると、キー文字列の散らばりを減らせます。

