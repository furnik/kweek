import React, {FormEvent} from 'react';
import {Wrapper, Title, FormWrapper, ButtonWrapper} from './styles';
import {Button} from '../common/Button';
import {Input} from '../common/Input';
import {palette} from '../../constants/palette';
import {useRecoilState} from 'recoil';
import {currentUser, isAuthState} from '../../App';
import {UpdateUserReq} from '../../queries/user';

enum FormTypes {
  FIRSTNAME = 'first name',
  LASTNAME = 'last name',
}

const formConfig = {
  [FormTypes.FIRSTNAME]: 'firstName',
  [FormTypes.LASTNAME]: 'lastName',
};

interface Props {
  onUpdate: () => void;
  onChange: (params: {[x: string]: string }) => void;
}

export const Detailed: React.FC<Props> = ({onChange, onUpdate}) => {
  const [, setIsAuth] = useRecoilState(isAuthState);
  const [user] = useRecoilState(currentUser);

  const onSkip = () => {
    return setIsAuth(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return onUpdate();
  };

  const handleChange = (type: keyof UpdateUserReq) => (value: string) => {
    return onChange({[type]: value, id: user.id});
  };
  const handleChangeFile = (el: any) => {
    return onChange({avatar: el.target.files[0], id: user.id});
  };
  return (
    <Wrapper>
      <Title>Congratulation!</Title>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          onChange={handleChange(formConfig[FormTypes.FIRSTNAME] as keyof UpdateUserReq)}
          label={FormTypes.FIRSTNAME}
          type={'text'}
          placeholder="John"
        />
        <input type="file" onChange={handleChangeFile}/>
        <Input
          onChange={handleChange(formConfig[FormTypes.LASTNAME] as keyof UpdateUserReq)}
          label={FormTypes.LASTNAME}
          type={'text'}
          placeholder="Doe"
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
            Continue
          </Button>
          <Button
            onClick={onSkip}
            weight="medium"
            width={100}
            height={30}
            color={palette.dark.green}
            sizeDesktop={12}
            type="link"
          >
           Skip
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
};
