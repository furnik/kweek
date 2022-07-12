import styled from 'styled-components';

export const StyledSwitcher = styled.button`
  width: 40px;
  height: 20px;
  background-color: ${(props) => props.theme.primaryBg};
  border-radius: 20px;
  cursor: pointer;
  border: none;
  position: relative;
`;

export const SwitchButton = styled.div<{ isActive: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  position: absolute;
  top: 3px;
  margin-left: ${({isActive}) => (isActive ? '3px' : '23px')};
  background-color: ${(props) => props.theme.purple};
  transition: margin-left ease-in 0.3s;
`;
