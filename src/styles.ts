import {createGlobalStyle} from 'styled-components';
import {palette} from './constants/palette';

type ThemeType = typeof palette.dark;

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({theme}) => theme.primaryBg};
    overflow: hidden;
  }
  a {
    text-decoration: none;
  }
`;
