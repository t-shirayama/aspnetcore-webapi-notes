# DbContext

`DbContext` は、データベースとのやり取りを管理する中心的なクラスです。

```csharp
public class AppDbContext : DbContext
{
    public DbSet<Article> Articles => Set<Article>();

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }
}
```

ASP.NET Core では DI に登録して、エンドポイントやサービスから受け取ります。

```csharp
builder.Services.AddDbContext<AppDbContext>();
```

