import { useEffect, useState, useRef } from "react";

type CounterProps = {
  initialValue: number;
  incrementAmount: number;
};

export function Counter({ initialValue, incrementAmount }: CounterProps) {
  const [counter, setCounter] = useState(initialValue);

  const directionRef = useRef("");

  useEffect(() => {
    let currentDirection =
      counter > initialValue ? "up" : counter < initialValue ? "down" : "";

    if (currentDirection !== directionRef.current) {
      console.log(currentDirection);
    }
    directionRef.current = currentDirection;
  }, [counter]);

  function incrementCounter() {
    setCounter((n) => n + incrementAmount);
  }
  function decreaseCounter() {
    setCounter((n) => n - incrementAmount);
  }
  function resetCounter() {
    setCounter(initialValue);
  }
  return [
    counter,
    { incrementCounter, decreaseCounter, resetCounter },
  ] as const;
}
