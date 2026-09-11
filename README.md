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
| セットアップ：アカウント作成 | クレジット受け取りに必要なコンソールのアカウント作成 |
| セットアップ：APIクレジットの受け取り方 | 当日配布するクレジットの申請手順、受け取り確認、自費購入 |
| セットアップ：APIキーの発行 | 当日Claude Codeを動かすためのAPIキーの発行手順と注意点 |
| セットアップ：Claude Codeのインストール | macOS / Windows のインストール手順（ターミナル未経験者向けの説明つき） |
| セットアップ：初回起動 | APIキーの設定（macOS / Windows）・起動・最初の1つを作るまで、よく使うコマンド |
| 作例集 | Fable 5.1に投げたプロンプト6本と、生成されたHTML・実測の時間と料金 |
| 参考：利用上限とコストの確認 | 支出上限の設定、使った金額の確認、コストを抑えるコツ |
| 参考：困ったときは | インストール・ログイン・実行のトラブルシューティング |
| アンケート | イベント後アンケート・SNSシェアのお願い |

イベント固有のURL（イベントページ、connpassグループ、アンケートフォームなど）は[`src/consts.ts`](./src/consts.ts)にまとめています。

APIクレジットの申請フォームのURLは、参加者以外の申請を防ぐためサイトには掲載せず、当日会場のスライドでのみ案内します。

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
