import React from 'react';
import { Link } from 'gatsby';
import { AnchorVariant } from '../../enums/Index';

interface AnchorProps {
  className?: string;
  onClick?: () => void;
  title: string;
  url: string;
  variant: AnchorVariant.LINK | AnchorVariant.EXTERNAL;
}

const Anchor: React.FC<AnchorProps> = ({
  className,
  onClick,
  title,
  url,
  variant,
  children,
}) => {
  let anchor;

  switch (variant) {
    case `link`:
      anchor = (
        <Link
          className={`${className ? `${className} ` : ''}${variant}`}
          to={url}
          title={title}
          onClick={onClick}
        >
          {children}
        </Link>
      );
      break;
    case `external`:
      anchor = (
        <a
          className={`${className ? `${className} ` : ''}${variant}`}
          href={url}
          title={`${title} opens in new tab`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
      break;
    default:
      return null;
  }

  return anchor;
};

export default Anchor;
