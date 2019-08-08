module.exports = {
    devServer: {
        proxy: {
            '/API': {
                target: 'http://192.168.1.199:6521', //对应自己的接口
                changeOrigin: true
                // ws: true,
                // pathRewrite: {
                //     '^/api': ''
                // }
            }
        },
        disableHostCheck: true
    }
}