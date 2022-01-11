import React from 'react';
import Context from '../../context/Context';
import styled from '@emotion/styled';
import { ButtonPrimary } from '../../emotion/Button';
import { Heading } from '../../emotion/typography';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <Context.Consumer>
    {({ toggleModal }) => (
      <HeaderElement>
        <Heading>{title}</Heading>
        <ButtonPrimary onClick={toggleModal}>Toggle Modal</ButtonPrimary>
      </HeaderElement>
    )}
  </Context.Consumer>
);

export default Header;

const HeaderElement = styled.header`
  text-align: center;
`;
