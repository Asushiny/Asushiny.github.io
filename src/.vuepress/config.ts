import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import searchPlugin from '@vuepress/plugin-search'
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
	base: "/",

	locales: {
		"/": {
			lang: "zh-CN",
			title: "Austur博客",
			description: "Austur的博客",
		},
		"/en/": {
			lang: "en-US",
			title: "Austur Blog",
			description: "A blog for Austur",
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
		componentsPlugin({
			components: [
				"PDF",
			],
		}),
	],
});