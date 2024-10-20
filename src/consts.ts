// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "原子之星乐队";
export const SITE_TITLE = "原子之星乐队";
export const SITE_DESCRIPTION = "原子之星乐队官方网站";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "原子之星";
export const USER_SITE = "http://112.124.33.59/articles/179"
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "主页", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "关于", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "文章",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "全部",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "技术",
        href: "/blog/categories/tech",
        svg: "cube",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "生活",
        href: "/blog/categories/life",
        svg: "heart",
        target: "_self",
      }, // Life category
      {
        id: "music",
        text: "生活",
        href: "/blog/categories/music",
        svg: "heart",
        target: "_self",
      },//music
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "项目",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "友链",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "联系",
    href: "mailto:3825081196@qq.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://mzy.black-hole.asia",
    ariaLabel: "Support my work",
    title: "Support my work",
    svg: "support",
  },
  {
    href: "http://github.com/Maoziyu0416",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://www.bilibili.com/video/BV1UT42167xb/?share_source=copy_web&vd_source=85a4b247f79aed69f038fbb3475fc45c",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
  //{
  //  href: "/rss.xml",
  //  ariaLabel: "RSS Feed",
  //  title: "RSS Feed",
  //  svg: "rss",
  //},
];
