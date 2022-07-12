import React from 'react';
import {
  Block,
  FullName,
  InfoContainer,
  RowBlock,
  UsernameText,
  StyledLink,
} from './styles';
import {Avatar, AvatarSizeType} from '../common/Avatar';
import {Status, StatusSize} from '../common/Status';
import {routes} from '../../constants/routes';
import {FullUserType} from '../../types';
import {getFullName} from '../../helpers/fullName';

interface Props {
  data: FullUserType;
}

export const Personal: React.FC<Props> = ({data}) => {
  const fullName = getFullName({...data});
  return (
    <StyledLink to={`${routes.profile}/${data.username}`}>
      <RowBlock>
        <Block>
          <Avatar
            src={data.avatar}
            size={AvatarSizeType.MEDIUM}
          />
          {data.isOnline && <Status size={StatusSize.LG} />}
        </Block>
        <InfoContainer>
          {fullName && <FullName>{fullName}</FullName>}
          <UsernameText>@{data.username}</UsernameText>
        </InfoContainer>
      </RowBlock>
    </StyledLink>
  );
};
