import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export const todosState = createSlice({
  name: `todos`,
  initialState: [] as Todo[],
  reducers: {
    add: (state, action: PayloadAction<Todo>) => [...state, action.payload],
    remove: (state, action: PayloadAction<number>) =>
      state.filter((todo) => todo.id !== action.payload),
    edit: (state, action: PayloadAction<Todo>) =>
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
          };
        }
        return todo;
      }),
  },
});

// export const defaultState = [] as Todo[];

// export const ADD = `TODOS/ADD`;
// export const REMOVE = `TODOS/REMOVE`;
// export const EDIT = `TODOS/EDIT`;

// export function addTodo(todo: Todo) {
//   return {
//     type: ADD,
//     payload: todo,
//   };
// }

// export function removeTodo(id: number) {
//   return {
//     type: REMOVE,
//     payload: id,
//   };
// }

// export function editTodo({ id, title }: { id: number; title: string }) {
//   return {
//     type: EDIT,
//     payload: { id, title },
//   };
// }

// export function todosReducer(state = defaultState, action: any) {
//   switch (action.type) {
//     case ADD: {
//       return [...state, action.payload];
//     }

//     case REMOVE: {
//       return state.filter((todo) => todo.id !== action.payload);
//     }

//     case EDIT: {
//       return state.map((todo) => {
//         if (todo.id === action.payload.id) {
//           return {
//             ...todo,
//             title: action.payload.title,
//           };
//         }
//         return todo;
//       });
//     }

//     default: {
//       return state;
//     }
// }
