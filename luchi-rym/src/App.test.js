import { render } from "@testing-library/react";

test("muestraono", () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/Hola Mundo! Tomamos Tere?/);
});
