import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

type FacebookProps = {
  type: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  banner: string;
  bannerAlt: string;
  siteTitle: string;
};

const Facebook = ({
  type,
  title,
  description,
  url,
  locale,
  banner,
  bannerAlt,
  siteTitle,
}: FacebookProps): ReactElement => (
  <Helmet>
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:locale" content={locale} />
    <meta property="og:image" content={banner} />
    <meta property="og:image:alt" content={bannerAlt} />
    <meta property="og:site_name" content={siteTitle} />
  </Helmet>
);

export default Facebook;
