import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Input from "./input.js";

test("it renders", () => {
  render(<Input buttonText="Click me!" />);

  const button = screen.getByRole("button");
  expect(button).toBeTruthy();
  screen.debug();
});
