import React from 'react';
import {StyledText} from './styles';

export type TextProps = {
  variant?: 'primary' | 'secondary';
  weight?: 'light' | 'regular' | 'semi-bold' | 'bold' | 'medium';
  textAlign?: 'left' | 'center' | 'right';
  sizeDesktop?: number;
  color?: string;
  sizeMob?: number;
  decoration?: 'underline' | 'none';
  case?: 'uppercase' | 'lowercase' | 'capitalize';
  marginTopDesktop?: number;
  marginTopMob?: number;
  children?: React.ReactNode;
};

type Props = TextProps & { as?: keyof JSX.IntrinsicElements };

export const Text: React.FC<Props> = ({children, ...props}) => (
  <StyledText {...props}>{children}</StyledText>
);
