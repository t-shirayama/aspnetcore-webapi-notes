# Problem Details

Problem Details は、HTTP API のエラー情報を表す標準的な JSON 形式です。

```json
{
  "type": "https://example.com/errors/not-found",
  "title": "Not Found",
  "status": 404,
  "detail": "Article was not found."
}
```

ASP.NET Core では `AddProblemDetails` を使って、エラー形式をそろえられます。

```csharp
builder.Services.AddProblemDetails();
app.UseExceptionHandler();
```

