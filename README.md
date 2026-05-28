# ASP.NET Core Web API Notes

ASP.NET Core Web API を学ぶための日本語ノート集です。HTTP、DTO、バリデーション、例外設計、認証認可、DI、EF Core、OpenAPI、テスト、セキュリティまで、実務で迷いやすい判断を章ごとに整理します。

`docs` 配下の Markdown を React / Vite 製ビューアで読み込み、GitHub Pages に公開します。デザインとドキュメントの粒度は [csharp-notes](https://github.com/t-shirayama/csharp-notes) と同じ形式にしています。

## 到達目標

このリポジトリだけで実装力まで担保するのではなく、ASP.NET Core Web API の実装に入る前提知識を説明できる状態を目指します。

| 分野 | 合格ライン |
| --- | --- |
| HTTP | メソッド、ステータスコード、ヘッダー、ボディ、冪等性を説明できる |
| API 設計 | URI 設計、ページング、ソート、検索、エラー形式を説明できる |
| ASP.NET Core | ルーティング、ミドルウェア、DI、設定、ログの流れを説明できる |
| Controller | `[ApiController]`、`[Route]`、`ActionResult<T>`、Controller の責務を説明できる |
| DTO | Entity を直接返さない理由、Request DTO / Response DTO、Model Binding、Mass Assignment を説明できる |
| Validation | 入力検証と業務ルール検証の違いを説明できる |
| Error | 例外をそのまま返さない、ProblemDetails、入力エラー、業務エラー、ログ方針を説明できる |
| Auth | 認証・認可の違い、JWT、Role / Policy、`401` / `403`、認可漏れを説明できる |
| DB | `DbContext`、Migration、Tracking / NoTracking、Include、Transaction、N+1、楽観ロックを説明できる |
| Test | 単体・結合・統合・E2E の違いを説明できる |
| Security | CORS、CSRF、XSS、SQL Injection、Secret 管理を説明できる |
| Operation | ヘルスチェック、構造化ログ、相関 ID、監視、設定管理を説明できる |

## 実戦投入知識の優先順位

実務で Web API を担当する前提知識としては、次の順番を重視します。

| 優先 | 分野 | 見る観点 |
| --- | --- | --- |
| 1 | HTTP ステータスコードと REST 設計 | メソッド、URI、ステータスコード、冪等性 |
| 2 | リクエスト / レスポンス設計、DTO | 外部契約、Request DTO、Response DTO、Mass Assignment |
| 3 | バリデーション | 入力検証、業務ルール検証、エラー形式 |
| 4 | エラー設計、ProblemDetails | 例外処理、業務エラー、システムエラー、ログ方針 |
| 5 | DI と責務分離 | Service 層、Repository 判断、Fat Controller 回避 |
| 6 | EF Core とデータアクセス | DbContext、LINQ、N+1、Transaction、楽観ロック |
| 7 | 認証・認可 | 401 / 403、JWT、Role、Policy、認可漏れ |
| 8 | セキュリティ | CORS、CSRF、XSS、SQL Injection、Secret 管理 |
| 9 | テスト戦略 | 単体、結合、統合、E2E、認可テスト |
| 10 | 運用、ログ、ヘルスチェック | 構造化ログ、相関 ID、監視、設定管理 |

## 学ぶ順番

章番号は、実戦投入前に押さえたい順番に合わせています。

```text
01 全体像
02 開発環境
03 Program.cs
04 HTTP と REST
05 API設計とルーティング
06 Controller
07 リクエストとレスポンス
08 DTO と Entity と Model Binding
09 バリデーション
10 例外処理と Problem Details
11 DI と設定
12 ミドルウェアとフィルター
13 データアクセスと EF Core
14 認証と認可
15 セキュリティ
16 テスト
17 ログと運用
18 OpenAPI と API ドキュメント
```

## ローカルで動かす

初回セットアップ:

```bash
npm ci
```

開発サーバー:

```bash
npm run dev
```

本番ビルド:

```bash
npm run build
```

プレビュー:

```bash
npm run preview
```

## ドキュメント構成

ドキュメントは `docs/` に章ごとのフォルダで整理します。

```text
docs/
  01_ASP.NET Core Web API の全体像/
    01_ASP.NET Core Web API とは何か.md
    02_Web API と HTTP.md
    ...
    05_参考サイト.md
```

基本ルール:

- 章フォルダ名は `01_章タイトル` の形式にする。
- 章内の Markdown は `01_タイトル.md` の形式にする。
- 表示順はファイル名先頭の番号で決まる。
- 各章の参考リンクは、章末尾の `xx_参考サイト.md` にまとめる。
- 通常の本文ファイル末尾には個別の参考サイト欄を作らない。

## Markdown の書き方

本文は、初学者が読み返しやすい短い学習ノートとして書きます。

- 見出しはファイル先頭の `#` を基本にする。
- 重要な定義、結論、注意点だけを `**太字**` で強調する。
- 太字は 1 ファイルあたり 2〜5 箇所程度までに抑える。
- 型名、メソッド名、コマンド、HTTP メソッド、ヘッダー名はバッククォートで囲む。
- 下線用の `<u>` やハイライト用の `<mark>` は使わない。
- コード例は短く、学習ポイントが分かる範囲に絞る。
- 処理の流れ、責務の分離、HTTP ステータス判断、認証認可、DI、DB アクセスなど、文章だけでは分かりにくい内容は Mermaid 図を積極的に入れる。
- Mermaid 図は `flowchart` を基本にし、ノートの理解を助ける範囲に絞る。図だけで説明を完結させず、前後に短い説明を添える。

## 公開

GitHub Pages は `.github/workflows/pages.yml` で公開します。

- `main` への push で GitHub Actions が実行される。
- Node.js 22 で `npm ci` と `npm run build` を実行する。
- `dist` を GitHub Pages にデプロイする。

Repository Settings の Pages は、Source を `GitHub Actions` に設定します。

## Node.js バージョン

Vite 8 の要件に合わせて、Node.js は `20.19.0` 以上を使います。GitHub Actions では Node.js 22 を使用します。
