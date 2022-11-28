import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
	"/diary/": [
		{
			text: "记事本",
			icon: "note",
			// prefix: "diary/",
			children: "structure",
		},
	],
	"/lyrics/": [
		{
			text: "歌词",
			icon: "blog",
			children: "structure",
		},
	],
	"/": [
		"",
		{
			text: "如何使用",
			icon: "creative",
			prefix: "demo/",
			link: "demo/",
			children: "structure",
		},
		"pages/intro",
		"pages/slides",
	],
});