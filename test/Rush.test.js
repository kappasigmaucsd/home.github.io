//import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import { Rush } from "../src/components";

// Test 1
test("renders rush component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Rush />, div);
});

// Test 2
test("renders title correctly", () => {
  render(<Rush />);
  const rushTitle = screen.getByText("Rush Kappa Sigma");
  expect(rushTitle).toBeInTheDocument();
});

// Test 3
test("renders rush link", () => {
  render(<Rush />);
  const rushLink = screen.getByText("Click here to sign up for rush");
  expect(rushLink).toBeInTheDocument();
});

// Test 4
test("renders rush events", () => {
  render(<Rush />);
  const rushLink = screen.getByText("Events:");
  expect(rushLink).toBeInTheDocument();

  let events = [
    {
      name: "Meet the chapters",
      date: "4/3",
      time: "6pm PST",
      location: "",
    },
    {
      name: "Bubble soccer",
      date: "4/4",
      time: "6pm PST",
      location: "",
    },
    {
      name: "Night of 1k wings",
      date: "4/5",
      time: "6pm PST",
      location: "",
    },
    {
      name: "Poker night",
      date: "4/6",
      time: "6pm PST",
      location: "",
    },
    {
      name: "Ring of fire (invite only)",
      date: "4/7",
      time: "",
      location: "",
    },
  ];

  // events.forEach((rushEvent) => {
  //   const rushLink = screen.getAllByTestId
  //   expect(rushLink).toBeInTheDocument();
  // });
});
