import React from 'react';
import Anchor from '../Core/Anchor';
import Icon from '../Core/Icon';
import { IconType, AnchorVariant } from '../../enums/Index';

interface FooterProps {
  social: {
    twitter: {
      username: string;
      url: string;
      title: string;
    };
    github: {
      username: string;
      url: string;
      title: string;
    };
  };
}

const Footer: React.FC<FooterProps> = ({ social }) => (
  <footer>
    <ul>
      <li>
        <Anchor
          url={social.twitter.url}
          variant={AnchorVariant.EXTERNAL}
          title={social.twitter.title}
        >
          <Icon type={IconType.TWITTER} />
        </Anchor>
      </li>
      <li>
        <Anchor
          url={social.github.url}
          variant={AnchorVariant.EXTERNAL}
          title={social.github.title}
        >
          <Icon type={IconType.GITHUB} />
        </Anchor>
      </li>
    </ul>
  </footer>
);

export default Footer;
