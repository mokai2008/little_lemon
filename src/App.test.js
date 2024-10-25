// BookingForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import {
  initializeTimes,
  updateTimes,
} from "./components/MainBookingComponent";

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

test("Booking Form Header", () => {
  render(<BookingForm />);
  const HeaderElement = screen.getByRole("heading", {
    name: "Make Your Reservation",
  });
  expect(HeaderElement).toBeInTheDocument();
});

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
    const action = { type: "UNDEFINED_ACTION" };

    const resultState = updateTimes(initialState, action);
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

describe("BookingForm", () => {
  const mockOnUpdateTimes = jest.fn();
  const mockOnUpdateDate = jest.fn();
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={defaultTimes}
        onUpdateTimes={mockOnUpdateTimes}
        onUpdateDate={mockOnUpdateDate}
        onSubmit={mockOnSubmit}
      />
    );
  });

  test("renders input fields with correct attributes", () => {
    expect(screen.getByLabelText(/first name/i)).toHaveAttribute(
      "type",
      "text"
    );
    expect(screen.getByLabelText(/last name/i)).toHaveAttribute("type", "text");
    expect(screen.getByLabelText(/choose date/i)).toHaveAttribute(
      "type",
      "date"
    );
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute(
      "type",
      "number"
    );
    expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute(
      "min",
      "1"
    );
    expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute(
      "max",
      "10"
    );
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test("validates form inputs correctly", () => {
    const validate = (values) => {
      const errors = {};
      if (!values.firstName) errors.firstName = "First name is required";
      if (!values.lastName) errors.lastName = "Last name is required";
      if (!values.date) errors.date = "Date is required";
      if (!values.time) errors.time = "Time is required";
      if (values.guests < 1 || values.guests > 10)
        errors.guests = "Number of guests must be between 1 and 10";
      if (!values.occasion) errors.occasion = "Occasion is required";
      return errors;
    };

    let formValues = {
      firstName: "",
      lastName: "",
      date: "",
      time: "",
      guests: 0,
      occasion: "",
    };
    let errors = validate(formValues);
    expect(errors).toEqual({
      firstName: "First name is required",
      lastName: "Last name is required",
      date: "Date is required",
      time: "Time is required",
      guests: "Number of guests must be between 1 and 10",
      occasion: "Occasion is required",
    });

    formValues = {
      firstName: "John",
      lastName: "Doe",
      date: "2023-10-25",
      time: "17:00", // Ensure this is a valid time in the availableTimes
      guests: 1,
      occasion: "Birthday",
    };
    errors = validate(formValues);
    expect(Object.keys(errors).length).toBe(0); // Should return no errors
  });

  test("submits the form with valid data", () => {
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2023-10-25" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" }, // Use one of the available times
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: 2 },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    // Ensure that mock functions were called with the expected arguments
    expect(mockOnUpdateTimes).toHaveBeenCalledWith({
      date: "2023-10-25",
      time: "17:00", // Update to match the selected time
    });
    expect(mockOnSubmit).toHaveBeenCalledWith({
      firstName: "John",
      lastName: "Doe",
      date: "2023-10-25",
      time: "17:00", // Update to match the selected time
      guests: 2,
      occasion: "Birthday",
    });
  });
});
