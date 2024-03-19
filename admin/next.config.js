const path = require('path')
// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    output: 'export',
    trailingSlash: true,
    reactStrictMode: false,
    // experimental: {
    //   esmExternals: false,
    //   jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
    // },
    publicRuntimeConfig: {
        apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3013',
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
        }

        config.infrastructureLogging = {
            level: "error",
        };

        return config;
    },
    // assetPrefix: isProd ? (process.env.NEXT_PUBLIC_APP_URL+'/sameem/admin') : undefined,
}
