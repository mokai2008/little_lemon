import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./FormStyles.css"; // Import your CSS file

const ReservationForm = () => {
  const initialValues = {
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  };

  const validationSchema = Yup.object({
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number()
      .min(1, "Minimum of 1 guest")
      .max(10, "Maximum of 10 guests")
      .required("Number of guests is required"),
    occasion: Yup.string().required("Occasion is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="form-container">
      <h1>Make Your Reservation</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form style={{ display: "grid", maxWidth: "300px", gap: "20px" }}>
            <div className="form-group">
              <label htmlFor="date">Choose date:</label>
              <Field type="date" id="date" name="date" />
              <ErrorMessage name="date" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="time">Choose time:</label>
              <Field as="select" id="time" name="time">
                <option value="" label="Select time" />
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
              </Field>
              <ErrorMessage name="time" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of guests:</label>
              <Field
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="10"
                placeholder="1"
              />
              <ErrorMessage name="guests" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion:</label>
              <Field as="select" id="occasion" name="occasion">
                <option value="" label="Select occasion" />
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Field>
              <ErrorMessage name="occasion" component="div" className="error" />
            </div>

            <button type="submit">Make Your Reservation</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReservationForm;
