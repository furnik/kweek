import {UserType} from '../types';
import {gql} from '@apollo/client';
import {FriendsFragment, UserFragment} from './fragments/user';

export interface UpdateUserRes {
  updateUser: UserType;
}

export interface UpdateUserReq extends UserType{
  password?: string;
}

export const UpdateUserQuery = gql`
  mutation updateUser($id: ID!, $firstName: String, $lastName: String, $username: String, $email: String, $password: String, $avatar: Upload) {
    updateUser(input: {id: $id, firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, avatar: $avatar}) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export interface GetUserRes {
  getUser: UserType;
}

export interface GetUserReq {
  username: string;
  viewerId?: string;
}

export const GetUserQuery = gql`
  query getUser($username: String!, $viewerId: ID) {
    getUser(input: {username: $username, viewerId: $viewerId}) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export interface GetAllUsersRes {
  getAllUsers: [UserType];
}

export interface GetAllUsersReg {
  id: string;
  username: string;
}


export const GetAllUsersQuery = gql`
  query getAllUsers($id: ID!, $username: String) {
    getAllUsers(input: {id: $id, username: $username}) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export interface GetFollowersRes {
  getFollowers: [UserType];
}

export interface GetFollowersReg {
  id: string;
}

export const GetFollowersQuery = gql`
  query getFollowers($id: ID!) {
    getFollowers(id: $id) {
      ...FriendsFragment
    }
  }
  ${FriendsFragment}
`;

