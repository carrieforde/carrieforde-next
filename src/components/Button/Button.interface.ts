import { ReactNode } from 'react';

export interface ButtonProps {
  bgColor: string;
  color: string;
  type: 'button' | 'reset' | 'submit';
  children: ReactNode;
  onClick?: () => void;
}
