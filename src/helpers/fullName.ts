type Props = {
  firstName: string;
  lastName: string;
}

export const getFullName = ({firstName, lastName}: Props) => {
  if (!lastName && !firstName) return false;
  if (!firstName) return `${lastName}`;
  if (!lastName) return `${firstName}`;
  return `${firstName} ${lastName}`;
};
