import React from 'react';
import {NavbarWrapper} from './styles';
import {Personal} from './Personal';
import {Menu} from './Menu';
import {Features} from './Features';
import {useRecoilState} from 'recoil';
import {currentUser} from '../../App';

export const Navbar: React.FC = () => {
  const [user] = useRecoilState(currentUser);
  return (
    <NavbarWrapper>
      <Personal data={user} />
      <Menu total={user.totalNotifications} />
      <Features />
    </NavbarWrapper>
  );
};
