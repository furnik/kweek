import {useQuery} from '@apollo/client';
import {UserType} from '../types';
import {GetUserNotificationsQuery, GetUserNotificationsReg, GetUserNotificationsRes} from '../queries/notifications';

export const useGetUserNotifications = (id: string) => {
  const {data, loading, refetch} = useQuery<GetUserNotificationsRes, GetUserNotificationsReg>(GetUserNotificationsQuery, {variables: {id}});

  return {data: data?.getNotifications || [] as Array<UserType>, loading, refetch};
};
