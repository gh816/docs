import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  organizationName: 'facebook',
  projectName: 'docusaurus',

  // onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', 'zh-Hans'], // Add multiple locales here
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: "@theme/ApiItem",
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    
  ],
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "openapi", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          oa: {
            specPath: "openapi_tags_cleaned1.json",
            outputDir: "docs/apis",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ]
  ],
  themes: [
    // [
    //   // @ts-ignore
    //   '@easyops-cn/docusaurus-search-local',
    //   /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
    //   // require.resolve("@easyops-cn/docusaurus-search-local"),
    //   // @ts-ignore
    //   ({
    //     hashed: true,
    //     language: ["en", "zh"],
    //     highlightSearchTermsOnTargetPage: true,
    //     indexDocs: true,
    //     indexBlog: false,
    //     indexPages: true,
    //     explicitSearchResultPath: true,
    //   }),
    // ],
    "docusaurus-theme-openapi-docs"
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/gitcode-logo-dark.png',
        srcDark: 'img/logoDark.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'GitCode 首页',
        },
        {to: 'docs/help', label: '帮助文档', position: 'left'},
        {to: '/blog', label: '官方博客', position: 'left'},
        {
          label: "API 文档",
          position: "left",
          to: "docs/apis/clean-docs",
        },
        {to: 'docs/community-support', label: '社区支持', position: 'left'},
        
        {
          type: 'localeDropdown', // Add language switch dropdown
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'TO88Y61LRL',

      // Public API key: it is safe to commit it
      apiKey: 'cb38598805b9aabf9a1dba105b573d5e',

      indexName: 'docusaurus-api',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

    },
    metadata: [{name: 'twitter:card', content: 'summary'}],
  } satisfies Preset.ThemeConfig,
};

export default config;
