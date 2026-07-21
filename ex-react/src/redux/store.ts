import { counterState } from "./state/counter.state";
import { todosState } from "./state/todos.state";
import {
  combineReducers,
  configureStore,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { loggingMiddleware } from "./middleware/loggingMiddleware";
import { delayMiddleware } from "./middleware/delayMiddleware";
import { userState } from "./state/user.state";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch

export const rootReducer = combineReducers({
  counter: counterState.reducer,
  todo: todosState.reducer,
  user: userState.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggingMiddleware, delayMiddleware),
});
