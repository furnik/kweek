import React from 'react';
import {format} from 'date-fns';
import {
  Block,
  DateText,
  FullName,
  InfoContainer,
  ItemWrapper,
  Message,
  PersonalContainer,
  Person,
} from './styles';
import {Avatar, AvatarSizeType} from '../../common/Avatar';
import {Status, StatusSize} from '../../common/Status';
import {ChatType} from '../../../types';
import {useRecoilState} from 'recoil';
import {currentUser} from '../../../App';

export const ChatItem: React.FC<ChatType> = ({
  firstName,
  lastName,
  avatar,
  username,
  isOnline,
  messages,
}) => {
  const [user] = useRecoilState(currentUser);
  const lastMessage = messages[0];
  const date = format(new Date(messages[0].date), 'HH:mm');
  return (
    <ItemWrapper>
      <PersonalContainer>
        <Block>
          <Avatar size={AvatarSizeType.SMALL} src={avatar} />
          {isOnline && <Status size={StatusSize.SM} />}
        </Block>
        <InfoContainer>
          {!firstName && !lastName ? (
            <FullName>
              {username}
            </FullName>
          ) : (
            <FullName>
              {firstName} {lastName}
            </FullName>
          )}
          <Message>
            {lastMessage.creatorId === user.id && <Person>Me: {' '}</Person>}
            {lastMessage.content}
          </Message>
        </InfoContainer>
      </PersonalContainer>
      <DateText>{date}</DateText>
    </ItemWrapper>
  );
};
