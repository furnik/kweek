import React, {useState} from 'react';
import {ItemContainer, LoaderWrapper, Wrapper, StyledLink} from './styles';
import {ChatItem} from './ChatItem';
import {Search, Tabs} from '../common/Search';
import {ChatType} from '../../types';
import {Loader, LoaderSize} from '../common/Loader';
import {routes} from '../../constants/routes';
import {NoDataText} from '../Friends/styles';

interface Props {
  chats: Array<ChatType>;
  loading: boolean;
  onSearch: (value: string) => void;
  search: string;
}

export const Chats: React.FC<Props> = ({chats, loading, search, onSearch}) => {
  const [activeTab, setActiveTab] = useState(Tabs.FRIENDS);

  const handleChangeTab = (value: Tabs) => {
    if (value === activeTab) return;
    return setActiveTab(value);
  };

  return (
    <Wrapper>
      <Search onSearch={onSearch} search={search} activeTab={activeTab} onChange={handleChangeTab} />
      {loading ? (
        <LoaderWrapper>
          <Loader size={LoaderSize.MD} />
        </LoaderWrapper>
      ) : (
        <ItemContainer>
          {chats.length > 0 ? (
            chats.map((item) => <StyledLink key={item.id} to={`${routes.chats}/${item.username}`}><ChatItem {...item} /></StyledLink>)
          ) :
          (
            <LoaderWrapper>
              <NoDataText>
                You dont have any chats yet
              </NoDataText>
            </LoaderWrapper>
          )}
        </ItemContainer>
        )}
    </Wrapper>
  );
};
