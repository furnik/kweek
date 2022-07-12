import {gql} from '@apollo/client';

export const UserFragment = gql`
  fragment UserFragment on User {
    id
    username
    firstName
    lastName
    avatar
    email
    isFollowing
    totalNotifications
  }
`;

export const FriendsFragment = gql`
  fragment FriendsFragment on User {
    id
    username
    avatar    
    isFollowing
  }
`;
