import React, { useState } from "react";
import useDebounce from "./hooks/useDebounce";
import useUsers from "./hooks/useUsers";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = () => {
  const [term, setTerm] = useState<string>("");
  const debounceTerm = useDebounce(term, 300);
  const [users, loading, error] = useUsers(debounceTerm);

  return (
    <>
      <input
        name="term"
        placeholder="Search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="user-search"
      />
      {!loading && !error && (
        <section className="user-list">
          {users?.map((user) => (
            <UserItem key={user.id} user={user}></UserItem>
          ))}
        </section>
      )}
      {!loading && error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
    </>
  );
};

export default UserList;
