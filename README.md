# ASP.NET Core Web API Notes

ASP.NET Core Web API を学ぶための日本語ノート集です。HTTP、DTO、バリデーション、例外設計、認証認可、DI、EF Core、OpenAPI、テスト、セキュリティまで、実務で迷いやすい判断を章ごとに整理します。

`docs` 配下の Markdown を React / Vite 製ビューアで読み込み、GitHub Pages に公開します。デザインとドキュメントの粒度は [csharp-notes](https://github.com/t-shirayama/csharp-notes) と同じ形式にしています。

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
