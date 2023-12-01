import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import lit from '@astrojs/lit';
import vue from '@astrojs/vue';
// import vue  from "@vitejs/plugin-vue";
import remarkToc from "remark-toc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./plugin/remark-reading-time.mjs";
import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import path from 'path';
import { fileURLToPath } from 'url'

const __filenameNew = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filenameNew)
console.log('dir name', __dirname);
// https://astro.build/config
export default defineConfig({
    server: {
        port: 3333,
        open: true,
    },
    base: "/notes_astro3",
    build: {
        assets: "static",
        inlineStylesheets: "always",
    },
    site: "https://ajn404.github.io/notes_astro3/", // replace this with your deployed domain
    integrations: [
        mdx(),
        sitemap(),
        react({
            include: ["**/react/*"]
        }),
        lit({
            include: ["**/lit/*"]
        }),
        vue({}),
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        })
    ],
    markdown: {
        remarkPlugins: [
            [
                remarkToc,
                {
                    heading: "目录",
                },
            ],
            [
                remarkCollapse,
                {
                    test: "脚本",
                    summary: str => "展开 " + str,
                },
            ],
            remarkMath,
            remarkReadingTime,
        ],
        rehypePlugins: [rehypeKatex, rehypeAutolinkHeadings],
        shikiConfig: {
            theme: "one-dark-pro",
            wrap: true,
        },
        extendDefaultPlugins: true,
    },
    vite: {
        optimizeDeps: {
            exclude: ["@resvg/resvg-js"],
        },
        ssr: {
            noExternal: [
                "@notes/editor", "@shoelace-style/shoelace"
            ]
        },
        build: {
            rollupOptions: {
                plugins: [
                    // resolve(),
                    // commonjs(),
                    copy({
                        copyOnce: true,
                        targets: [
                            {
                                src: path.resolve(__dirname, 'node_modules/@shoelace-style/shoelace/dist/assets'),
                                dest: path.resolve(__dirname, 'dist/shoelace')
                            }
                        ]
                    }),
                    css({
                        output: 'bundle.css'
                    }),
                ]
            }
        }
    },
});
