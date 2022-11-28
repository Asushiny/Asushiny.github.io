import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Demo",
      icon: "discover",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
	{
		text: "Notepad",
		icon: "creative",
		prefix: "diary/",
		children: "structure",
	},
    {
      text: "Lyric",
      icon: "note",
      prefix: "lyrics/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});