import {gql} from '@apollo/client';

export const PreviewChatFragment = gql`
  fragment PreviewChatFragment on Chat {
    id
    userId
    username
    firstName
    lastName
    avatar
    messages(first:2) {
      creatorId
      content
      date
    }
  }
`;

export const ChatFragment = gql`
  fragment ChatFragment on Chat {
    id
    userId
    username
    firstName
    lastName
    avatar
    messages {
      id
      creatorId
      content
      date
    }
  }
`;
