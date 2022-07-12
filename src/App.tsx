import React from 'react';
import {Router} from './Router';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './styles';
import {atom, useRecoilState} from 'recoil';
import {palette} from './constants/palette';
import {UserType} from './types';

export const themeState = atom({
  key: 'themeState',
  default: 'dark',
});

export const currentUser = atom({
  key: 'currentUser',
  default: {} as UserType,
});

export const isAuthState = atom({
  key: 'isAuthState',
  default: false,
});

export const App = () => {
  const [theme] = useRecoilState(themeState);

  return (
    <ThemeProvider theme={theme === 'dark' ? palette.dark : palette.light}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
};
