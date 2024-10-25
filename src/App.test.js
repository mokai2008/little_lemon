import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingForm";
import {
  initializeTimes,
  updateTimes,
} from "./components/MainBookingComponent";

test("Booking Form Header", () => {
  render(<BookingForm />);
  const HeaderElement = screen.getByRole("heading", {
    name: "Make Your Reservation",
  });
  expect(HeaderElement).toBeInTheDocument();
});

// Mock default times to match your reducer
const defaultTimes = [
  "17:00",
  "17:30",
  "18:30",
  "19:00",
  "20:00",
  "22:00",
  "22:30",
];

describe("initializeTimes", () => {
  test("should return the correct default times array", () => {
    const times = initializeTimes();
    expect(times).toEqual(defaultTimes);
  });
});

describe("updateTimes", () => {
  test("should return the same state if no matching date is found", () => {
    const initialState = [
      { selectedDate: "2023-10-10", availableTimes: [...defaultTimes] },
    ];
    const action = { type: "UNDEFINED_ACTION" }; // an action that does not match the reducer

    const resultState = updateTimes(initialState, action);

    // Expect that the initial state remains unchanged
    expect(resultState).toEqual(initialState);
  });

  test("should add a new date with default times if the date doesn't exist", () => {
    const initialState = [];
    const action = { type: "UPDATE_DATE", payload: "2023-11-01" };

    const resultState = updateTimes(initialState, action);

    expect(resultState).toEqual([
      { selectedDate: "2023-11-01", availableTimes: defaultTimes },
    ]);
  });
});
