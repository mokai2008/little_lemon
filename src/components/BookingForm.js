import React, { useState } from "react";
import "./FormStyles.css"; // Import your CSS file

const BookingForm = () => {
  const [formValues, setFormValues] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const [errors, setErrors] = useState({});

  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const validate = (values) => {
    const errors = {};
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
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formValues);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formValues);
      // Reset form values if needed
      setFormValues({
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
        style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
      >
        <div className="form-group">
          <label htmlFor="date">Choose date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formValues.date}
            onChange={handleChange}
          />
          {errors.date && <div className="error">{errors.date}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="time">Choose time:</label>
          <select
            id="time"
            name="time"
            value={formValues.time}
            onChange={handleChange}
          >
            <option value="" label="Select time" />
            {/* Step 2: Map available times to options */}
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && <div className="error">{errors.time}</div>}
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
          />
          {errors.guests && <div className="error">{errors.guests}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            name="occasion"
            value={formValues.occasion}
            onChange={handleChange}
          >
            <option value="" label="Select occasion" />
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {errors.occasion && <div className="error">{errors.occasion}</div>}
        </div>

        <button type="submit">Make Your Reservation</button>
      </form>
    </div>
  );
};

export default BookingForm;
