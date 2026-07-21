import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
import type { RootState } from "../store";

export function ReduxCounter() {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contatore: {count}</h2>
      <button onClick={() => dispatch(increment())}>Incrementa</button>
      <button onClick={() => dispatch(decrement())}>Decrementa</button>
    </div>
  );
}
