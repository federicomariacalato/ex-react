import type { RootState } from "../store";
import type { Middleware } from "redux";

export const delayMiddleware: Middleware<{}, RootState> =
  (_state) => (next) => (action) => {
    setInterval(() => {
      next(action);
    }, 2000);

    return next(action);
  };
