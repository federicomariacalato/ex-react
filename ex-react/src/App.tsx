import { StrictMode } from "react";
import { InteractiveWelcome } from "./form/InteractiveWelcome";
import { Login } from "./form/Login";
import { UncontrolledLogin } from "./form/UncontrolledLogin";
import { FocusableInput, MountedTracker } from "./useRef/FocusableInput";
import { Welcome } from "./Welcome";
import { Counter } from "./useRef/Counter";
import { Colors } from "./liste/Colors";
import { TodoList } from "./listeEStato/TodoList";

const ColorsName = [{ name: "giallo", id: 1 }];

export function App() {
  return (
    <StrictMode>
      <div>
        <InteractiveWelcome />
      </div>
      <div>
        <FocusableInput />
      </div>
      <div>
        <MountedTracker />
      </div>
      <div>
        <Counter initialValue={0} incrementAmount={1} />
      </div>
      <div>
        <Colors items={ColorsName} />
      </div>
      <div>
        <TodoList />
      </div>
    </StrictMode>
  );
}
