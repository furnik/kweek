import styled from 'styled-components';
import {Text} from '../common/Text';
import {Link} from 'react-router-dom';

export const NavbarWrapper = styled.div`
  width: 240px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media (max-width: 769px) {
    display: none;
  }
`;

export const RowBlock = styled.div`
  width: 100%;
  padding: 10px 0 10px 30px;

  background: ${(props) => props.theme.secondaryBg};
  border-radius: 4px;

  display: flex;
  gap: 10px;
`;

export const ColumnBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 10px 0;
  background: ${(props) => props.theme.secondaryBg};
  border-radius: 4px;
`;

export const Block = styled.div`
  height: max-content;
  position: relative;
  max-height: 60px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FullName = styled(Text).attrs({
  sizeDesktop: 16,
  variant: 'primary',
  weight: 'semi-bold',
})``;

export const UsernameText = styled(Text).attrs({
  sizeDesktop: 12,
  variant: 'secondary',
  weight: 'regular',
  marginTopDesktop: 6,
})``;

export const NavText = styled(Text).attrs({
  sizeDesktop: 13,
  variant: 'primary',
  weight: 'semi-bold',
})``;

export const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  position: relative;
  padding: 5px 0 5px 30px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.purpleOpacity};
  }
`;

export const NavIcon = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background-color: #ffffff;
`;

export const ActiveIndicator = styled.div<{ isActive?: boolean }>`
  height: 30px;
  width: 4px;
  border-radius: 4px 0 0 4px;
  background-color: ${(props) => props.theme.purple};
  position: absolute;
  right: 0;
  opacity: ${({isActive}) => (isActive ? 1 : 0)};
  transition: opacity 0.3s;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;


export const ThemeTitle = styled(Text).attrs({
  sizeDesktop: 14,
  variant: 'primary',
  weight: 'semi-bold',
})``;

export const ThemeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 30px;
  gap: 10px;
`;

export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.div`
  margin-left: 5px;
  font-size: 14px;
  color: ${(props) => props.theme.white};
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  width: max-content;
  padding: 0 8px;
  height: 20px;
  border-radius: 100%;
  background: ${(props) => props.theme.purple};
  display: flex;
  align-items: center;
  justify-content: center;
`;
