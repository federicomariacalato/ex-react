import { Message } from "./Message";

type WelcomeProps = {
  name: string;
  age: number;
};

export function Welcome({ name, age }: WelcomeProps) {
  return (
    <div>
      <p>Welcome, {name}!</p>
      <Message age={age} />
    </div>
  );
}
