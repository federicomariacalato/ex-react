import React from "react";

export function MouseClicker() {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button name:", event.currentTarget.name);
  };

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();

    console.log("Image src:", event.currentTarget.src);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Esercizio MouseClicker</h2>

      <button name="one" onClick={handleButtonClick}>
        <img
          src="https://picsum.photos/50"
          alt="Placeholder Icon"
          onClick={handleImageClick}
          style={{
            marginRight: "8px",
            verticalAlign: "middle",
            borderRadius: "4px",
          }}
        />
        Cliccami
      </button>
    </div>
  );
}
