import { useState, useEffect } from "react";
import { User } from "../models";

const useUsers = (term?: string): User[] => {
  const [users, setUsers] = useState<User[]>([]);
 
  useEffect(() => {
    const fetchUsers = async () => {
      if (!term) return;

      const response = await fetch(`https://api.github.com/search/users?q=${term}`);
      const result = await response.json();
      setUsers(result.items);
    };

    fetchUsers();
  }, [term]);

  return users;
};

export default useUsers;
