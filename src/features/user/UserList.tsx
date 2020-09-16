import React, { useState } from "react";
import useDebounce from "./hooks/useDebounce";
import useUsers from "./hooks/useUsers";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = () => {
  const [term, setTerm] = useState<string>("");
  const debounceTerm = useDebounce(term, 300);
  const [users, loading, noResult, error, rateLimitRemaining, rateLimitReset] = useUsers(
    debounceTerm
  );
  const renderWaitingTime = () =>
    rateLimitReset ? Math.round((rateLimitReset * 1000 - Date.now()) / 1000) : "";

  const searchField = (
    <input
      name="term"
      placeholder="Search"
      value={term}
      onChange={e => setTerm(e.target.value)}
      className="user-search"
    />
  );

  if (loading)
    return (
      <>
        {searchField} <p>Loading...</p>
      </>
    );
    console.log(error)
  if (error)
    return (
      <>
        {searchField}
        <p>{error}</p>
        {rateLimitRemaining === 0 && (
          <p>Please wait for <strong>{renderWaitingTime()}</strong> seconds before a new search.</p>
        )}
      </>
    );

  if (noResult)
    return (
      <>
        {searchField} <p>No results</p>
      </>
    );

  return (
    <>
      {searchField}
      <section className="user-list">
        {users?.map(user => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </section>
    </>
  );
};

export default UserList;
