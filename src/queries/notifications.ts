import {UserType} from '../types';
import {gql} from '@apollo/client';
import {UserFragment} from './fragments/user';

export interface GetUserNotificationsRes {
  getNotifications: [UserType];
}

export interface GetUserNotificationsReg {
  id: string;
}


export const GetUserNotificationsQuery = gql`
  query getNotifications($id: ID!) {
    getNotifications(id: $id) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;
