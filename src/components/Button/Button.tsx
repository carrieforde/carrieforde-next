import React, { ReactElement } from 'react';
import { ButtonProps } from './Button.interface';

function Button({
  type = 'button',
  children,
  bgColor = 'blue-700',
  color = 'white',
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button
      type={type}
      className={`bg-${bgColor} text-${color} py-2 px-4`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
