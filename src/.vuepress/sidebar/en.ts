import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
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