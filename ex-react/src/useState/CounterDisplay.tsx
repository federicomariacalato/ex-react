import type { CSSProperties } from "react";

type CounterDsplayProps = {
  counter: number;
};

export function CounterDisplay({ counter }: CounterDsplayProps) {
  const CounterStyle: CSSProperties = {
    textAlign: "center",
    color: "blue",
  };

  return <h2 style={CounterStyle}>{counter}</h2>;
}
