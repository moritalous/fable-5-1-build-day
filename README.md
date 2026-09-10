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
| 事前準備 1. Claude Platformアカウントを作る | クレジット受け取りに必要なコンソールのアカウント作成 |
| 事前準備 2. Claude Codeをインストールする | macOS / Windows のインストール手順（ターミナル未経験者向けの説明つき） |
| 事前準備 3. 初回起動とログイン | 起動・ログイン・最初の1つを作るまで、よく使うコマンド |
| APIクレジットの受け取り方 | 当日配布するクレジットの申請手順、受け取り確認、自費購入 |
| アンケート | イベント後アンケート・SNSシェアのお願い |
| 参考：APIキーの発行と設定 | APIキーの発行手順と環境変数の設定（macOS / Windows） |
| 参考：利用上限とコストの確認 | 支出上限の設定、使った金額の確認、コストを抑えるコツ |
| 参考：困ったときは | インストール・ログイン・実行のトラブルシューティング |

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
