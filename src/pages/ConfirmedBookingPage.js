// ConfirmedBooking.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button"; // Import your custom Button component

const ConfirmedBooking = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleReturnHome = () => {
    navigate("/"); // Navigate back to the homepage
  };

  const styles = {
    confirmedBooking: {
      textAlign: "center",
      margin: "50px",
    },
    h1: {
      color: "#4caf50",
    },
    p: {
      fontSize: "18px",
      color: "#555",
    },
  };

  return (
    <div style={styles.confirmedBooking}>
      <h1 style={styles.h1}>Your Booking has been Confirmed!</h1>
      <p style={styles.p}>
        Thank you for making a reservation with us. We look forward to seeing
        you!
      </p>
      <Button title="Return to Homepage" onClick={handleReturnHome} />{" "}
    </div>
  );
};

export default ConfirmedBooking;
