import {ChatType} from '../types';
import {gql} from '@apollo/client';
import {ChatFragment, PreviewChatFragment} from './fragments/chat';

export interface GetUserChatsRes {
  getUserChats: [ChatType];
}

export interface GetUserChatsReg {
  id: string;
}

export const GetUserChatsQuery = gql`
  query getUserChats($id: ID!) {
    getUserChats(id: $id) {
      ...PreviewChatFragment
    }
  }
  ${PreviewChatFragment}
`;

export interface GetChatRes {
  getChat: ChatType;
}

export interface GetChatReg {
  viewerId: string;
  username: string;
}


export const GetChatQuery = gql`
  query getChat($viewerId: ID!, $username: String!,) {
    getChat(input: {viewerId: $viewerId, username: $username}) {
      ...ChatFragment
    }
  }
  ${ChatFragment}
`;

export interface SendMessageRes {
  createMessage: ChatType;
}

export interface SendMessageReg {
  viewerId: string;
  friendId: string;
  content: string;
}


export const SendMessageQuery = gql`
  mutation createMessage($friendId: ID!, $viewerId: ID!, $content: String!,) {
    createMessage(input: {viewerId: $viewerId, friendId: $friendId, content: $content}) {
      ...ChatFragment
    }
  }
  ${ChatFragment}
`;

export interface GetChatSubscriptionRes {
  subscribeChat: ChatType;
}

export interface GetChatSubscriptionReg {
  chatId: string;
}

export const GetChatSubscription = gql`
  subscription subscribeChat($chatId: ID!) {
    subscribeChat(chatId: $chatId) {
      id
      messages {
        id
        creatorId
        content
        date
      }
    }
  }
`;
