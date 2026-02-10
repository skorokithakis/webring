import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
import { minify } from "html-minifier-terser"

export default function (config) {
    config.addPlugin(syntaxHighlight)

    config.addLayoutAlias("base", "base.njk")
    config.addLayoutAlias("page", "page.njk")

    config.addFilter("mapNodes", function (nodes, radius, width, height) {
        return nodes.map((node, index) => {
            const angle = (index / (nodes.length / 2)) * Math.PI
            const x = radius * Math.cos(angle) + width / 2
            const y = radius * Math.sin(angle) + height / 2

            return {
                title: node.title,
                url: node.url,
                x,
                y,
            }
        })
    })

    config.addTransform("htmlmin", async function (content) {
        if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
            return await minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            })
        }
        return content
    })

    config.addPassthroughCopy("src/assets/images")

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "includes",
            layouts: "layouts",
            data: "data",
        },
        templateFormats: ["njk", "md", "css"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
    }
}
