# XML コメント

XML コメントを有効にすると、コード内のコメントを API ドキュメントへ反映できます。

```xml
<PropertyGroup>
  <GenerateDocumentationFile>true</GenerateDocumentationFile>
</PropertyGroup>
```

```csharp
/// <summary>
/// 記事を 1 件取得します。
/// </summary>
[HttpGet("{id}")]
public IActionResult Get(int id) => Ok();
```

公開 API では、利用者が迷いやすいパラメーターやエラー条件を説明します。

