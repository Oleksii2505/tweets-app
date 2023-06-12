import { filterValues } from './filterValues';

const { all, follow, followings } = filterValues;

export const filterUsers = (users, myFollowings, filter) => {
  switch (filter) {
    case all.value:
      return users;
    case follow.value:
      return users.filter(({ id }) => !myFollowings.includes(id));
    case followings.value:
      return users.filter(({ id }) => myFollowings.includes(id));
    default:
      return users;
  }
};