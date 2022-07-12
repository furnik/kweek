import styled, {css, useTheme} from 'styled-components';
import {palette} from '../../../constants/palette';
import {BtnProps} from './index';

export const fontSizeDesktop = ({sizeDesktop}: BtnProps) => {
  if (sizeDesktop) {
    return `${sizeDesktop}px`;
  }
};

const fontSizeMobile = ({sizeMob, sizeDesktop}: BtnProps) => {
  if (sizeMob) {
    return `${
      sizeMob ? `${sizeMob}px` : `${sizeDesktop ? `${sizeDesktop}px` : '12px'}`
    }`;
  }
};

const textColor = ({isActive, variant}: BtnProps) => {
  const theme = useTheme() as typeof palette.dark;
  switch (variant) {
    case 'primary':
      if (isActive) {
        return theme.followBtnTextActive;
      }
      return theme.followBtnText;
    case 'secondary':
      return theme.white;
    case 'tertiary':
      return theme.gray;
    default:
      return theme.primaryText;
  }
};

const backgroundColor = ({variant, type, isActive}: BtnProps) => {
  const theme = useTheme() as typeof palette.dark;
  if (type === 'link') {
    return 'none';
  }
  switch (variant) {
    case 'primary':
      if (isActive) {
        return theme.followBtnBgActive;
      }
      return theme.followBtnBg;
    case 'secondary':
      return theme.purple;
    case 'tertiary':
      return theme.primaryBg;
    default:
      return theme.green;
  }
};
const border = ({variant, isActive}: BtnProps) => {
  const theme = useTheme() as typeof palette.light;
  if (variant === 'primary' && isActive && theme?.followBorder) {
    return `2px solid ${theme.followBorder}`;
  }
  return 'none';
};

const marginTopDesktop = ({marginTopDesktop}: BtnProps) => {
  if (marginTopDesktop) {
    return `${marginTopDesktop ? `${marginTopDesktop}px` : '0'}`;
  }
};

const marginTopMob = ({marginTopMob}: BtnProps) => {
  if (marginTopMob) {
    return `${marginTopMob ? `${marginTopMob}px` : '0'}`;
  }
};

const width = ({width}: BtnProps) => {
  if (width) {
    return `${width ? `${width}px` : 'max-content'}`;
  }
};

const height = ({height}: BtnProps) => {
  if (height) {
    return `${height ? `${height}px` : 'max-content'}`;
  }
};

export const fontWeight = ({weight}: BtnProps) => {
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

const textDecoration = ({decoration}: BtnProps) => {
  return decoration ? decoration : 'none';
};

const styles = css`
  font-family: Montserrat, sans-serif;
  font-size: ${fontSizeDesktop};
  font-weight: ${fontWeight};
  line-height: ${fontSizeDesktop};
  color: ${textColor};
  margin-top: ${marginTopDesktop};
  background: ${backgroundColor};
  text-decoration: ${textDecoration};
  border: ${border};
  cursor: pointer;
  text-transform: capitalize;
  width: ${width};
  height: ${height};
  border-radius: 4px;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 769px) {
    font-size: ${fontSizeMobile};
    line-height: ${fontSizeMobile};
    margin-top: ${marginTopMob};
  }
`;

export const StyledBtn = styled.button<BtnProps>`
  ${styles};
`;
