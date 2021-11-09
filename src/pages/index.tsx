import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SiteQuery } from '../interfaces';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

const IndexPage: React.FC = () => {
  const { site } = useStaticQuery<SiteQuery>(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO pageTitle={site.siteMetadata.title} />
      <p>Hello World</p>
    </Layout>
  );
};

export default IndexPage;
