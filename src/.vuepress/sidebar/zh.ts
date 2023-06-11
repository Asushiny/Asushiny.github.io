import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
	"/notes/": [
		{
			text: "学习笔记",
			icon: "note",
			// children: "structure",
			children: [
				{
					text: "英语",
					prefix: "英语/",
					collapsible: true,
					children: "structure",
				},
				{
					text: "数学",
					prefix: "数学/",
					collapsible: true,
					children: "structure",
				},
				{
					text: "政治",
					prefix: "政治/",
					collapsible: true,
					children: "structure",
				},
			],
		},
	],
	"/lyrics/": [
		{
			text: "歌词",
			icon: "blog",
			children: "structure",
		},
	],
	// "/": [
	// 	"",
	// 	{
	// 		text: "如何使用",
	// 		icon: "creative",
	// 		prefix: "demo/",
	// 		link: "demo/",
	// 		children: "structure",
	// 	},
	// 	"pages/intro",
	// 	"pages/slides",
	// ],
});