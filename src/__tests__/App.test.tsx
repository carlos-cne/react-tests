import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";

import App from "../App";

afterEach(cleanup);

describe("This is the first test", () => {
  test("test elements from DOM", () => {
    window.alert = jest.fn();
    const { container } = render(<App />);

    const input = container.querySelectorAll("input")[0];
    const button = container.querySelectorAll("button")[0];

    fireEvent.change(input, { target: { value: "teste" } });
    expect(input.value).toBe("teste");

    fireEvent.click(button);
  });
});
