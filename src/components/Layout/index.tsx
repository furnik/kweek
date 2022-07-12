import React from 'react';
import {LayoutWrapper, Container} from './styles';
import {Navbar} from '../Navbar';

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({children}) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <Container>{children}</Container>
    </LayoutWrapper>
  );
};
