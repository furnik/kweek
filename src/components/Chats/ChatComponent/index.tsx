import React, {useState} from 'react';
import {ChatType, MessageType} from '../../../types';
import {
  Container,
  DateText,
  FullName,
  InputBarWrapper,
  LoaderWrapper,
  MessageContainer,
  MessageInput,
  MessageText,
  MessageWrapper,
  StyledLink,
  UserBarWrapper,
  Wrapper,
} from './styles';
import {Loader, LoaderSize} from '../../common/Loader';
import {useRecoilState} from 'recoil';
import {currentUser} from '../../../App';
import {format} from 'date-fns';
import {Avatar, AvatarSizeType} from '../../common/Avatar';
import {getFullName} from '../../../helpers/fullName';
import {routes} from '../../../constants/routes';
import {SendMessageReg} from '../../../queries/chats';
import {Button} from '../../common/Button';

interface Props {
  chat: ChatType;
  loading: boolean;
  sendMessage: (params: SendMessageReg) => Promise<void>;
  sendLoading: boolean;
}

export const ChatComponent: React.FC<Props> = ({chat, loading, sendMessage, sendLoading}) => {
  return (
    <Wrapper>
      {loading ? (
        <LoaderWrapper>
          <Loader size={LoaderSize.MD} />
        </LoaderWrapper>
      ) : (
        <>
          <UserBar {...chat} />
          <MessageContainer>
            {chat.messages?.map((item) => <MessageItem key={item.id} {...item} />)}
          </MessageContainer>
          <InputBar loading={sendLoading} sendMessage={sendMessage} friendId={chat.userId} />
        </>
      )}
    </Wrapper>
  );
};

const MessageItem: React.FC<MessageType> = ({creatorId, content, date}) => {
  const [user] = useRecoilState(currentUser);
  const dateText = format(new Date(date), 'HH:mm');
  return (
    <Container isMe={creatorId !== user.id}>
      <MessageWrapper>
        <MessageText>{content}</MessageText>
        <DateText>{dateText}</DateText>
      </MessageWrapper>
    </Container>
  );
};

const UserBar: React.FC<ChatType> = ({avatar, lastName, firstName, username}) => {
  const fullName = getFullName({firstName, lastName});
  return (
    <StyledLink to={`${routes.profile}/${username}`}>
      <UserBarWrapper>
        <Avatar size={AvatarSizeType.SMALL} src={avatar} />
        <FullName>{fullName || username}</FullName>
      </UserBarWrapper>
    </StyledLink>
  );
};

interface InputBarProps {
  sendMessage: (params: SendMessageReg) => Promise<void>;
  friendId: string;
  loading: boolean;
}

const InputBar: React.FC<InputBarProps> = ({sendMessage, friendId, loading}) => {
  const [content, setContent] = useState('');
  const [user] = useRecoilState(currentUser);
  const handleSend = () => {
    if (!content || !friendId || !user.id) return;
    sendMessage({viewerId: user.id, friendId, content}).then(() => setContent(''));
  };
  return (
    <InputBarWrapper>
      <MessageInput value={content} onChange={(e) => setContent(e.target.value)} placeholder={'Text a message...'} />
      <Button variant={'secondary'} width={100} height={30} onClick={handleSend}>{loading ? <Loader size={LoaderSize.SM} /> : 'Send'}</Button>
    </InputBarWrapper>
  );
};
