import React from 'react';
import {ColumnBlock, ThemeContainer, ThemeTitle, ThemeWrapper, StyledLink} from './styles';
import {Switcher} from '../common/Swither';
import {useRecoilState} from 'recoil';
import {themeState} from '../../App';
import {useLogOut} from '../../hooks/auth';
import {Item} from './Menu';
import {routes} from '../../constants/routes';

export const Features: React.FC = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const {logOut} = useLogOut();
  const handleChangeActive = () => {
    return setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <ColumnBlock>
      <ThemeWrapper>
        <ThemeTitle>Theme</ThemeTitle>
        <ThemeContainer>
          <Switcher onChange={handleChangeActive} isActive={theme === 'dark'} />
        </ThemeContainer>
      </ThemeWrapper>
      <StyledLink to={routes.login}><Item onClick={logOut} item={'Log Out'} /></StyledLink>
    </ColumnBlock>
  );
};
