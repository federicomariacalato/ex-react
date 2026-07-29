import { Link, Route, Routes } from "react-router";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { NotFound } from "./NotFound";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUserWrapper } from "./ShowGithubUserWrapper";

export function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users">Github Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="John" age={25} />} />
        <Route
          path="/counter"
          element={<Counter incrementAmount={1} initialValue={0} />}
        />

        {/* Rotta principale /users con rotta annidata e index route */}
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
          <Route path=":username" element={<ShowGithubUserWrapper />} />
        </Route>

        {/* Catch-all route per le pagine 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
