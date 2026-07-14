import { useEffect, useRef } from "react";
import { InputGroup, Form } from "react-bootstrap";

export function FocusableInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm">
        Focusable Input
      </InputGroup.Text>
      <Form.Control
        ref={inputRef}
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
      />
    </InputGroup>
  );
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
