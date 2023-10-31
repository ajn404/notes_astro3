import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import lit from '@astrojs/lit';
import vue from '@astrojs/vue';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
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
    ]
});
