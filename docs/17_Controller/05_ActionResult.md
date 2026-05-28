# ActionResult

`ActionResult<T>` は、Web API の Action で「成功時の値」と「HTTP レスポンス」を表すために使います。

```csharp
[HttpGet("{id}")]
public ActionResult<ArticleResponse> Get(int id)
{
    var article = service.Find(id);

    if (article is null)
    {
        return NotFound();
    }

    return Ok(article);
}
```

`ArticleResponse` を返せる一方で、`NotFound()` や `BadRequest()` のような HTTP レスポンスも返せます。

よく使う戻り値:

| 戻り値 | 意味 |
| --- | --- |
| `Ok(value)` | `200 OK` |
| `CreatedAtAction(...)` | `201 Created` |
| `NoContent()` | `204 No Content` |
| `BadRequest(...)` | `400 Bad Request` |
| `Unauthorized()` | `401 Unauthorized` |
| `Forbid()` | `403 Forbidden` |
| `NotFound()` | `404 Not Found` |
| `Conflict(...)` | `409 Conflict` |

Controller は、Service の結果を `ActionResult<T>` として HTTP に変換する場所です。

