import React from "react";
import "./UserList.css";

const UserList = () => {
  const users = [
    {
      login: "test",
      html_url: "https://github.com/amortemousque",
      avatar_url:
        "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/logo_Google_FullColor_3x_830x271px.max-2800x2800.png",
    },
    {
      login: "test",
      html_url: "https://github.com/amortemousque",
      avatar_url:
        "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/logo_Google_FullColor_3x_830x271px.max-2800x2800.png",
    },
    {
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
          <article className="user-item">
            <img
              className="user-item__img"
              alt="avatar"
              src={u.avatar_url}
              loading="lazy"
              height="200"
            />
            <div className="user-item__body">
              <h1 className="user-item__title">{u.login}</h1>
              <a href={u.html_url}>Github</a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default UserList;
