// MainBookingComponent.js
import React, { useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../api"; // Ensure you have the fetchAPI method
import { useNavigate } from "react-router-dom"; // Import useNavigate

export function initializeTimes() {
  return fetchAPI(new Date());
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_DATE": {
      const date = action.payload;
      const availableTimes = fetchAPI(new Date(date));
      const dateEntry = state.find((item) => item.selectedDate === date);

      if (!dateEntry) {
        // Add new date with default times if it doesn't exist
        return [
          ...state,
          { selectedDate: date, availableTimes: availableTimes },
        ];
      }
      return state;
    }

    case "UPDATE_TIMES": {
      const { date, time } = action.payload;
      return state.map((item) => {
        if (item.selectedDate === date) {
          // Filter out the selected time for the specified date
          return {
            ...item,
            availableTimes: item.availableTimes.filter((t) => t !== time),
          };
        }
        return item;
      });
    }

    default:
      return state;
  }
}

const MainBookingComponent = () => {
  const [state, dispatch] = useReducer(updateTimes, []);
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const submitForm = async (formData) => {
    const success = await submitAPI(formData); // Call your submit API
    if (success) {
      navigate("/confirmed"); // Navigate to the confirmation page
    }
  };

  function handleUpdateDate(date) {
    setSelectedDate(date);
    dispatch({ type: "UPDATE_DATE", payload: date });
  }

  function handleUpdateTimes(data) {
    dispatch({ type: "UPDATE_TIMES", payload: data });
  }

  const dateEntry = state.find((item) => item.selectedDate === selectedDate);
  const availableTimes = dateEntry
    ? dateEntry.availableTimes
    : initializeTimes();

  return (
    <BookingForm
      availableTimes={availableTimes}
      onUpdateTimes={handleUpdateTimes}
      onUpdateDate={handleUpdateDate}
      onSubmit={submitForm} // Pass the submit function to the BookingForm
    />
  );
};

export default MainBookingComponent;
