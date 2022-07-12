import React from 'react';
import {SearchWrapper, SearchInput, TabWrapper, TabBtn} from './styles';

export enum Tabs {
  FRIENDS = 'Friends',
  // FOLLOWERS = 'Followers',
  ALL = 'Áll'
}

interface Props {
  activeTab: Tabs;
  onChange: (value: Tabs) => void;
  onSearch: (value: string) => void;
  search: string;
}

export const Search: React.FC<Props> = ({activeTab, onChange, onSearch, search}) => {
  return (
    <SearchWrapper>
      <SearchInput value={search} onChange={(e) => onSearch(e.target.value)} type={'text'} placeholder={'Search...'} />
      <TabWrapper>
        <TabBtn onClick={() => onChange(Tabs.FRIENDS)} isActive={activeTab === Tabs.FRIENDS}>Friends</TabBtn>
        <TabBtn onClick={() => onChange(Tabs.ALL)} isActive={activeTab === Tabs.ALL}>All</TabBtn>
      </TabWrapper>
    </SearchWrapper>
  );
};
