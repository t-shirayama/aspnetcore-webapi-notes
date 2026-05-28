# Authorize 属性

Controller では `[Authorize]` 属性を使って、認証済みユーザーだけがアクセスできるようにします。

```csharp
[Authorize]
[ApiController]
[Route("api/[controller]")]
public class ArticlesController : ControllerBase
{
}
```

特定のアクションだけに付けることもできます。

```csharp
[AllowAnonymous]
[HttpGet]
public IActionResult GetPublicArticles() => Ok();
```

公開 API と保護 API の境界を明確にします。

