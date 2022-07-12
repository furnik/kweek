import styled from 'styled-components';
import {Text} from '../common/Text';

export const Wrapper = styled.div`
  width: 600px;
  height: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.secondaryBg};
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
  width: 100%;
  height: calc(100% - 70px);
  background-color: ${(props) => props.theme.secondaryBg};
`;

export const NoDataText = styled(Text).attrs({sizeDesktop: 14, variant: 'secondary', weight: 'medium'})``;
