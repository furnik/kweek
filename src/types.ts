export type MessageType = {
  id: string;
  creatorId: string;
  date: Date | string | number;
  content: string;
};

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  avatar: string;
  isFollowing?: boolean;
  totalNotifications: number;
};

export type FullUserType = UserType & {
  isOnline?: boolean;
}

export type ChatType = {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  username: string;
  isOnline?: boolean;
  avatar: string
  messages: Array<MessageType>;
}
