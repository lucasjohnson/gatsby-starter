import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { SiteQuery } from '../../interfaces';
import Twitter from './Twitter';
import Facebook from './Facebook';

interface SeoProps {
  pageBanner?: string;
  pageBannerAlt?: string;
  pageContentType?: 'NewsArticle';
  pageDate?: string;
  pageDescription?: string;
  pagePathname?: string;
  pageTitle: string;
}

const SEO: React.FC<SeoProps> = ({
  pageBanner,
  pageBannerAlt,
  pageContentType,
  pageDate,
  pageDescription,
  pagePathname,
  pageTitle,
}) => {
  const { site } = useStaticQuery<SiteQuery>(graphql`
    query {
      site {
        buildTime
        siteMetadata {
          title
          siteUrl
          description
          author
          language
          banner {
            image
            alt
          }
          logo {
            image
            alt
          }
          social {
            twitter {
              username
            }
          }
        }
      }
    }
  `);

  const {
    title,
    siteUrl,
    description,
    author,
    banner,
    logo,
    language,
    social,
  } = site.siteMetadata;

  const { buildTime } = site;

  const schemaWebPage = {
    '@context': `http://schema.org`,
    '@type': `WebPage`,
    url: siteUrl,
    description: description,
    inLanguage: language,
    mainEntityOfPage: siteUrl,
    name: title,
    author: {
      '@type': `Person`,
      name: author,
    },
    copyrightHolder: {
      '@type': `Person`,
      name: author,
    },
    copyrightYear: `2020`,
    creator: {
      '@type': `Person`,
      name: author,
    },
    publisher: {
      '@type': `Person`,
      name: author,
    },
    datePublished: ``,
    dateModified: ``,
    image: {
      '@type': `ImageObject`,
      url: logo.image,
    },
  };

  const itemListElement = [
    {
      '@type': `ListItem`,
      item: {
        '@id': siteUrl,
        name: `Homepage`,
      },
      position: 1,
    },
    {
      '@type': `ListItem`,
      item: {
        '@id': `${siteUrl}`,
        name: `Blog`,
      },
      position: 1,
    },
  ];

  let schemaArticle = null;

  if (pageContentType) {
    schemaArticle = {
      '@context': `http://schema.org`,
      '@type': pageContentType,
      author: {
        '@type': `Person`,
        name: author,
      },
      copyrightHolder: {
        '@type': `Person`,
        name: author,
      },
      copyrightYear: pageDate && pageDate.substr(pageDate.length - 4),
      creator: {
        '@type': `Person`,
        name: author,
      },
      publisher: {
        '@type': `Organization`,
        name: author,
        logo: {
          '@type': `ImageObject`,
          url: `${siteUrl}${logo}`,
        },
      },
      description: description,
      headline: title,
      inLanguage: language,
      url: `${siteUrl}${pagePathname}`,
      name: title,
      image: {
        '@type': `ImageObject`,
        url: `${siteUrl}/${banner}`,
      },
      mainEntityOfPage: `${siteUrl}/${pagePathname}`,
      datePublished: pageDate,
      dateModified: buildTime,
    };

    itemListElement.push({
      '@type': `ListItem`,
      item: {
        '@id': `${siteUrl}${pagePathname}`,
        name: title,
      },
      position: 2,
    });
  }

  const breadcrumbs = {
    '@context': `http://schema.org`,
    '@type': `BreadcrumbList`,
    description: `Breadcrumbs list`,
    name: `Breadcrumbs`,
    itemListElement,
  };

  const metaTitle: string = pageTitle ? pageTitle : title;
  const metaDescription: string = pageDescription
    ? pageDescription
    : description;
  const metaUrl: string = pagePathname ? `${siteUrl}${pagePathname}` : siteUrl;
  const metaBanner: string = pageBanner
    ? `${siteUrl}${pageBanner}`
    : `${siteUrl}${banner.image}`;
  const metaBannerAlt: string = pageBannerAlt ? pageBannerAlt : banner.alt;
  const metaContentType: string = pageContentType ? pageContentType : `Website`;

  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{
          lang: language,
        }}
        title={metaTitle}
        titleTemplate={`%s${pageTitle !== title ? ' | ' + title : ''}`}
      >
        <meta name="description" content={metaDescription} />
        <meta name="image" content={metaBanner} />
        {!pageContentType && (
          <script type="application/ld+json">
            {JSON.stringify(schemaWebPage)}
          </script>
        )}
        {pageContentType && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbs)}
        </script>
      </Helmet>
      <Twitter
        title={metaTitle}
        description={metaDescription}
        url={metaUrl}
        banner={metaBanner}
        bannerAlt={metaBannerAlt}
        twitterHandle={social.twitter.username}
      />
      <Facebook
        type={metaContentType}
        title={metaTitle}
        description={metaDescription}
        url={metaUrl}
        locale={language}
        banner={metaBanner}
        bannerAlt={metaBannerAlt}
        siteTitle={title}
      />
    </React.Fragment>
  );
};

export default SEO;
