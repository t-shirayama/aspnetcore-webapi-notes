# Repository を作るかどうか

Repository は、データアクセスを抽象化するためのパターンです。

EF Core の `DbContext` 自体が Repository に近い役割を持つため、すべてのプロジェクトで独自 Repository が必要なわけではありません。

Repository を作る候補:

- 複雑な問い合わせを再利用したい
- DB 以外の保存先を隠したい
- テストでデータアクセスを差し替えたい
- ドメイン層から EF Core への依存を隠したい

Repository を作らない候補:

- CRUD 中心で薄い API
- `DbContext` を Service 層から使えば十分
- 抽象化が単なる横流しになる

抽象化は、目的があるときに作ります。

