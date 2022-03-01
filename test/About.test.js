//import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import { About } from "../src/components";

// Test 1
test("renders about component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<About />, div);
});

// Test 2
test("renders title correctly", () => {
  render(<About />);
  const rushTitle = screen.getByText("About Kappa Sigma");
  expect(rushTitle).toBeInTheDocument();
});
