import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SiteQuery } from '../interfaces';
import Layout from '../components/Layout/Layout';

const ErrorPage: React.FC = () => {
  const { site } = useStaticQuery<SiteQuery>(graphql`
    query {
      site {
        siteMetadata {
          error404
        }
      }
    }
  `);

  return (
    <Layout pageTitle={site.siteMetadata.error404}>
      <h2>{site.siteMetadata.error404}</h2>
    </Layout>
  );
};

export default ErrorPage;
