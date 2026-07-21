import type { RootState } from "../store";
import type { Middleware } from "redux";

export const loggingMiddleware: Middleware<{}, RootState> =
  (_state) => (next) => (action) => {
    console.log(`Action received:`, action);

    return next(action);
  };
