import { useState, type BaseSyntheticEvent } from "react";
import { Welcome } from "../Welcome";

export function InteractiveWelcome() {
  const [username, setUsername] = useState("");
  
  function handleUsername(event: BaseSyntheticEvent) {
    setUsername(event.target.value);
  }
  return (
    <form>
      <input type="text" value={username} onChange={handleUsername} />
      <Welcome name={username} age={25} />
    </form>
  );
}
