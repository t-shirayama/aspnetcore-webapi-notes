# NotFound と BadRequest

`404 Not Found` は、指定されたリソースが存在しないことを表します。

```csharp
if (article is null)
{
    return Results.NotFound();
}
```

`400 Bad Request` は、リクエストの形式や値が不正なことを表します。

```csharp
if (request.Title.Length == 0)
{
    return Results.BadRequest();
}
```

サーバー側の失敗と、クライアントが修正できる入力ミスを分けて考えます。

