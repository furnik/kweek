import React from 'react';
import {SignUp} from '../../components/Auth/SignUp';
import {useSignUp} from '../../hooks/auth';

export const SignUpContainer: React.FC = () => {
  const {onSignUp, onChange} = useSignUp();
  return <SignUp onSignUp={onSignUp} onChange={onChange} />;
};
