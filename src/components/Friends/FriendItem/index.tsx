import React from 'react';
import {
  ItemWrapper,
  FullName,
  PersonalContainer,
  InfoContainer,
  Username,
  Block,
  StyledLink,
} from './styles';
import {Avatar, AvatarSizeType} from '../../common/Avatar';
import {Button} from '../../common/Button';
import {Status, StatusSize} from '../../common/Status';
import {FullUserType} from '../../../types';
import {routes} from '../../../constants/routes';

export const FriendItem: React.FC<FullUserType & {onFollow: () => void; onUnfollow: () => void}> = ({
  firstName,
  lastName,
  username,
  avatar,
  isOnline,
  onFollow,
  onUnfollow,
  isFollowing,
}) => {
  const handleChangeFollow = () => {
    if (isFollowing) {
      return onUnfollow();
    }
    return onFollow();
  };

  return (
    <ItemWrapper>
      <StyledLink to={`${routes.profile}/${username}`}>
        <PersonalContainer>
          <Block>
            <Avatar size={AvatarSizeType.SMALL} src={avatar} />
            {isOnline && <Status size={StatusSize.SM} />}
          </Block>
          <InfoContainer>
            <FullName>
              {firstName} {lastName}
            </FullName>
            <Username>@{username}</Username>
          </InfoContainer>
        </PersonalContainer>
      </StyledLink>
      <Button
        onClick={handleChangeFollow}
        isActive={isFollowing}
        variant={'primary'}
        weight={'semi-bold'}
        width={80}
        height={30}
        sizeDesktop={10}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </ItemWrapper>
  );
};
