import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ShowGithubUser } from "./ShowGithubUser";

type SimpleUser = {
  id: number;
  login: string;
};

export function GithubUserList() {
  const [users, setUsers] = useState<SimpleUser[]>([]);
  const [loading, setLoading] = useState(true);
  const { username } = useParams<{ username?: string }>();

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data: SimpleUser[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel recupero degli utenti:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Caricamento lista utenti...</div>;
  }

  return (
    <div style={{ display: "flex", gap: "2rem", padding: "1rem" }}>
      {/* Colonna Sinistra: Elenco Link Utenti */}
      <div>
        <h3>Utenti GitHub</h3>
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              <Link to={`/users/${u.login}`}>{u.login}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Colonna Destra: Componente ShowGithubUser quando selezionato */}
      <div>
        {username ? (
          <ShowGithubUser username={username} />
        ) : (
          <p>Seleziona un utente dalla lista</p>
        )}
      </div>
    </div>
  );
}
