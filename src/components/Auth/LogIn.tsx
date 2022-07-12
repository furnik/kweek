import React, {FormEvent} from 'react';
import {ButtonWrapper, FormWrapper, Title, Wrapper} from './styles';
import {Button} from '../common/Button';
import {Input} from '../common/Input';
import {palette} from '../../constants/palette';
import {Link} from 'react-router-dom';
import {routes} from '../../constants/routes';
import {LoginReq} from '../../queries/auth';
import {Loader, LoaderSize} from '../common/Loader';

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
}

interface Props {
  onLogIn: () => void;
  onChange: (params: {[x: string]: string }) => void;
  loading: boolean;
}

export const LogIn: React.FC<Props> = ({onChange, onLogIn, loading}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return onLogIn();
  };

  const handleChange = (type: keyof LoginReq) => (value: string) => {
    return onChange({[type]: value});
  };
  return (
    <Wrapper>
      <Title>Welcome back!</Title>
      <FormWrapper onSubmit={handleSubmit}>
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
            {loading ? <Loader size={LoaderSize.SM} /> : AuthTypes.LOGIN}
          </Button>
          <Link to={routes.register}>
            <Button
              weight="medium"
              width={100}
              height={30}
              color={palette.dark.green}
              sizeDesktop={12}
              type="link"
            >
              {
                authConfig[AuthTypes.SIGNUP].btnText
              }
            </Button>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
};
