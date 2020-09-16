import { useState, useEffect } from "react";
import { User } from "../models";

const useUsers = (term?: string): [User[], boolean, string?] => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!term) return;

      setLoading(true);
      const response = await fetch(`https://api.github.com/search/users?q=${term}`);
      setLoading(false);

      const result = await response.json();

      if (!response.ok) {
        setError(response.statusText);
        return;
      }
      
      setUsers(result.items);
    };

    fetchUsers();
  }, [term]);

  return [users, loading, error];
};

export default useUsers;
