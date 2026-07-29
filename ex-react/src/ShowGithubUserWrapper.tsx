// src/ShowGithubUserWrapper.tsx
import { useParams } from "react-router";
import { ShowGithubUser } from "./ShowGithubUser";

export function ShowGithubUserWrapper() {
  const { username } = useParams<{ username: string }>();

  if (!username) return null;

  return <ShowGithubUser username={username} />;
}
