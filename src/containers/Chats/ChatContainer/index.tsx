import React from 'react';
import {ChatComponent} from '../../../components/Chats/ChatComponent';
import {useLocation} from 'react-router-dom';
import {useGetChat, useGetUserChats, useSendMessage} from '../../../hooks/chats';
import {useRecoilState} from 'recoil';
import {currentUser} from '../../../App';

export const ChatContainer = () => {
  const path = useLocation().pathname;
  const [{id}] = useRecoilState(currentUser);
  const {refetch: chatsRefetch} = useGetUserChats(id);
  const {data, loading, refetch} = useGetChat(path.split('/')[3], id);

  const nahdleRefetch = () => {
    chatsRefetch();
    refetch();
  };

  const {sendMessage, loading: sendLoading} = useSendMessage(nahdleRefetch);
  return <ChatComponent chat={data} loading={loading} sendLoading={sendLoading} sendMessage={sendMessage} />;
};
