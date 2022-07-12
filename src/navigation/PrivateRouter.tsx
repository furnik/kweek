import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Layout} from '../components/Layout';
import {ChatsContainer} from '../containers/Chats';
import {ProfileContainer} from '../containers/Profile';
import {FriendsContainer} from '../containers/Friends';
import {routes} from '../constants/routes';
import {ChatContainer} from '../containers/Chats/ChatContainer';
import {NotificationsContainer} from '../containers/Notifications';

export const PrivateRouter: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path={routes.chats} element={<ChatsContainer />} />
        <Route path={routes.currentChat} element={<ChatContainer />} />
        <Route path={routes.currentProfile} element={<ProfileContainer />} />
        <Route path={routes.friends} element={<FriendsContainer />} />
        <Route path={routes.notifications} element={<NotificationsContainer />} />
        <Route path={routes.all} element={<Navigate to={routes.chats} />} />
      </Routes>
    </Layout>
  );
};
