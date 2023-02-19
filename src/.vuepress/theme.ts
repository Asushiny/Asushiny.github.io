import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
	hostname: "https://Asushiny.github.io",

	author: {
		name: "東Azzz.",
		url: "https://www.austur.top",
	},

	iconAssets: "iconfont",
	//头像
	logo: "/authorAvatar.png",
	// 仓库地址-注释隐藏导航栏的github按钮和页面编辑
	repo: "Asushiny/Asushiny.github.io",
	// false隐藏导航栏的github按钮
	repoDisplay: false,
	//文档在仓库的目录
	docsDir: "src",
	// 文章信息配置 Author作者 Original原创 Date时间 Category分类 Tag标签 ReadingTime阅读时间
	// pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
	pageInfo: ["Author", "Original", "Date", "Category", "Tag"],

	// 全屏
	fullscreen: true,

	// 主题色
	themeColor: {
		blue: "#2196f3",
		red: "#f26d6d",
		green: "#3eaf7c",
		orange: "#fb9b5f",
	},

	blog: {
		medias: {
			BiliBili: "https://example.com",
			Wechat: "https://example.com",
			Dingding: "https://example.com",
			Steam: "https://example.com",
			Gitee: "https://example.com",
			GitHub: "https://example.com",
			Gmail: "https://example.com",
		},
	},

	locales: {
		/**
		 * Chinese locale config
		 */
		"/": {
			// navbar
			navbar: zhNavbar,

			// sidebar
			sidebar: zhSidebar,

			footer: "你制定的计划是.txt还是.exe?",

			displayFooter: true,

			blog: {
				description: "一个普通的打工人",
				intro: "pages/intro.html",
			},

			// page meta
			metaLocales: {
				editLink: "在 GitHub 上编辑此页",
			},
		},

		"/en/": {
			// navbar
			navbar: enNavbar,

			// sidebar
			sidebar: enSidebar,

			footer: "Is your plan .txt or .exe?",

			displayFooter: true,

			blog: {
				description: "An ordinary person",
				intro: "/en/pages/intro.html",
			},

			metaLocales: {
				editLink: "Edit this page on GitHub",
			},
		},
	},

	encrypt: {
		config: {
			"/demo/encrypt.html": ["1234"],
			"/en/demo/encrypt.html": ["1234"],
			"/diary/": ["azzz"],
			"/en/diary/": ["azzz"],
		},
	},

	plugins: {
		blog: {
			// 是否自动形成摘要
			autoExcerpt: true,
		},

		// If you don’t need comment feature, you can remove following option
		// The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
		// To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
		// 评论系统
		// comment: {
		// 	/**
		// 	 * Using Giscus
		// 	 */
		// 	provider: "Giscus",
		// 	repo: "vuepress-theme-hope/giscus-discussions",
		// 	repoId: "R_kgDOG_Pt2A",
		// 	category: "Announcements",
		// 	categoryId: "DIC_kwDOG_Pt2M4COD69",
		// },
		mdEnhance: {
			align: true,
			attrs: true,
			chart: true,
			codetabs: true,
			container: true,
			demo: true,
			echarts: true,
			flowchart: true,
			gfm: true,
			imageLazyload: true,
			imageTitle: true,
			imageSize: true,
			include: true,
			katex: true,
			mark: true,
			mermaid: true,
			playground: {
				presets: ["ts", "vue"],
			},
			presentation: {
				plugins: ["highlight", "math", "search", "notes", "zoom"],
			},
			stylize: [
				{
					matcher: "Recommended",
					replacer: ({ tag }) => {
						if (tag === "em")
							return {
								tag: "Badge",
								attrs: { type: "tip" },
								content: "Recommended",
							};
					},
				},
			],
			sub: true,
			sup: true,
			tabs: true,
			vPre: true,
			vuePlayground: true,
		},

		pwa: {
			favicon: "/logo.ico",
			cacheHTML: true,
			cachePic: true,
			appendBase: true,
			apple: {
				icon: "/logo.ico",
				statusBarColor: "black",
			},
			msTile: {
				image: "/logo.ico",
				color: "#ffffff",
			},
			manifest: {
				icons: [
					{
						src: "/logo.ico",
						sizes: "512x512",
						purpose: "maskable",
						type: "image/png",
					},
					{
						src: "/logo.ico",
						sizes: "192x192",
						purpose: "maskable",
						type: "image/png",
					},
					{
						src: "/logo.ico",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "/logo.ico",
						sizes: "192x192",
						type: "image/png",
					},
				],
				// shortcuts: [
				// 	{
				// 		name: "Demo",
				// 		short_name: "Demo",
				// 		url: "/demo/",
				// 		icons: [
				// 			{
				// 				src: "/assets/icon/guide-maskable.png",
				// 				sizes: "192x192",
				// 				purpose: "maskable",
				// 				type: "image/png",
				// 			},
				// 			{
				// 				src: "/assets/icon/guide-monochrome.png",
				// 				sizes: "192x192",
				// 				purpose: "monochrome",
				// 				type: "image/png",
				// 			},
				// 		],
				// 	},
				// ],
			},
		},
	},
});
