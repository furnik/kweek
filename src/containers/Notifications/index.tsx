import React from 'react';
import {useRecoilState} from 'recoil';
import {currentUser} from '../../App';
import {Notifications} from '../../components/Notifications';
import {useGetUserNotifications} from '../../hooks/notifications';
import {useFollowResponse} from '../../hooks/user';

export const NotificationsContainer = () => {
  const [{id}] = useRecoilState(currentUser);
  const {loading, data, refetch} = useGetUserNotifications(id);
  const {onFollowResponse} = useFollowResponse(refetch);

  return <Notifications onFollowResponse={onFollowResponse} loading={loading} notifications={data} />;
};
