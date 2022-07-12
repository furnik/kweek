import {useMutation, useQuery} from '@apollo/client';
import {
  CreateUserReq,
  CreateUserRes,
  CreateUserQuery,
  LoginRes, LoginReq, LoginQuery,
} from '../queries/auth';
import {useState} from 'react';
import {useRecoilState} from 'recoil';
import {currentUser, isAuthState} from '../App';
import {useNavigate} from 'react-router-dom';
import {routes} from '../constants/routes';
import {GetUserQuery, GetUserReq, GetUserRes} from '../queries/user';
import {UserType} from '../types';

export const useSignUp = () => {
  const [values, setValues] = useState<CreateUserReq>({} as CreateUserReq);
  const [create] = useMutation<CreateUserRes, CreateUserReq>(CreateUserQuery);
  const [, setUser] = useRecoilState(currentUser);
  const navigate = useNavigate();

  const handleChangeValues = (params: {[x: string]: string; }) => {
    return setValues({...values, ...params});
  };

  const onSignUp = async () => {
    if (!values.password || !values.email || !values.username) return;
    try {
      const {data} = await create({variables: {...values}});
      if (data?.createUser.id) {
        setUser(data?.createUser);
        localStorage.setItem('currentUser', data?.createUser.username);
        navigate(routes.detailed);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return {onSignUp, onChange: handleChangeValues};
};

export const useLogIn = () => {
  const [values, setValues] = useState<LoginReq>({} as LoginReq);
  const [login, {loading}] = useMutation<LoginRes, LoginReq>(LoginQuery);
  const [, setUser] = useRecoilState(currentUser);
  const [, setIsAuth] = useRecoilState(isAuthState);

  const handleChangeValues = (params: {[x: string]: string; }) => {
    return setValues({...values, ...params});
  };

  const onLogIn = async () => {
    if (!values.password || !values.email) return;
    try {
      const {data} = await login({variables: {...values}});
      if (data?.login.id) {
        setUser(data?.login);
        localStorage.setItem('currentUser', data?.login.username);
        setIsAuth(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return {onLogIn, onChange: handleChangeValues, loading};
};

export const useLogOut = () => {
  const navigate = useNavigate();
  const [, setUser] = useRecoilState(currentUser);
  const [, setIsAuth] = useRecoilState(isAuthState);

  const logOut = () => {
    localStorage.removeItem('currentUser');
    setIsAuth(false);
    navigate(routes.login);
    setUser({} as UserType);
  };
  return {logOut};
};

export const useCheckAuth = () => {
  const [, setUser] = useRecoilState(currentUser);
  const [, setIsAuth] = useRecoilState(isAuthState);
  const username = localStorage.getItem('currentUser') || '';
  const {data, loading} = useQuery<GetUserRes, GetUserReq>(GetUserQuery, {variables: {username}});

  if (data?.getUser.id) {
    setUser(data.getUser);
    setIsAuth(true);
  }
  return {loading};
};
