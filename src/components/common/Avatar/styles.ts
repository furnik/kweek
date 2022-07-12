import styled from 'styled-components';

export const AvatarIcon = styled.img<{ size?: number }>`
  width: ${({size}) => (size ? size + 'px' : '40px')};
  height: ${({size}) => (size ? size + 'px' : '40px')};
  border-radius: 100px;
  object-fit: cover;
`;
