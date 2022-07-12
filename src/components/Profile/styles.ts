import styled from 'styled-components';
import {Text} from '../common/Text';
import {Button} from '../common/Button';

export const Wrapper = styled.div`
  width: 600px;
  @media(max-width: 769px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.secondaryBg};
  position: relative;
  @media(max-width: 769px) {
    padding: 15px 20px;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FullName = styled(Text).attrs({sizeDesktop: 20, variant: 'primary', weight: 'semi-bold'})``;
export const UserName = styled(Text).attrs({sizeDesktop: 16, variant: 'primary', weight: 'semi-bold'})``;
export const HelperText = styled(Text).attrs({sizeDesktop: 12, variant: 'secondary', weight: 'medium'})``;

export const EditBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 60px;
  height: 30px;
  border-radius: 4px 0 4px 0;
  font-size: 14px;
  bottom: 0;
  right: 0;
  @media(max-width: 769px) {
    width: 40px;
    height: 40px;
    font-size: 0;
  }
`;

export const FollowBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 30px;
  font-size: 12px;
  @media(max-width: 769px) {
    width: 100%;
    height: 40px;
    font-size: 14px;
  }
`;

export const SuccessContainer = styled.div`
  display: none;
  @media(max-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.greenOpacity};
    width: 30px;
    height: 30px;
    border-radius: 4px 0;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const ChatBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 30px;
  font-size: 12px;
  @media(max-width: 769px) {
    width: 100%;
    height: 40px;
    font-size: 14px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  position: absolute;
  right: 20px;
  top: 0;
  height: 100%;
  @media(max-width: 769px) {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    padding: 0 10px 10px;
  }
`;

export const Icon = styled.img`
  display: none;
  @media(max-width: 769px) {
    display: flex;
    width: 20px;
    height: 20px;
  }
`;

export const SuccessIcon = styled.img`
  display: none;
  @media(max-width: 769px) {
    display: flex;
    width: 14px;
    height: 14px;
  }
`;
