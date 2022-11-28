import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
	"/en/",
	{
		text: "Diary",
		icon: "note",
		link: "/en/diary/genshin",
	},
	{
		text: "Lyric",
		icon: "blog",
		link: "/en/lyrics/xiju",
	},
	{
		text: "timeline",
		icon: "time",
		link: "/en/timeline/",
	},
	{
		text: "Review",
		icon: "page",
		link: "/en/docs/",
	},
]);
