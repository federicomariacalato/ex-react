import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: number;
  name: string;
  login: string;
};

export const userState = createSlice({
  name: "users",
  initialState: [] as User[],
  reducers: {
    add: (state, action: PayloadAction<User>) => [...state, action.payload],
    remove: (state, action: PayloadAction<number>) =>
      state.filter((user) => user.id !== action.payload),
  },
});
