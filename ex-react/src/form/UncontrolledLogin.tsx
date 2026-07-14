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
        <label className="font-extrabold text-blue-800" htmlFor="email">
          Email
        </label>
        <input className="rounded-2xl border-2" type="email" name="email" />
      </div>
      <div>
        <label className="font-extrabold text-blue-800" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-2xl border-2"
          type="password"
          name="password"
        />
      </div>

      <button className="text-2xl text-emerald-700" type="submit">
        Login
      </button>
    </form>
  );
}
