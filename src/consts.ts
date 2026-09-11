/** イベント・外部サービスのURLはここにまとめる。未確定のものは null にしておく。 */

/** Lumaのイベントページ */
export const EVENT_URL = 'https://luma.com/claude-oec1';

/** Claude Community(JP)のconnpassグループ */
export const CONNPASS_URL: string | null = 'https://claude.connpass.com/';

/** アンケートフォーム。未作成のうちは null（ページ上は「当日案内します」の表示になる） */
export const SURVEY_URL: string | null = null;

/**
 * 作ったものの提出フォーム（Anthropic公式「Share what you built with Claude!」）。
 * 必ず「公開用の共有リンク」を設定すること。admin.typeform.com のURLは編集画面なので不可。
 */
export const BUILD_SUBMISSION_URL: string | null = 'https://form.typeform.com/to/VIUAjxNi';

/** APIクレジットの申請フォーム。当日配布するURLが決まったらここに設定する */
export const CREDIT_FORM_URL: string | null = null;
