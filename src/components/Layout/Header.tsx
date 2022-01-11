import React from 'react';
import { Heading } from '../../emotion/Typography';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <Heading>{title}</Heading>
    </header>
  );
};

export default Header;
