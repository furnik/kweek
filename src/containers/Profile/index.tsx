import React from 'react';
import {Profile} from '../../components/Profile';
import {useLocation} from 'react-router-dom';
import {useFollow, useGetUser, useUnfollow} from '../../hooks/user';
import {UserType} from '../../types';
import {useRecoilState} from 'recoil';
import {currentUser} from '../../App';

export const ProfileContainer = () => {
  const [viewer] = useRecoilState(currentUser);
  const path = useLocation().pathname;
  const {data, loading, refetch} = useGetUser(path.split('/')[2], viewer.id) || {} as UserType;
  const {onFollow} = useFollow(refetch);
  const {onUnfollow} = useUnfollow(refetch);
  return <Profile loading={loading} onFollow={onFollow} onUnfollow={onUnfollow} {...data} />;
};
