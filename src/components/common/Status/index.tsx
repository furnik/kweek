import React from 'react';
import {Dot} from './styles';

export enum StatusSize {
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
}

const statusConfig = {
  [StatusSize.SM]: {
    padding: 1,
    size: 8,
  },
  [StatusSize.MD]: {
    padding: 2,
    size: 9,
  },
  [StatusSize.LG]: {
    padding: 3,
    size: 10,
  },
};

interface Props {
  size: StatusSize;
}

export const Status: React.FC<Props> = ({size}) => {
  return (
    <Dot padding={statusConfig[size].padding} size={statusConfig[size].size} />
  );
};
