import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.css";
import { store } from "./redux/store.ts";
import { counterState } from "./redux/state/counter.state.ts";
import { todosState } from "./redux/state/todos.state.ts";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(counterState.actions.increment(2));

store.dispatch(
  todosState.actions.add({
    id: 1,
    title: "portare fuori il cane",
    completed: false,
  }),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
