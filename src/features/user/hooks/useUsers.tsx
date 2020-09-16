import { useState, useEffect } from "react";
import { User } from "../models";

const useUsers = (term?: string): [User[], boolean, string?, number?, number?] => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [rateLimitRemaining, setRateLimitRemaining] = useState<number>();
  const [rateLimitReset, setRateLimitReset] = useState<number>();

  useEffect(() => {
    const fetchUsers = async () => {
      if (!term) return;

      setLoading(true);
      const response = await fetch(`https://api.github.com/search/users?q=${term}`);
      setLoading(false);

      setRateLimitRemaining(parseInt(response.headers.get("X-Ratelimit-Remaining") || "0"));
      setRateLimitReset(parseInt(response.headers.get("X-Ratelimit-Reset") || "0"));

      if (!response.ok) {
        setError(response.statusText);
        return;
      }

      const result = await response.json();
      setUsers(result.items);
    };

    fetchUsers();
  }, [term]);

  return [users, loading, error, rateLimitRemaining, rateLimitReset];
};

export default useUsers;
