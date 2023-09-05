const {config: envConfig} = require("dotenv");

envConfig({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: 'HealthMarkets',
        siteUrl: 'https://www.healthmarkets.com',
        description: 'Your Insurance Marketplace!',
        author: '@NightMarket',
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation
    // and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    assetPrefix: '/core-assets',
    plugins: [
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                url: process.env.WPGRAPHQL_URL,
                schema: {
                    typePrefix: `Wp`,
                },
                develop: {
                    hardCacheMediaFiles: true,
                    hardCacheData: true
                }
            }
        },
        {
            resolve: "gatsby-source-graphql",
            options: {
                // Remote schema query type. This is an arbitrary name.
                typeName: "WPGraphQL",
                // Field name under which it will be available. Used in your Gatsby query. This is also an arbitrary name.
                fieldName: "wpcontent",
                // GraphQL endpoint, relative to your WordPress home URL.
                url: process.env.WPGRAPHQL_URL,
            },
        },
        /*{
            resolve: `gatsby-plugin-emotion`,
            options: {
                cssPropOptimization: true,
            }
        },*/
        {
          resolve: `gatsby-plugin-canonical-urls`,
          options: {
            siteUrl: `https://www.healthmarkets.com`,
          },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'images',
                path: './src/static/images/',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'fonts',
                path: './src/static/fonts/',
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                `open sans\:400,700`
              ]
            }
        },
        'emotion-cache-plugin',
        {
            resolve: 'gatsby-source-algolia',
            options: {
                indexName: 'hm-agents',
                gatsbyTypeName: 'Agents',
                dependencies: ['objectID', 'permalink', 'email', 'commercial_health', 'life', 'supplemental', 'wellness', 'medicare', 'city', 'state', 'active'],
                getSlug: (data) => {
                    if (data.email.includes('healthmarkets')) {
                        const replaced = data.email.replace('@healthmarkets.com', '');
                        return replaced.toLowerCase();
                    }
                    return undefined;
                },
            },
        },
    ],
};

// export default config;
