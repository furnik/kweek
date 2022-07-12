import {UserType} from '../types';
import {gql} from '@apollo/client';
import {FriendsFragment} from './fragments/user';

export interface GetUserFriendsRes {
  getFriends: [UserType];
}

export interface GetUserFriendsReg {
  id: string;
}


export const GetUserFriendsQuery = gql`
  query getFriends($id: ID!) {
    getFriends(id: $id) {
      ...FriendsFragment
    }
  }
  ${FriendsFragment}
`;


export interface FollowRes {
  followUser: [UserType];
}

export interface FollowReg {
  viewerId: string;
  friendId: string;
}

export const FollowQuery = gql`
  mutation followUser($viewerId: ID!, $friendId: ID!) {
    followUser(input: {viewerId: $viewerId, friendId: $friendId}) {
      ...FriendsFragment
    }
  }
  ${FriendsFragment}
`;

export interface FollowResponse {
  followResponse: [UserType];
}

export const FollowResponseQuery = gql`
  mutation followResponse($viewerId: ID!, $friendId: ID!) {
    followResponse(input: {viewerId: $viewerId, friendId: $friendId}) {
      ...FriendsFragment
    }
  }
  ${FriendsFragment}
`;


export interface UnfollowRes {
  unfollowUser: [UserType];
}

export interface UnfollowReg {
  viewerId: string;
  friendId: string;
}

export const UnfollowQuery = gql`
  mutation unfollowUser($viewerId: ID!, $friendId: ID!) {
    unfollowUser(input: {viewerId: $viewerId, friendId: $friendId}) {
      ...FriendsFragment
    }
  }
  ${FriendsFragment}
`;
