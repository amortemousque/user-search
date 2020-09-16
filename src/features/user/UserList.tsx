import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = () => {
  const users = [
    {
      id: 1,
      login: "test",
      html_url: "https://github.com/amortemousque",
      avatar_url:
        "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/logo_Google_FullColor_3x_830x271px.max-2800x2800.png",
    },
    {
      id: 2,
      login: "test",
      html_url: "https://github.com/amortemousque",
      avatar_url:
        "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/logo_Google_FullColor_3x_830x271px.max-2800x2800.png",
    },
    {
      id: 3,
      login: "test",
      html_url: "https://github.com/amortemousque",
      avatar_url:
        "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/logo_Google_FullColor_3x_830x271px.max-2800x2800.png",
    },
  ];
  return (
    <div>
      <div>
        <input name="term" />
      </div>
      <section className="user-list">
        {users.map((u) => (
          <UserItem key={u.id} user={u}></UserItem>
        ))}
      </section>
    </div>
  );
};

export default UserList;
