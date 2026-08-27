import * as matchers from "@testing-library/jest-dom/matchers";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Welcome } from "./Welcome";

expect.extend(matchers);

describe("<Message />", () => {
  it("renders a message with name and age", () => {
    const { container } = render(<Welcome name="Federico" age={25} />);

    expect(container.textContent).toContain(
      "Welcome, Federico! Your age is 25",
    );
  });
});
