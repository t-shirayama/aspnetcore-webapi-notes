# Minimal API と Controller

ASP.NET Core Web API には、大きく分けて Minimal API と Controller があります。

Minimal API は `Program.cs` にエンドポイントを直接書ける軽量な方式です。

```csharp
app.MapGet("/articles", () => articles);
```

Controller はクラスと属性を使って API を整理する方式です。

```csharp
[ApiController]
[Route("api/[controller]")]
public class ArticlesController : ControllerBase
{
}
```

小さな API やサンプルは Minimal API、大きくなりやすい業務 API は Controller で整理すると理解しやすいです。

