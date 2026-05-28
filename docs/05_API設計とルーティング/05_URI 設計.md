# URI 設計

URI は、API 利用者から見えるリソースの名前です。

基本は、操作名ではなくリソース名を使います。

```text
GET    /articles
GET    /articles/10
POST   /articles
PUT    /articles/10
DELETE /articles/10
```

避けたい例:

```text
GET /getArticles
POST /createArticle
POST /deleteArticle
```

操作は HTTP メソッドで表し、URI は対象を表します。

ネストは必要な範囲に留めます。

```text
GET /users/10/orders
GET /orders?userId=10
```

どちらがよいかは、ユーザー配下の注文として見せたいのか、注文一覧を条件で絞り込みたいのかで決めます。

