import { useState, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "./usersSlice";
import { RootState, AppDispatch } from "./store";

export function ReduxGithubUsers() {
  const [username, setUsername] = useState("");
  
  // Per i thunk asincroni con TypeScript, usiamo AppDispatch
  const dispatch = useDispatch<AppDispatch>();
  
  // Selezioniamo la lista degli utenti salvata nello store
  const users = useSelector((state: RootState) => state.users.list);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    // Dispatchiamo il thunk passando lo username digitato
    dispatch(fetchUser(username));
    
    // Puliamo l'input
    setUsername("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Inserisci username GitHub"
        />
        <button type="submit">Cerca</button>
      </form>

      <h3>Utenti recuperati:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} width={30} />
            <span> {user.login}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}