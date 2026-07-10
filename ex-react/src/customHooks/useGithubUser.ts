import { useState } from "react";

export type User = {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
};

export function GithubUser() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUser = async (username: string) => {
    setLoading(true);
    setError(null);
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)

        if (!response.ok) {
            throw new Error("Errore");
        }
        const json: User = await response.json()
        setUser(json)
    }
    catch (error) {
        setError(new Error)
        setUser(null)
    }
    finally {
        setLoading(false)
    }
  }
  return {
    user,
    error,
    loading,
    fetchUser
  } as const;
}
