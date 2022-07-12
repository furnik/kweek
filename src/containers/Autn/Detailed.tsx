import React from 'react';
import {Detailed} from '../../components/Auth/Detailed';
import {useUpdateUser} from '../../hooks/user';

export const DetailedContainer: React.FC = () => {
  const {onUpdate, onChange} = useUpdateUser();
  return <Detailed onUpdate={onUpdate} onChange={onChange} />;
};
