import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "luohao",
  tagline: "本站主要用于存放我的学习笔记",
  favicon: "img/favicon.jpg",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://luohao000.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "luohao000", // Usually your GitHub org/user name.
  projectName: "luohao000.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "math",
        path: "math",
        routeBasePath: "math",
        sidebarPath: "./sidebarsMath.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "physics",
        path: "physics",
        routeBasePath: "physics",
        sidebarPath: "./sidebarsPhysics.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "computer-science",
        path: "computer-science",
        routeBasePath: "computer-science",
        sidebarPath: "./sidebarsComputerScience.ts",
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.jpeg",
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: "Home",
      logo: {
        alt: "My Site Logo",
        src: "img/favicon.jpg",
      },
      items: [
        { to: "/math/intro", label: "数学", position: "left" },
        { to: "/physics/intro", label: "物理", position: "left" },
        {
          to: "/computer-science/leetcode-hot-100/hash/two-sum",
          label: "计算机",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/luohao000",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Luo Hao. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
