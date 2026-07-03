import { useEffect, useRef } from "react";

export function FocusableInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return <input type="text" ref={inputRef} />;
}

export function MountedTracker() {
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!isMountedRef.current) {
      console.log("Il componente è stato montato per la prima volta!");
      isMountedRef.current = true;
    }
  }, []);

  return (
    <div>
      <h3>Componente MountedTracker</h3>
    </div>
  );
}
