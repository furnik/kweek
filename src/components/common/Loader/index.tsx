import React from 'react';
import {LoaderComponent} from './styles';

export enum LoaderSize {
  SM = 20,
  MD = 40,
  LG = 60,
}

export interface LoaderProps {
  size: LoaderSize
}

export const Loader: React.FC<LoaderProps> = ({size}) => {
  return (
    <LoaderComponent size={size} />
  );
};
