import { useState, useEffect } from "react";
import { User } from "../models";

const useUsers = (term?: string): [User[], string?] => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchUsers = async () => {
      if (!term) return;

      const response = await fetch(`https://api.github.com/search/users?q=${term}`);
      const result = await response.json();

      if (!response.ok) {
        setError(response.statusText);
        return;
      }
      
      setUsers(result.items);
    };

    fetchUsers();
  }, [term]);

  return [users, error];
};

export default useUsers;
