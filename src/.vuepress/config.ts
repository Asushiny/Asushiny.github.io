import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import searchPlugin from '@vuepress/plugin-search'

export default defineUserConfig({
	base: "/",

	locales: {
		"/": {
			lang: "zh-CN",
			title: "Austur博客",
			description: "東Azzz的博客",
		},
		"/en/": {
			lang: "en-US",
			title: "Austur Blog",
			description: "A blog for 東Azzz",
		},
	},

	theme,

	shouldPrefetch: false,

	plugins: [
		searchPlugin({
			locales: {
				'/': {
					placeholder: '搜索',
				},
				'/en/': {
					placeholder: 'Search',
				},
			},
		}),
	],
});
