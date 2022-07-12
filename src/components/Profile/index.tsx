import React from 'react';
import {
  Block,
  BtnContainer,
  ChatBtn,
  Container,
  EditBtn,
  FollowBtn,
  FullName,
  HelperText,
  Icon,
  InfoBlock,
  SuccessContainer,
  SuccessIcon,
  UserName,
  Wrapper,
} from './styles';
import {UserType} from '../../types';
import {Avatar, AvatarSizeType} from '../common/Avatar';
import {palette} from '../../constants/palette';
import {useRecoilState} from 'recoil';
import {currentUser} from '../../App';
import {getFullName} from '../../helpers/fullName';
import {Link} from 'react-router-dom';
import {routes} from '../../constants/routes';
import {FollowReg, UnfollowReg} from '../../queries/friends';
import {Loader, LoaderSize} from '../common/Loader';

interface Props extends UserType {
  onFollow: (params: FollowReg) => void;
  onUnfollow: (params: UnfollowReg) => void;
  loading: boolean;
}

export const Profile: React.FC<Props> = ({avatar, firstName, lastName, username, id, onUnfollow, onFollow, isFollowing, loading}) => {
  const [viewer] = useRecoilState(currentUser);
  const fullName = getFullName({firstName, lastName});

  const handleChangeFollow = () => {
    if (isFollowing) {
      return onUnfollow({viewerId: viewer.id, friendId: id});
    }
    return onFollow({viewerId: viewer.id, friendId: id});
  };

  return (
    <Wrapper>
      {loading ? (
        <Loader size={LoaderSize.MD} />
      ) : (
        <Container>
          <Avatar size={AvatarSizeType.LARGE} src={avatar} />
          <InfoBlock>
            {fullName && (
              <Block>
                <FullName>{fullName}</FullName>
                <HelperText>Full name</HelperText>
              </Block>
            )}
            <Block>
              <UserName>{username}</UserName>
              <HelperText>Username</HelperText>
            </Block>
          </InfoBlock>
          {viewer.id === id ? (
            <EditBtn
              variant={'tertiary'}
            >
              Edit
              <Icon src={require('./assets/edit-button.png')} />
            </EditBtn>
          ) : (
            <BtnContainer>
              <FollowBtn
                onClick={handleChangeFollow}
                isActive={isFollowing}
                weight={'semi-bold'}
                variant={'primary'}
                color={palette.dark.primaryText}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </FollowBtn>
              <Link to={`${routes.chats}/${username}`}>
                <ChatBtn
                  weight={'semi-bold'}
                  variant={'secondary'}
                  color={palette.dark.primaryText}
                >
                  Chat
                </ChatBtn>
              </Link>
            </BtnContainer>
          )}
          {viewer.id !== id && (
            <SuccessContainer>
              <SuccessIcon src={require('./assets/tick.png')}/>
            </SuccessContainer>
          )}
        </Container>
      )}
    </Wrapper>
  );
};
