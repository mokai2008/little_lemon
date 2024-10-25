import React, { useState } from "react";
import "./FormStyles.css"; // Import your CSS file

const BookingForm = ({
  availableTimes = [],
  onUpdateTimes,
  onUpdateDate,
  onSubmit,
}) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!values.date) {
      errors.date = "Date is required";
    }
    if (!values.time) {
      errors.time = "Time is required";
    }
    if (values.guests < 1 || values.guests > 10) {
      errors.guests = "Number of guests must be between 1 and 10";
    }
    if (!values.occasion) {
      errors.occasion = "Occasion is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert guests to a number if the field is 'guests'
    const newValue = name === "guests" ? Number(value) : value;

    if (name === "date") {
      onUpdateDate(value);
    }

    setFormValues({
      ...formValues,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formValues);
    if (Object.keys(validationErrors).length === 0) {
      onUpdateTimes({
        date: formValues.date,
        time: formValues.time,
      });
      onSubmit(formValues);

      setFormValues({
        firstName: "",
        lastName: "",
        date: "",
        time: "",
        guests: 1,
        occasion: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <h1>Make Your Reservation</h1>
      <form
        onSubmit={handleSubmit}
        className="form-grid"
        aria-labelledby="bookingFormTitle"
      >
        {/* Added an ID for ARIA label */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            aria-label="First Name" // ARIA label for accessibility
            required // Mark as required for accessibility
          />
          {errors.firstName && (
            <div className="error" role="alert">
              {errors.firstName}
            </div>
          )}{" "}
          {/* Added role alert */}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            aria-label="Last Name" // ARIA label for accessibility
            required // Mark as required for accessibility
          />
          {errors.lastName && (
            <div className="error" role="alert">
              {errors.lastName}
            </div>
          )}{" "}
          {/* Added role alert */}
        </div>
        <div className="form-group">
          <label htmlFor="date">Choose date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formValues.date}
            onChange={handleChange}
            aria-label="Date" // ARIA label for accessibility
            required // Mark as required for accessibility
          />
          {errors.date && (
            <div className="error" role="alert">
              {errors.date}
            </div>
          )}{" "}
          {/* Added role alert */}
        </div>
        <div className="form-group">
          <label htmlFor="time">Choose time:</label>
          <select
            id="time"
            name="time"
            value={formValues.time}
            onChange={handleChange}
            aria-label="Select time" // ARIA label for accessibility
            required // Mark as required for accessibility
          >
            <option value="" label="Select time" />
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && (
            <div className="error" role="alert">
              {errors.time}
            </div>
          )}{" "}
          {/* Added role alert */}
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={formValues.guests}
            onChange={handleChange}
            placeholder="1"
            aria-label="Number of guests" // ARIA label for accessibility
            required // Mark as required for accessibility
          />
          {errors.guests && (
            <div className="error" role="alert">
              {errors.guests}
            </div>
          )}{" "}
          {/* Added role alert */}
        </div>
        <div className="form-group">
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            name="occasion"
            value={formValues.occasion}
            onChange={handleChange}
            aria-label="Select occasion" // ARIA label for accessibility
            required // Mark as required for accessibility
          >
            <option value="" label="Select occasion" />
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {errors.occasion && (
            <div className="error" role="alert">
              {errors.occasion}
            </div>
          )}{" "}
          {/* Added role alert */}
        </div>
        <button type="submit" aria-label="Make your reservation">
          Make Your Reservation
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
