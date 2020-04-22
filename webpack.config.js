module.exports = {
    module: {
        rules: [
            {
                test: /\.md$/,
                use: 'raw-loader'
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            }
        ]
    }
}
