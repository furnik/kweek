import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Text} from '../../common/Text';

export const Wrapper = styled.div`
  width: 600px;
  height: 100%;
  padding: 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  @media (max-width: 769px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const MessageContainer = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column-reverse;
  padding: 0;
  box-sizing: border-box;
  margin: 0 0 120px;
  gap: 10px;
  position: relative;
  overflow-y: scroll;
  border-radius: 4px;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  @media (max-width: 769px) {
    padding: 10px;
  }
`;

export const Container = styled.div<{isMe: boolean}>`
  width: 100%;
  display: flex;
  height: max-content;
  align-items: flex-end;
  justify-content: ${({isMe}) => (isMe ? 'flex-start' : 'flex-end')}
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
  width: 100%;
  height: 100%;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

export const MessageWrapper = styled.div`
  max-width: 300px;
  min-width: 120px;
  width: max-content;
  padding: 10px 10px 25px;
  border-radius: 4px;
  background: ${(props) => props.theme.secondaryBg};
  position: relative;
`;

export const MessageText = styled(Text).attrs({
  sizeDesktop: 12,
  variant: 'primary',
  weight: 'medium',
})``;

export const DateText = styled(Text).attrs({
  sizeDesktop: 10,
  variant: 'secondary',
  weight: 'medium',
})`
  position: absolute;
  right: 5px;
  bottom: 5px;
`;

export const UserBarWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  padding: 0 30px;
  gap: 10px;
  background-color: ${(props) => props.theme.secondaryBg};
`;

export const InputBarWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  border-radius: 4px;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
  background-color: ${(props) => props.theme.secondaryBg};
  position: fixed;
  bottom: 0;
  @media (max-width: 769px) {
    padding: 0 10px;
  }
`;

export const FullName = styled(Text).attrs({
  sizeDesktop: 14,
  variant: 'primary',
  weight: 'semi-bold',
})``;

export const MessageInput = styled.textarea`
  width: 100%;
  height: 40px;
  border: 2px solid transparent;
  color: ${(props) => props.theme.primaryText};
  background: transparent;
  padding: 0;
  font-family: Montserrat, sans-serif;
  resize: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &::placeholder {
    color: ${(props) => props.theme.gray};
    font-size: 14px;
    line-height: 14px;
    font-family: Montserrat, sans-serif;
  }
  &:focus {
    outline: none;
  }
`;
