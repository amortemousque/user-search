import React, { useState } from "react";
import useUsers from "./hooks/userUsers";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = () => {
  const [term, setTerm] = useState<string>("");
  const users = useUsers(term);

  return (
    <>
      <input
        name="term"
        placeholder="Search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="user-search"
      />
      <section className="user-list">
        {users.map((u) => (
          <UserItem key={u.id} user={u}></UserItem>
        ))}
      </section>
    </>
  );
};

export default UserList;
