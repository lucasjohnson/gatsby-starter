import React from 'react';
import { ButtonVariant } from '../../enums/Index';

interface ButtonProps {
  onClickFunction: () => void;
  variant: ButtonVariant.ICON | ButtonVariant.PRIMARY | ButtonVariant.SECONDARY;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClickFunction,
  variant,
}) => (
  <button
    className={`button${variant ? ` ${variant}` : ``}`}
    onClick={onClickFunction}
  >
    {children}
  </button>
);

export default Button;
