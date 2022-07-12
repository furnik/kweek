import React from 'react';
import {PublicRouter} from './navigation/PublicRouter';
import {PrivateRouter} from './navigation/PrivateRouter';
import {useRecoilState} from 'recoil';
import {isAuthState} from './App';
import {Loader, LoaderSize} from './components/common/Loader';
import {useCheckAuth} from './hooks/auth';
import styled from 'styled-components';

export const Router: React.FC = () => {
  const {loading} = useCheckAuth();
  const [isAuth] = useRecoilState(isAuthState);
  if (loading) return <LoaderWrapper><Loader size={LoaderSize.MD} /></LoaderWrapper>;
  return isAuth ? <PrivateRouter /> : <PublicRouter />;
};

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;
