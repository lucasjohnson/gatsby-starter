import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SiteQuery } from '../../interfaces';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = ({ children }) => {
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
      <Header title={title} />
      <main>{children}</main>
      <Footer social={social} />
    </React.Fragment>
  );
};

export default Layout;
