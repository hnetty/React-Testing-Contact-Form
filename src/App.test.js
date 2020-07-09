import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test('renders text on app', () => {
  const {getByText} = render(<App />);

  const text = getByText(/message/i);

  expect(text).toBeInTheDocument();

});

test('tests the length of the first name input', () => {

  const {getByInput} = render(<App/>);

  const input = 'bob'

  expect(input).toHaveLength(3);
  

});