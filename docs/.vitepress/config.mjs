import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import gen_top_nav from "./Utils/top_nav_gen.js";
import gen_sidebar from "./Utils/sidebar_gen.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Cyber Security Notes",
    description:
        "CXPh03n1x's cyber security notes about CTF, wargames, and more.",
    themeConfig: {
        logo: "/Sec-Notes-logo-circle.png",
        nav: [{ text: "Home", link: "/" }, ...gen_top_nav()],
        socialLinks: [
            { icon: "github", link: "https://github.com/CXPhoenix/sec-notes" },
        ],
        sidebar: gen_sidebar(),
        search: {
            provider: "local",
        },
    },
    head: [
        ["mata", { property: "og:title", content: "CXPh03n1x's Sec. Notes" }],
        [
            "mata",
            {
                property: "og:description",
                content:
                    "A Cyber security notes about CTF, wargames, and more.",
            },
        ],
        [
            "mata",
            {
                property: "og:image",
                content:
                    "https://sec-notes.cxphoenix.fhsh.taipei/Home/Sec-Notes-logo.png",
            },
        ],
        ["mata", { property: "og:locale", content: "zh-TW" }],
        ["mata", { property: "og:type", content: "website" }],
        [
            "mata",
            {
                property: "og:url",
                content: "https://sec-notes.cxphoenix.fhsh.taipei/",
            },
        ],
        ["mata", { property: "og:site_name", content: "Sec.Notes" }],
    ],
    lastUpdated: true,
    appearance: "force-dark",
    markdown: {
        math: true,
    },
    mermaid: {},
    mermaidPlugin: {
        class: "mermaid my-class",
    },
});
