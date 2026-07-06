import { useState } from "react";

export function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<string[]>([]);

  function handleAddTodo() {
    setItems((prevItems) => [...prevItems, inputValue]);
    setInputValue("");
  }

  function handleReset() {
    setItems([]);
  }

  function handleRemoveTodo(indexToRemove: number) {
    setItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove),
    );
  }

  return (
    <>
      <ul>
        {items.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Rimuovi</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Aggiungi</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
