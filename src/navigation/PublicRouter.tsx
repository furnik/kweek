import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {SignUpContainer} from '../containers/Autn/SignUp';
import {routes} from '../constants/routes';
import {LogInContainer} from '../containers/Autn/LogIn';
import {DetailedContainer} from '../containers/Autn/Detailed';

export const PublicRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<LogInContainer />} />
      <Route path={routes.register} element={<SignUpContainer />} />
      <Route path={routes.detailed} element={<DetailedContainer />} />
      <Route path={routes.all} element={<Navigate to={routes.login} />} />
    </Routes>
  );
};
