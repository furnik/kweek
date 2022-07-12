import {useMutation, useQuery} from '@apollo/client';
import {
  GetAllUsersQuery, GetAllUsersReg,
  GetAllUsersRes, GetFollowersQuery, GetFollowersReg, GetFollowersRes,
  GetUserQuery,
  GetUserReq,
  GetUserRes,
  UpdateUserQuery,
  UpdateUserReq,
  UpdateUserRes,
} from '../queries/user';
import {UserType} from '../types';
import {useState} from 'react';
import {useRecoilState} from 'recoil';
import {currentUser, isAuthState} from '../App';
import {
  FollowQuery,
  FollowReg,
  FollowRes, FollowResponse, FollowResponseQuery,
  GetUserFriendsQuery,
  GetUserFriendsReg,
  GetUserFriendsRes, UnfollowQuery, UnfollowReg, UnfollowRes,
} from '../queries/friends';

export const useGetUser = (username: string, viewerId?: string) => {
  const {data, refetch, loading} = useQuery<GetUserRes, GetUserReq>(GetUserQuery, {variables: {username, viewerId}});
  return {data: data?.getUser || {} as UserType, loading, refetch};
};

export const useGetAllUsers = (id: string, username: string) => {
  const {data, loading, refetch} = useQuery<GetAllUsersRes, GetAllUsersReg>(GetAllUsersQuery, {variables: {id, username}});

  return {data: data?.getAllUsers || [] as Array<UserType>, loading, refetch};
};

export const useUpdateUser = () => {
  const [update] = useMutation<UpdateUserRes, UpdateUserReq>(UpdateUserQuery);
  const [values, setValues] = useState<UpdateUserReq>({} as UpdateUserReq);
  const [, setUser] = useRecoilState(currentUser);
  const [, setIsAuth] = useRecoilState(isAuthState);

  const handleChangeValues = (params: {[x: string]: string; }) => {
    return setValues({...values, ...params});
  };

  const onUpdate = async () => {
    if (!values.id) return;
    try {
      const {data} = await update({variables: {...values}});
      if (data?.updateUser.id) {
        setUser(data?.updateUser);
        localStorage.setItem('currentUser', data?.updateUser.username);
        setIsAuth(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {onUpdate, onChange: handleChangeValues};
};


export const useGetFollowers = (id: string) => {
  const {data, loading} = useQuery<GetFollowersRes, GetFollowersReg>(GetFollowersQuery, {variables: {id}});

  return {data: data?.getFollowers || [] as Array<UserType>, loading};
};

export const useFollow = (callback: () => void) => {
  const [follow, {loading}] = useMutation<FollowRes, FollowReg>(FollowQuery);

  const onFollow = async (params: FollowReg) => {
    try {
      await follow({variables: {...params}});
      callback();
    } catch (err) {
      console.log(err);
    }
  };

  return {onFollow, followLoading: loading};
};

export const useFollowResponse = (callback: () => void) => {
  const [response, {loading}] = useMutation<FollowResponse, FollowReg>(FollowResponseQuery);

  const onFollowResponse = async (params: FollowReg) => {
    try {
      await response({variables: {...params}});
      callback();
    } catch (err) {
      console.log(err);
    }
  };

  return {onFollowResponse, followLoading: loading};
};

export const useUnfollow = (callback: () => void) => {
  const [unfollow, {loading}] = useMutation<UnfollowRes, UnfollowReg>(UnfollowQuery);

  const onUnfollow = async (params: UnfollowReg) => {
    try {
      await unfollow({variables: {...params}});
      callback();
    } catch (err) {
      console.log(err);
    }
  };

  return {onUnfollow, unfollowLoading: loading};
};

export const useUserFriends = (id: string) => {
  const {data, loading, refetch} = useQuery<GetUserFriendsRes, GetUserFriendsReg>(GetUserFriendsQuery, {variables: {id}});

  return {data: data?.getFriends || [] as Array<UserType>, loading, refetch};
};
