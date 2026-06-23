type CounterDsplayProps = {
  counter: number;
};

export function CounterDisplay({ counter }: CounterDsplayProps) {
  return <h2>{counter}</h2>;
}
