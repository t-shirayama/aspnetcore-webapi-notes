# リソース指向の URL

REST 風の API では、URL をリソース名で表します。

```text
GET    /articles
GET    /articles/10
POST   /articles
PUT    /articles/10
DELETE /articles/10
```

`/getArticles` や `/deleteArticle` のように操作名を URL に入れるより、リソースと HTTP メソッドで表す方が自然です。

URL は **クライアントから見た API の名前** なので、実装都合ではなく利用者目線で決めます。

