import styled from 'styled-components';

export const Dot = styled.div<{ size: number; padding: number }>`
  width: ${({size}) => size + 'px'};
  height: ${({size}) => size + 'px'};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.secondaryBg};
  background-color: ${(props) => props.theme.green};
  position: absolute;
  right: ${({padding}) => padding + 'px'};
  bottom: ${({padding}) => padding + 'px'}; ;
`;
