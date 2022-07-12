import React, {useState} from 'react';
import {Friends} from '../../components/Friends';
import {useFollow, useGetAllUsers, useUnfollow, useUserFriends} from '../../hooks/user';
import {useRecoilState} from 'recoil';
import {currentUser} from '../../App';

export const FriendsContainer = () => {
  const [search, setSearch] = useState('');
  const [{id}] = useRecoilState(currentUser);
  const {loading: friendsLoading, data: friends, refetch: friendRefetch} = useUserFriends(id);
  const {loading, data, refetch} = useGetAllUsers(id, search);

  const refetchData = () => {
    refetch();
    friendRefetch();
  };

  const {onFollow} = useFollow(refetchData);
  const {onUnfollow} = useUnfollow(refetchData);

  const Loading = loading || friendsLoading;

  const handleSearch = (value: string) => {
    return setSearch(value);
  };

  return <Friends onFollow={onFollow} onUnfollow={onUnfollow} loading={Loading} friends={friends} all={data} search={search} onSearch={handleSearch} />;
};
