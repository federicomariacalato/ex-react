import { Age } from "./Age";

type WelcomeProps = {
  name: React.ReactNode;
  age: number
};

export function Welcome({ name, age }: WelcomeProps) {
  return (
    <>
      <p>Welcome {name}!</p>
      <Age age={age} />
    </>
  );
}
