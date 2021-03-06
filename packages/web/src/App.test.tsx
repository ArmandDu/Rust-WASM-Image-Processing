import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("@my-wasm/image-effects");

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/upload png image/i);
  expect(linkElement).toBeInTheDocument();
});
