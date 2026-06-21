import { Age } from "./Age";
import { Message } from "./Message";

type WelcomeProps = {
  name: React.ReactNode;
  age: number;
};

export function Welcome({ name, age }: WelcomeProps) {
  return (
    <>
      <p>Welcome {name}!</p>
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && name === "John" && <Age age={age} />}
      <Message age={25} />
    </>
  );
}
