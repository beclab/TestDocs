import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { en } from "./en";
import { zh } from "./zh";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Olares",
  description: "Let people own their data again",
  lang: "en",
  locales: {
    root: {
      label: "English",
      ...en,
    },
    zh: {
      label: "简体中文",
      ...zh,
    },
  },
  themeConfig: {
    search: {
      provider: "algolia",
      options: {
        appId: "DZ6H2FVQGO",
        apiKey: "e5257d88b605dc0e5b82b12854aea9a5",
        indexName: "olares",
        searchParameters: {
          queryLanguages: ["zh", "en"],
        },
        locales: {
          zh: {
            placeholder: "搜索文档",
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                searchBox: {
                  resetButtonTitle: "清除查询条件",
                  resetButtonAriaLabel: "清除查询条件",
                  cancelButtonText: "取消",
                  cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                  recentSearchesTitle: "搜索历史",
                  noRecentSearchesText: "没有搜索历史",
                  saveRecentSearchButtonTitle: "保存至搜索历史",
                  removeRecentSearchButtonTitle: "从搜索历史中移除",
                  favoriteSearchesTitle: "收藏",
                  removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                  titleText: "无法获取结果",
                  helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                  searchByText: "搜索提供者",
                },
                noResultsScreen: {
                  noResultsText: "无法找到相关结果",
                  suggestedQueryText: "你可以尝试查询",
                  reportMissingResultsText: "你认为该查询应该有结果？",
                  reportMissingResultsLinkText: "点击反馈",
                },
              },
            },
          },
        },
      },
    },
  },

  sitemap: {
    hostname: "https://docs.olares.com/",
  },
  lastUpdated: true,
  base: process.env.DOC_BASE || "/",
  vite: {
    build: {
      minify: "terser",
      chunkSizeWarningLimit: Infinity,
    },
  },
  head: [
    [
      "meta",
      {
        name: "google-site-verification",
        content: "3AzyPY6Q-LxE8CBNwz6ppsqDJ4iQaiPY9V0MHJbQlbU",
      },
    ],
    // 引入 Material Design Icons
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,200,0..1,-50..200",
      },
    ],
  ],
});
