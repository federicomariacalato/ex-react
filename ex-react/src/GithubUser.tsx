import { useEffect, useState } from "react";

export type GithubUserProps = {
  username: string;
};

export type User = {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
};

export function GithubUser({ username }: GithubUserProps) {
  const [user, setUser] = useState<User | null>(null);
  console.log(user);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setUser(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);
  if (!user) {
    return <div>Caricamento in corso...</div>;
  }
  return (
    <div>
      <h2>{user.name}</h2>
      <h4>{user.login}</h4>
      <img src={user.avatar_url} />
    </div>
  );
}
