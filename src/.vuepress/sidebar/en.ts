import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
	"/en/diary/": [
		{
			text: "Notepad",
			icon: "creative",
			children: "structure",
		},
	],
	"/en/lyrics/": [
		{
			text: "Lyric",
			icon: "note",
			children: "structure",
		},
	],
	"/en/": [
		"",
		{
			text: "Demo",
			icon: "discover",
			prefix: "demo/",
			link: "demo/",
			children: "structure",
		},
		"pages/intro",
		"pages/slides",
	],
});