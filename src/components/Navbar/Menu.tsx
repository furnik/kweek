import React from 'react';
import {ActiveIndicator, ColumnBlock, NavIcon, NavItem, NavText, StyledLink, Label} from './styles';
import {useLocation} from 'react-router-dom';

const navData = ['Chats', 'Friends', 'Notifications'];

export const Menu: React.FC<{total: number}> = ({total}) => {
  const path = useLocation().pathname;
  return (
    <ColumnBlock>
      {navData.length > 0 &&
        navData.map((item, index) => (
          <StyledLink key={index} to={`/kweek/${item.toLowerCase()}`}>
            <Item item={item} path={path} total={total} />
          </StyledLink>
        ))}
    </ColumnBlock>
  );
};

interface ItemProps {
  path?: string;
  item: string;
  onClick?: () => void;
  total?: number;
}

export const Item: React.FC<ItemProps> = ({path, item, onClick, total}) => {
  console.log(total);
  return (
    <NavItem onClick={onClick}>
      <NavIcon />
      <NavText>{item}</NavText>
      {!!total && item === 'Notifications' && <Label>{total}</Label>}
      {path && <ActiveIndicator isActive={path.includes(item.toLowerCase())} />}
    </NavItem>
  );
};
