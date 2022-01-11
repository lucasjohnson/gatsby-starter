import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { SiteQuery } from '../interfaces';
import Layout from '../components/Layout/Layout';
import { Paragraph } from '../emotion/typography';
import GatsbyIcon from '../assets/svg/gatsby.svg';

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
    <Layout pageTitle={site.siteMetadata.title}>
      <motion.div
        className="logo"
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 0.25,
        }}
      >
        <GatsbyIcon />
      </motion.div>
      <Paragraph>{site.siteMetadata.description}</Paragraph>
    </Layout>
  );
};

export default IndexPage;
