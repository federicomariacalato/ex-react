import { InteractiveWelcome } from "./form/InteractiveWelcome";
import { Login } from "./form/Login";
import { UncontrolledLogin } from "./form/UncontrolledLogin";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <>
      <div>
        <InteractiveWelcome />
      </div>
      <div>
        <Login onLogin={console.log();
        }/>
      </div>
    </>
  );
}
