import { useState } from "react";
import { GithubUser } from "./GithubUser";

type GithubUsersProps = {
  usernames: string[];
};

export function GithubUsers({ usernames }: GithubUsersProps) {
  const [selectedUsername, setSelectedUsername] = useState<string | null>(null);
  return (
    <>
      <div>
        <ul>
          {usernames.map((user, index) => (
            <li key={index}>
              <button onClick={() => setSelectedUsername(user)}>{user}</button>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        {selectedUsername ? <GithubUser username={selectedUsername} /> : null}
      </div>
    </>
  );
}
