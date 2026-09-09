// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';

import { EVENT_URL } from './src/consts.ts';

const base = '/fable-5-1-build-day';

// 本文中のルート相対リンク(/credits/…など)にbaseを付与する
function rehypeBaseLinks() {
	const walk = (node) => {
		if (node.type === 'element' && node.tagName === 'a') {
			const href = node.properties?.href;
			if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && !href.startsWith(`${base}/`)) {
				node.properties.href = base + href;
			}
		}
		for (const child of node.children ?? []) walk(child);
	};
	return (tree) => walk(tree);
}

// https://astro.build/config
export default defineConfig({
	site: 'https://moritalous.github.io',
	base,
	markdown: {
		processor: unified({
			rehypePlugins: [
				[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
				rehypeBaseLinks,
			],
		}),
	},
	integrations: [
		starlight({
			title: 'Fable 5.1 Build Day',
			description:
				'Fable 5.1公開記念のBuild Day（大阪開催のClaude Community Event）の案内ページ。',
			defaultLocale: 'root',
			locales: {
				root: { label: '日本語', lang: 'ja' },
			},
			customCss: [
				'@fontsource/line-seed-jp/400.css',
				'@fontsource/line-seed-jp/700.css',
				'./src/styles/custom.css',
			],
			social: [
				{ icon: 'rocket', label: 'イベントページ (Luma)', href: EVENT_URL },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/moritalous' },
			],
			sidebar: [
				{ label: 'トップ', link: '/' },
				{
					label: '事前準備',
					items: [{ autogenerate: { directory: 'preparation/' } }],
				},
				{
					label: 'イベント当日',
					items: [
						{ label: 'APIクレジットの受け取り方', slug: 'credits' },
						{ label: 'アンケート', slug: 'survey' },
					],
				},
				{
					label: '参考',
					items: [{ autogenerate: { directory: 'reference/' } }],
				},
			],
		}),
	],
});
