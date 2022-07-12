import React, {useState} from 'react';
import {Chats} from '../../components/Chats';
import {useGetUserChats} from '../../hooks/chats';
import {useRecoilState} from 'recoil';
import {currentUser} from '../../App';

export const ChatsContainer = () => {
  const [search, setSearch] = useState('');
  const [user] = useRecoilState(currentUser);
  const {data, loading} = useGetUserChats(user.id);

  const handleSearch = (value: string) => {
    return setSearch(value);
  };

  return <Chats search={search} onSearch={handleSearch} chats={data} loading={loading} />;
};
