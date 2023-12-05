function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        }
        return `rgb(var(${variableName}))`;
    };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./node_modules/tw-elements/dist/js/**/*.js",],
    theme: {

        screens: {
            sm: "640px",
        },

        textColor: {
            skin: {
                base: withOpacity("--color-text-base"),
                accent: withOpacity("--color-accent"),
                inverted: withOpacity("--color-fill"),
                blue: '#1fb6ff',
                purple: '#7e5bef',
                pink: '#ff49db',
                orange: '#ff7849',
                green: '#13ce66',
                yellow: '#ffc82c',
                gray: '#8492a6',
                'gray-dark': '#273444',
                'gray-light': '#d3dce6',
            },
        },
        backgroundColor: {
            skin: {
                fill: withOpacity("--color-fill"),
                accent: withOpacity("--color-accent"),
                inverted: withOpacity("--color-text-base"),
                card: withOpacity("--color-card"),
                "card-muted": withOpacity("--color-card-muted"),
            },
        },
        outlineColor: {
            skin: {
                fill: withOpacity("--color-accent"),
            },
        },
        borderColor: {
            skin: {
                line: withOpacity("--color-border"),
                fill: withOpacity("--color-text-base"),
                accent: withOpacity("--color-accent"),
            },
        },
        fill: {
            skin: {
                base: withOpacity("--color-text-base"),
                accent: withOpacity("--color-accent"),
            },
            transparent: "transparent",
        },
        fontFamily: {
            mono: ["IBM Plex Mono", "monospace"],
        },
    },
    plugins: [require("@tailwindcss/typography"), require("tw-elements/dist/plugin.cjs")],
    darkMode: "class"
};
