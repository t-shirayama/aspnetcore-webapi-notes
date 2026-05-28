# Web API と HTTP

Web API は HTTP の上に作られます。HTTP メソッド、URL、ステータスコード、ヘッダー、ボディを使って、クライアントとサーバーがやり取りします。

代表的な対応は次の通りです。

| 操作 | HTTP メソッド | 例 |
| --- | --- | --- |
| 一覧取得 | `GET` | `GET /articles` |
| 1 件取得 | `GET` | `GET /articles/1` |
| 作成 | `POST` | `POST /articles` |
| 更新 | `PUT` / `PATCH` | `PUT /articles/1` |
| 削除 | `DELETE` | `DELETE /articles/1` |

ASP.NET Core のコードを書く前に、**HTTP として何を表現するか** を決めることが大切です。

