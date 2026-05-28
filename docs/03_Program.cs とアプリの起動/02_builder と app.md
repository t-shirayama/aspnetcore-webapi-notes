# builder と app

`builder` はアプリを組み立てる準備段階で使います。サービス登録や設定の読み込みはここで行います。

```csharp
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
```

`app` は実際のリクエスト処理の流れを作る段階で使います。

```csharp
app.UseHttpsRedirection();
app.MapControllers();
```

大まかには、**登録は `builder.Services`、リクエスト処理は `app`** と覚えると整理しやすいです。

