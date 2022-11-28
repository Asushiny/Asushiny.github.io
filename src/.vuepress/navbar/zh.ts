import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "日记",
    icon: "note",
    link: "/diary/genshin",
  },
  {
    text: "歌词",
    icon: "blog",
    link: "/lyrics/xiju",
  },
  {
    text: "时间轴",
    icon: "time",
    link: "/timeline/",
  },
  {
    text: "回顾",
    icon: "page",
    link: "/docs/",
  },
]);
