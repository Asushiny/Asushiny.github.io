import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
	"/": [
		"",
		{
			text: "如何使用",
			icon: "creative",
			prefix: "demo/",
			link: "demo/",
			children: "structure",
		},
		{
			text: "记事本",
			icon: "creative",
			prefix: "diary/",
			children: "structure",
		},
		{
			text: "歌词",
			icon: "note",
			prefix: "lyrics/",
			children: "structure",
		},
		"intro",
		"slides",
	],
});