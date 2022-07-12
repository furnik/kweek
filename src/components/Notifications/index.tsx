import React from 'react';
import {LoaderWrapper, NoDataText, Wrapper} from './styles';
import {UserType} from '../../types';
import {Loader, LoaderSize} from '../common/Loader';
import {NotificationItem} from './NotificationItem';
import {FollowReg} from '../../queries/friends';

interface Props {
  notifications: Array<UserType>;
  loading: boolean;
  onFollowResponse: (params: FollowReg) => void;
}

export const Notifications: React.FC<Props> = ({notifications, loading, onFollowResponse}) => {
  return (
    <Wrapper>
      {loading ? (
        <LoaderWrapper>
          <Loader size={LoaderSize.MD} />
        </LoaderWrapper>
      ) : (
          notifications.length > 0 ?
            notifications.map((item) => <NotificationItem onFollowResponse={onFollowResponse} key={item.id} {...item} />) :
            (
              <LoaderWrapper>
                <NoDataText>
                  {'You don\'t have any notifications yet'}
                </NoDataText>
              </LoaderWrapper>
            )
      )}
    </Wrapper>
  );
};
