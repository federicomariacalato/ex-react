import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const counterState = createSlice({
  name: `counter`,
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
    decrement: (state, action: PayloadAction<number>) => state - action.payload,
    reset: (_state, action: PayloadAction<number | undefined>) =>
      action.payload ?? 0,
  },
});

// export const defaultState = 0;

// export const INCREMENT = `COUNTER/INCREMENT`;
// export const DECREMENT = `COUNTER/DECREMENT`;
// export const RESET = `COUNTER/RESET`;

// export function increment(value: number) {
//   return {
//     type: INCREMENT,
//     payload: value,
//   };
// }

// export function decrement(value: number) {
//   return {
//     type: DECREMENT,
//     payload: value,
//   };
// }

// export function reset(value: number = defaultState) {
//   return {
//     type: RESET,
//     payload: value,
//   };
// }

// export function counterReducer(state = defaultState, action: any) {
//   switch (action.type) {
//     case INCREMENT: {
//       return state + action.payload;
//     }
//     case DECREMENT: {
//       return state - action.payload;
//     }
//     case RESET: {
//       return action.payload;
//     }
//     default: {
//       return state;
//     }
//   }
// }
