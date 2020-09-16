import React, { useState } from "react";
import useDebounce from "./hooks/useDebounce";
import useUsers from "./hooks/useUsers";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = () => {
  const [term, setTerm] = useState<string>("");
  const debounceTerm = useDebounce(term, 300);
  const [users, error] = useUsers(debounceTerm);

  if (error) return <p>{error}</p>;
  
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
