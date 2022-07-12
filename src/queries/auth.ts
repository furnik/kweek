import {gql} from '@apollo/client';
import {UserType} from '../types';
import {UserFragment} from './fragments/user';

export interface CreateUserRes {
  createUser: UserType;
}

export interface CreateUserReq {
  username: string;
  email: string;
  password: string;
}

export const CreateUserQuery = gql`
  mutation createUser(
    $username: String!,
    $email: String!,
    $password: String!,
  ) {
    createUser(
      input: { 
        username: $username,
        email: $email,
        password: $password
     }
    ) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;
export interface LoginRes {
  login: UserType;
}

export interface LoginReq {
  email: string;
  password: string;
}

export const LoginQuery = gql`
  mutation login(
    $email: String!,
    $password: String!,
  ) {
    login(
      input: {
        email: $email,
        password: $password
     }
    ) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;
