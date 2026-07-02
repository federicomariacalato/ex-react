import type { BaseSyntheticEvent } from "react";

export function UncontrolledLogin() {
  function handleLogin(event: BaseSyntheticEvent) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log("Email: " + email, "Password: " + password);
  }
  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
