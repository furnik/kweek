import React, {FormEvent} from 'react';
import {Wrapper, Title, FormWrapper, ButtonWrapper} from './styles';
import {Button} from '../common/Button';
import {Input} from '../common/Input';
import {palette} from '../../constants/palette';
import {Link} from 'react-router-dom';
import {routes} from '../../constants/routes';
import {CreateUserReq} from '../../queries/auth';

enum AuthTypes {
  LOGIN = 'log in',
  SIGNUP = 'Register',
}

const authConfig = {
  [AuthTypes.LOGIN]: {
    btnText: AuthTypes.LOGIN,
    text: 'Already have an account? ',
  },
  [AuthTypes.SIGNUP]: {
    btnText: AuthTypes.SIGNUP,
    text: 'Don’t have an account yet? ',
  },
};

enum FormTypes {
  EMAIL = 'email',
  PASSWORD = 'password',
  USERNAME = 'username',
}

interface Props {
  onSignUp: () => void;
  onChange: (params: {[x: string]: string }) => void;
}

export const SignUp: React.FC<Props> = ({onChange, onSignUp}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return onSignUp();
  };

  const handleChange = (type: keyof CreateUserReq) => (value: string) => {
    return onChange({[type]: value});
  };
  return (
    <Wrapper>
      <Title>Welcome to Kweek</Title>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          onChange={handleChange(FormTypes.USERNAME)}
          label={FormTypes.USERNAME}
          type={'text'}
          placeholder="@example222"
        />
        <Input
          onChange={handleChange(FormTypes.EMAIL)}
          label={FormTypes.EMAIL}
          type={FormTypes.EMAIL}
          placeholder="example@test.com"
        />
        <Input
          onChange={handleChange(FormTypes.PASSWORD)}
          label={FormTypes.PASSWORD}
          type={FormTypes.PASSWORD}
          placeholder="******"
        />
        <ButtonWrapper>
          <Button
            width={100}
            height={30}
            weight="semi-bold"
            color="white"
            variant={'secondary'}
            sizeDesktop={12}
          >
            {AuthTypes.SIGNUP}
          </Button>
          <Link to={routes.login}>
            <Button
              weight="medium"
              width={100}
              height={30}
              color={palette.dark.green}
              sizeDesktop={12}
              type="link"
            >
              {
                authConfig[AuthTypes.LOGIN].btnText
              }
            </Button>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
};
