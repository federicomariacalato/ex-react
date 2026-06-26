import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

type CounterProps = {
  initialValue: number;
  incrementAmount: number;
};

export function Counter({ initialValue, incrementAmount }: CounterProps) {
  const [counter, setCounter] = useState(initialValue);
  useEffect(() => {
    console.log({ counter });
  }, [counter]);

  function incrementCounter() {
    setCounter((n) => n + incrementAmount);
    // Passando una funzione callback (es. `n => n + 1`), React ci garantisce che il parametro
    // (n) sia SEMPRE lo stato più recente e aggiornato
  }
  function decreaseCounter() {
    setCounter((n) => n - incrementAmount);
  }
  function resetCounter() {
    setCounter(initialValue);
  }
  return (
    <>
      <CounterDisplay counter={counter} />
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
}
