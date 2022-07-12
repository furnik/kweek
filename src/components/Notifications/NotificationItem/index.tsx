import React from 'react';
import {
  ItemWrapper,
  FullName,
  Username,
  StyledLink,
  InfoContainer,
} from './styles';
import {Button} from '../../common/Button';
import {FullUserType} from '../../../types';
import {routes} from '../../../constants/routes';
import {FollowReg} from '../../../queries/friends';
import {useRecoilState} from 'recoil';
import {currentUser} from '../../../App';

export const NotificationItem: React.FC<FullUserType & {onFollowResponse: (params: FollowReg) => void}> = ({
  username,
  onFollowResponse,
  id,
}) => {
  const [viewer] = useRecoilState(currentUser);
  return (
    <ItemWrapper>
      <StyledLink to={`${routes.profile}/${username}`}>
        <InfoContainer>
          <FullName>
            {username}
          </FullName>
          <Username>following you</Username>
        </InfoContainer>
      </StyledLink>
      <Button
        onClick={() => onFollowResponse({friendId: id, viewerId: viewer.id})}
        variant={'primary'}
        weight={'semi-bold'}
        width={80}
        height={30}
        sizeDesktop={10}
      >
        Follow
      </Button>
    </ItemWrapper>
  );
};
