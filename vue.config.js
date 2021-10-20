import remarkGfm from "remark-gfm";

export default {
    chainWebpack: config => {
        config.module
            .rule('mdx')
            .test(/\.mdx?$/)
            .use('babel-loader')
            .loader('babel-loader')
            .options({plugins: ['@vue/babel-plugin-jsx'], /* Other options… */})
            .end()
            .use('@mdx-js/loader')
            .loader('@mdx-js/loader')
            .options({jsx: true, remarkPlugins: [remarkGfm], /* otherOptions… */})
            .end()
    }
}
