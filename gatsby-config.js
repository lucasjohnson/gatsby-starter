module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter',
    url: 'my-gatsby-starter.vercel.app',
    description: 'Bare-bones starter for Gatsby',
    author: 'Lucas Johnson',
    language: 'en',
    banner: {
      image: '',
      alt: '',
    },
    logo: {
      image: '',
      alt: '',
    },
    social: {
      twitter: {
        username: '@_lucasjohnson',
        url: 'https://twitter.com/_lucasjohnson',
        title: 'Twitter',
      },
      github: {
        username: 'lucasjohnson',
        url: 'http://github.com/lucasjohnson',
        title: 'GitHub',
      },
    },
    Error404: '404: Page not found',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bare-bones starter for Gatsby`,
        short_name: `Gatsby Starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        crossOrigin: `use-credentials`,
        cache_busting_mode: `none`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
  ],
};
