import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch } from "../store";

export type User = {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
};

export const usersSlice = createSlice({
  name: "users",
  initialState: [] as User[],
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;

export function fetchUser(username: string) {
  return async function (dispatch: AppDispatch) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("Utente non trovato");
      }

      const data = (await response.json()) as User;

      dispatch(addUser(data));
    } catch (error) {
      console.error("Errore durante il recupero dell'utente:", error);
    }
  };
}

export default usersSlice.reducer;
