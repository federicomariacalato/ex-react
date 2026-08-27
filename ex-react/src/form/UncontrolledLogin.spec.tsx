// @vitest-environment jsdom
import * as matchers from "@testing-library/jest-dom/matchers";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { UncontrolledLogin } from "./UncontrolledLogin";

expect.extend(matchers);

describe("<UncontrolledLogin />", () => {
  it("renders the form inputs and submit button", () => {
    render(<UncontrolledLogin />);

    // 1. Verifica che gli elementi siano presenti a schermo
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const button = screen.getByRole("button", { name: "Login" });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("allows entering text into inputs", () => {
    render(<UncontrolledLogin />);

    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;

    // 2. Simula l'inserimento del testo tramite fireEvent.change
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    expect(emailInput.value).toBe("test@example.com");
  });
});
