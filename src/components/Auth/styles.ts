import styled from 'styled-components';
import {Text} from '../common/Text';

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.secondaryBg};
  border-radius: 4px;
  margin: 100px auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 380px;
  @media (max-width: 769px) {
    width: 90%;
    padding: 40px 30px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled(Text).attrs({
  sizeDesktop: 24,
  variant: 'primary',
  weight: 'semi-bold',
})``;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;
