import React, {useEffect, useState} from 'react';
import {ItemContainer, LoaderWrapper, NoDataText, Wrapper} from './styles';
import {Search, Tabs} from '../common/Search';
import {UserType} from '../../types';
import {Loader, LoaderSize} from '../common/Loader';
import {FriendItem} from './FriendItem';
import {useRecoilState} from 'recoil';
import {currentUser} from '../../App';
import {FollowReg, UnfollowReg} from '../../queries/friends';

interface Props {
  friends: Array<UserType>;
  all: Array<UserType>;
  loading: boolean;
  onFollow: (params: FollowReg) => void;
  onUnfollow: (params: UnfollowReg) => void;
  onSearch: (value: string) => void;
  search: string;
}

export const Friends: React.FC<Props> = ({friends, loading, onFollow, search, onSearch, all, onUnfollow}) => {
  const [activeTab, setActiveTab] = useState(Tabs.ALL);
  const [data, setData] = useState<Array<UserType>>([]);
  const [user] = useRecoilState(currentUser);

  const handleChangeTab = (value: Tabs) => {
    if (value === activeTab) return;
    return setActiveTab(value);
  };

  useEffect(() => {
    activeTab === Tabs.FRIENDS ? setData(friends) : setData(all);
  }, [activeTab, friends, all]);

  return (
    <Wrapper>
      <Search onSearch={onSearch} search={search} activeTab={activeTab} onChange={handleChangeTab} />
      {loading ? (
        <LoaderWrapper>
          <Loader size={LoaderSize.MD} />
        </LoaderWrapper>
      ) : (
        <ItemContainer>
          {data.length > 0 ?
            data.map((item) => <FriendItem key={item.id} {...item}
              onFollow={() => onFollow({viewerId: user.id, friendId: item.id})}
              onUnfollow={() => onUnfollow({viewerId: user.id, friendId: item.id})}
            />) :
            (
              <LoaderWrapper>
                <NoDataText>
                  {activeTab === Tabs.FRIENDS ? 'You don\'t have any friends yet' : 'Start typing to find a user'}
                </NoDataText>
              </LoaderWrapper>
            )
          }
        </ItemContainer>
      )}
    </Wrapper>
  );
};
