import React from 'react';
import { IconType } from '../../enums/Index';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

interface IconProps {
  type: string | IconType.TWITTER | IconType.GITHUB;
}

const Icon: React.FC<IconProps> = ({ type }) => {
  let icon;

  switch (type) {
    case IconType.TWITTER:
      icon = <FaTwitter />;
      break;
    case IconType.GITHUB:
      icon = <FaGithub />;
      break;
    case IconType.CROSS:
      icon = <ImCross />;
      break;

    default:
      return null;
  }

  return icon;
};

export default Icon;
