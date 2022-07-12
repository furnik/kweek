import React from 'react';
import {LogIn} from '../../components/Auth/LogIn';
import {useLogIn} from '../../hooks/auth';

export const LogInContainer: React.FC = () => {
  const {onLogIn, onChange, loading} = useLogIn();
  return <LogIn onLogIn={onLogIn} onChange={onChange} loading={loading} />;
};
