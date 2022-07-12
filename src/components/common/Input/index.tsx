import React, {useRef} from 'react';
import {StyledInput, Label, LabelText} from './styles';

interface Props {
  placeholder: string;
  label: string;
  type: 'tel' | 'text' | 'password' | 'email';
  onChange: (value: string) => void;
}

export const Input: React.FC<Props> = ({placeholder, label, type, onChange}) => {
  const ref = useRef(null);
  return (
    <Label>
      <LabelText>{label}</LabelText>
      <StyledInput ref={ref} onChange={(elem) => onChange(elem.target.value)} type={type} placeholder={placeholder} />
    </Label>
  );
};
