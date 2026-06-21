import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Welcome name={<strong> "Federico"</strong>} age={25} />
    </div>
  );
}

// In un'applicazione React, crea un componente funzionale Welcome che riceva una prop name e visualizzi il messaggio "Welcome, {name}!" all'interno di un tag <p>.
// Renderizza questo componente nel componente App, passando una prop name a tua scelta. Imposta un valore predefinito per la prop name.
// Aggiungi una seconda prop chiamata age e visualizzala sotto il messaggio di benvenuto, all'interno di un tag <p> dopo il testo "Your age is ".
// 4 .Modifica il valore passato alla prop name in modo che sia contenuto all'interno di un tag <strong>.