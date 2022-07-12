import {useMutation, useQuery, useSubscription} from '@apollo/client';
import {
  GetUserChatsRes,
  GetUserChatsReg,
  GetUserChatsQuery,
  GetChatRes,
  GetChatQuery,
  GetChatReg,
  SendMessageRes,
  SendMessageReg,
  SendMessageQuery,
  GetChatSubscriptionRes,
  GetChatSubscriptionReg,
  GetChatSubscription,
} from '../queries/chats';
import {ChatType} from '../types';

export const useGetUserChats = (id: string) => {
  const {data, loading, refetch} = useQuery<GetUserChatsRes, GetUserChatsReg>(GetUserChatsQuery, {variables: {id}, pollInterval: 1000});

  return {data: data?.getUserChats || [] as Array<ChatType>, loading, refetch};
};

export const useGetChat = (username: string, viewerId: string) => {
  const {data, loading, refetch} = useQuery<GetChatRes, GetChatReg>(GetChatQuery, {variables: {username, viewerId}, pollInterval: 1000});

  return {data: data?.getChat || {} as ChatType, loading, refetch};
};

export const useSendMessage = (refetch: () => void) => {
  const [send, {loading}] = useMutation<SendMessageRes, SendMessageReg>(SendMessageQuery);

  const sendMessage = async (params: SendMessageReg) => {
    try {
      const {data} = await send({variables: {...params}});
      if (data?.createMessage.id) {
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return {loading, sendMessage};
};


export const useGetChatSubscription = (chatId: string) => {
  const {data} = useSubscription<GetChatSubscriptionRes, GetChatSubscriptionReg>(
      GetChatSubscription,
      {variables: {chatId}},
  );
  return {data};
};
