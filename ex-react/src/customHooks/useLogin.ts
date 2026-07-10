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

  return [
    username,
    password,
    {
      handlePasswordChange,
      handleRememberChange,
      handleUsernameChange,
      handleReset,
      handleSubmit,
    },
  ] as const;
}
