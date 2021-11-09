import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

type TwitterProps = {
  title: string;
  description: string;
  url: string;
  banner: string;
  bannerAlt: string;
  twitterHandle: string;
};

const Twitter = ({
  title,
  description,
  url,
  banner,
  bannerAlt,
  twitterHandle,
}: TwitterProps): ReactElement => (
  <Helmet>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:image" content={banner} />
    <meta name="twitter:image:alt" content={bannerAlt} />
    <meta name="twitter:site" content={twitterHandle} />
    <meta name="twitter:creator" content={twitterHandle} />
  </Helmet>
);

export default Twitter;
