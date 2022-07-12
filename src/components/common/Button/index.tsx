import React from 'react';
import {StyledBtn} from './styles';

export type BtnProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  type?: 'btn' | 'link';
  sizeDesktop?: number;
  color?: string;
  sizeMob?: number;
  decoration?: 'underline' | 'none';
  case?: 'uppercase' | 'lowercase' | 'capitalize';
  marginTopDesktop?: number;
  marginTopMob?: number;
  width?: number;
  height?: number;
  weight?: 'light' | 'regular' | 'semi-bold' | 'bold' | 'medium';
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

type Props = BtnProps & { as?: keyof JSX.IntrinsicElements };

export const Button: React.FC<Props> = ({children, ...props}) => (
  <StyledBtn {...props}>
    {children}
  </StyledBtn>
);
