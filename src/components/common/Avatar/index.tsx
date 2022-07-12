import React from 'react';
import {AvatarIcon} from './styles';

export enum AvatarSizeType {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

const avatarSizeConfig = {
  [AvatarSizeType.SMALL]: 40,
  [AvatarSizeType.MEDIUM]: 60,
  [AvatarSizeType.LARGE]: 100,
};

interface Props {
  size: AvatarSizeType;
  src: string;
}

export const Avatar: React.FC<Props> = ({src, size}) => {
  return <AvatarIcon src={src || require('./assets/unknown.png')} size={avatarSizeConfig[size]} />;
};
