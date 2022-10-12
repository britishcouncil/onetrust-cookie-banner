/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";

import fg from "fast-glob";
import { parse, resolve } from "path";

const pagesGlob = await fg("src/pages/**/*.html", {
    dot: false,
});

const pages = pagesGlob.reduce((acc, current) => {
    const pageParse = parse(current);
    const pagePath = pageParse.dir.split("/");
    const pageName = pagePath.pop();
    const page = {
        [pageParse.name]: resolve(
            __dirname,
            ...pagePath,
            pageName,
            `${pageParse.name}${pageParse.ext}`
        ),
    };
    return { ...acc, ...page };
}, {});

export default defineConfig(({ command, mode }) => {
    process.env = {
        ...process.env,
        VITE_pages: pages,
    };

    return {
        root: "src",
        server: {
            open: "/pages/index.html",
        },
        build: {
            rollupOptions: {
                input: pages,
            },
            emptyOutDir: true,
        },
    };
});
