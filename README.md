# Fable 5.1 Build Day

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

> [!NOTE]
> 本リポジトリはAnthropic公式のコンテンツではありません。有志（[moritalous](https://github.com/moritalous)）が運営する、イベント参加者向けの案内サイトです。

[Osaka | Fable 5.1 Build Day](https://luma.com/claude-oec1)（2026年9月19日(土) 14:00〜16:00、大阪開催のClaude Community Event）の案内サイトです。

**📖 サイト**: https://moritalous.github.io/fable-5-1-build-day/

## 📚 ページ構成

| ページ | 内容 |
| :--- | :--- |
| トップ | イベント概要・タイムテーブル・持ち物・注意事項 |
| APIクレジットの受け取り方 | 当日配布するAPIクレジットの申請手順、Claude Codeでの使い方、利用上限の設定 |
| アンケート | イベント後アンケート・SNSシェアのお願い |

イベント固有のURL（アンケートフォーム、クレジット申請フォームなど）は[`src/consts.ts`](./src/consts.ts)にまとめています。未確定のものは`null`にしてあり、ページ側は「当日案内します」の表示に切り替わります。

## 🛠️ 開発

[Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/)で構築しています。ページは`src/content/docs/`配下のMarkdown/MDXファイルです。

```sh
bun install   # 依存関係のインストール
bun dev       # 開発サーバー起動 (localhost:4321)
bun build     # 本番ビルド (./dist/)
```

mainブランチへのpushでGitHub Pagesに自動デプロイされます。

## 📄 ライセンス

[MIT License](./LICENSE)

© 2026 moritalous
