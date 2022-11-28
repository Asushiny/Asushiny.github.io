import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
	"/en/",
	{
		text: "Diary",
		icon: "note",
		link: "/diary/genshin",
	},
	{
		text: "Lyric",
		icon: "blog",
		link: "/lyrics/xiju",
	},
	{
		text: "timeline",
		icon: "time",
		link: "/timeline/",
	},
	{
		text: "Review",
		icon: "page",
		link: "/en/docs/",
	},
]);
