import styled, {css, useTheme} from 'styled-components';
import {TextProps} from './index';
import {palette} from '../../../constants/palette';

export const fontSizeDesktop = ({sizeDesktop}: TextProps) => {
  if (sizeDesktop) {
    return `${sizeDesktop}px`;
  }
};

const fontSizeMobile = ({sizeMob, sizeDesktop}: TextProps) => {
  if (sizeMob) {
    return `${
      sizeMob ? `${sizeMob}px` : `${sizeDesktop ? `${sizeDesktop}px` : '12px'}`
    }`;
  }
};

export const fontWeight = ({weight}: TextProps) => {
  switch (weight) {
    case 'bold':
      return 700;
    case 'semi-bold':
      return 600;
    case 'medium':
      return 500;
    case 'regular':
      return 400;
    default:
      return 500;
  }
};

const textDecoration = ({decoration}: TextProps) => {
  return decoration ? decoration : 'none';
};

const textAlign = ({textAlign}: TextProps) => {
  if (textAlign) {
    return textAlign;
  }
  return 'left';
};
const textColor = ({color, variant}: TextProps) => {
  const theme = useTheme() as typeof palette.dark;
  if (variant) {
    return `${variant === 'primary' ? theme.primaryText : theme.gray}`;
  }
  if (color) {
    return `${color ? `${color}` : theme.primaryText}`;
  }
};

const marginTopDesktop = ({marginTopDesktop}: TextProps) => {
  if (marginTopDesktop) {
    return `${marginTopDesktop ? `${marginTopDesktop}px` : '0'}`;
  }
};

const marginTopMob = ({marginTopMob}: TextProps) => {
  if (marginTopMob) {
    return `${marginTopMob ? `${marginTopMob}px` : '0'}`;
  }
};

const styles = css`
  font-family: Montserrat, sans-serif;
  font-size: ${fontSizeDesktop};
  text-align: ${textAlign};
  font-weight: ${fontWeight};
  text-decoration: ${textDecoration};
  line-height: ${fontSizeDesktop};
  color: ${textColor};
  margin-top: ${marginTopDesktop};
  @media (max-width: 769px) {
    font-size: ${fontSizeMobile};
    line-height: ${fontSizeMobile};
    margin-top: ${marginTopMob};
  }
`;

export const StyledText = styled.div<TextProps>`
  ${styles};
`;
