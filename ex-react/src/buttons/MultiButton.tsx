import React from "react";

export function MultiButton() {
  const handleAnyButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Pulsante cliccato:", event.currentTarget.name);
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h2>Esercizio MultiButton</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button name="one" onClick={handleAnyButtonClick}>
          Pulsante One
        </button>

        <button name="two" onClick={handleAnyButtonClick}>
          Pulsante Two
        </button>

        <button name="three" onClick={handleAnyButtonClick}>
          Pulsante Three
        </button>
      </div>
    </div>
  );
}
