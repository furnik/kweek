import styled from 'styled-components';
import {Text} from '../../common/Text';
import {Link} from 'react-router-dom';

export const ItemWrapper = styled.div`
  height: 60px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 2px solid ${(props) => props.theme.primaryBg};
`;

export const PersonalContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const InfoContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
`;

export const FullName = styled(Text).attrs({
  sizeDesktop: 14,
  variant: 'primary',
  weight: 'semi-bold',
})``;

export const Username = styled(Text).attrs({
  sizeDesktop: 12,
  variant: 'secondary',
  weight: 'medium',
})``;

export const Block = styled.div`
  height: max-content;
  position: relative;
  max-height: 40px;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`;
