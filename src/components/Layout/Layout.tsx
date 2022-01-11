import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SiteQuery } from '../../interfaces';
import Header from '../Header';
import Footer from '../Footer';
import SEO from '../Head/SEO';

interface LayoutProps {
  pageTitle: string;
  pageBanner?: string;
  pageBannerAlt?: string;
  pageContentType?: string;
  pageDate?: string;
  pageDescription?: string;
  pagePathname?: string;
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  pageBanner,
  pageBannerAlt,
  pageContentType,
  pageDate,
  pageDescription,
  pagePathname,
  children,
}) => {
  const { site } = useStaticQuery<SiteQuery>(graphql`
    query {
      site {
        siteMetadata {
          title
          social {
            twitter {
              username
              url
              title
            }
            github {
              username
              url
              title
            }
          }
        }
      }
    }
  `);

  const { title, social } = site.siteMetadata;

  return (
    <React.Fragment>
      <SEO pageTitle={pageTitle} />
      <Header title={title} />
      <main>{children}</main>
      <Footer social={social} />
    </React.Fragment>
  );
};

export default Layout;
