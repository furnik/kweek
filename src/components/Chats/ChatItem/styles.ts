import styled from 'styled-components';
import {Text} from '../../common/Text';

export const ItemWrapper = styled.div`
  height: 60px;
  width: 100%;
  padding: 0 20px;
  display: flex;
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

export const Message = styled(Text).attrs({
  sizeDesktop: 12,
  variant: 'secondary',
  weight: 'medium',
})`
  display: inline-flex;
`;

export const Person = styled(Text).attrs({
  sizeDesktop: 12,
  variant: 'primary',
  weight: 'medium',
})`
  margin-right: 5px;
`;

export const DateText = styled(Text).attrs({
  sizeDesktop: 10,
  variant: 'secondary',
  weight: 'medium',
  marginTopDesktop: 10,
})``;

export const Block = styled.div`
  height: max-content;
  position: relative;
  max-height: 40px;
`;
