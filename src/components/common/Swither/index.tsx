import React from 'react';
import {SwitchButton, StyledSwitcher} from './styles';

interface Props {
  isActive: boolean;
  onChange: () => void;
}

export const Switcher: React.FC<Props> = ({isActive, onChange}) => {
  return (
    <StyledSwitcher onClick={onChange}>
      <SwitchButton isActive={isActive} />
    </StyledSwitcher>
  );
};
