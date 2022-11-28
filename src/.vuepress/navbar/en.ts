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
		icon: "edit",
		link: "/lyrics/xiju",
	},
	{
		text: "timeline",
		icon: "note",
		link: "/timeline/",
	},
	{
		text: "Review",
		icon: "note",
		link: "/en/docs/",
	},
]);
