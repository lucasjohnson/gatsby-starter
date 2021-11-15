import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SiteQuery } from '../interfaces';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Head/SEO';
import { Paragraph } from '../emotion/typography';

const IndexPage: React.FC = () => {
  const { site } = useStaticQuery<SiteQuery>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO pageTitle={site.siteMetadata.title} />
      <Paragraph>{site.siteMetadata.description}</Paragraph>
    </Layout>
  );
};

export default IndexPage;
