import styled from 'styled-components';
import {Text} from '../Text';

export const StyledInput = styled.input`
  width: 100%;
  height: 34px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryBg};
  border: 2px solid transparent;
  color: ${(props) => props.theme.primaryText};
  padding: 0 20px;
  font-family: Montserrat, sans-serif;
  &::placeholder {
    color: ${(props) => props.theme.gray};
    font-size: 14px;
    line-height: 14px;
    font-family: Montserrat, sans-serif;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.purple};
    border-radius: 4px 4px 0 0;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const LabelText = styled(Text).attrs({
  sizeDesktop: 14,
  variant: 'primary',
  weight: 'medium',
})`
  text-transform: capitalize;
`;
