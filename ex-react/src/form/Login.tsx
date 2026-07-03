import { useState, type ChangeEvent, type FormEvent } from "react";

type LoginData = {
  username: string;
  password: string;
  remember: boolean;
};

type LoginProps = {
  onLogin: (data: LoginData) => void;
};

export function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleUsernameChange(event: ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleRememberChange(event: ChangeEvent<HTMLInputElement>) {
    setRemember(event.target.checked);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onLogin({
      username: username,
      password: password,
      remember: remember,
    });
  }

  function handleReset() {
    setPassword("");
    setUsername("");
    setRemember(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>

      <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <input
          type="checkbox"
          checked={remember}
          onChange={handleRememberChange}
        />
        Ricordami
      </label>

      <button type="submit" disabled={!username || !password}>
        Login
      </button>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}
