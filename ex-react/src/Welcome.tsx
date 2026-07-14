import { Age } from "./Age";
import { Message } from "./Message";
import "./style/index.css";

type WelcomeProps = {
  name: string;
  age: number;
};

export function Welcome({ name, age }: WelcomeProps) {
  return (
    <div className="welcome">
      <p>Welcome, {name}!</p>

      {age > 18 && <Age age={age} />}

      {age !== undefined && <Age age={age} />}

      {age > 18 && age < 65 && <Age age={age} />}

      {age > 18 && name === "John" && <Age age={age} />}

      <Message age={age} />
    </div>
  );
}
