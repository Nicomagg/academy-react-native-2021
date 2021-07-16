import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import App from "./App";

test("muestraono", () => {
  const { getByText } = render(<App />);
  const p = getByText(
    /This is a simple WebApp which permits you to find any character from famous Rick & Morty animated show. Push the button to see all characters or search anything in particular./
  );
  expect(p).toHaveTextContent(
    "This is a simple WebApp which permits you to find any character from famous Rick & Morty animated show. Push the button to see all characters or search anything in particular."
  );
});
