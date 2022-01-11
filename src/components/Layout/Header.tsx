import React from 'react';
import Context from '../../context/Context';
import Button from '../Core/Button';
import { ButtonVariant } from '../../enums/index';
import { Heading } from '../../emotion/typography';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <Context.Consumer>
    {({ toggleModal }) => (
      <header>
        <Heading>{title}</Heading>
        <Button variant={ButtonVariant.PRIMARY} onClickFunction={toggleModal}>
          Toggle Modal
        </Button>
      </header>
    )}
  </Context.Consumer>
);

export default Header;
