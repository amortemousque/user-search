import React from "react";
import { User } from "./models";
import './UserItem.css';

type UserItemProps = {
  user: User;
};

const UserItem = ({ user }: UserItemProps) => {
  return (
    <article className="user-item">
      <img className="user-item__img" alt="avatar" src={user.avatar_url} loading="lazy" height="200" />
      <div className="user-item__body">
        <h1 className="user-item__title">{user.login}</h1>
        <a href={user.html_url} rel="noopener noreferrer" target="_blank">Github</a>
      </div>
    </article>
  );
};

export default UserItem;
