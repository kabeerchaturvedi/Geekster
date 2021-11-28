import React from "react";
import styles from "./seats.module.css";

function Seats({ handleSeatSelect, seats }) {
  const handleSeatClick = (seat) => () => {
    handleSeatSelect(seat);
  };

  return (
    <div className={styles.seats}>
      {seats.map((seat, index) => {
        return (
          <div key={`${index}-${seat.SeatNumber}`}>
            <button
              style={
                seat.SeatType === "Booked / Held"
                  ? {
                      backgroundColor: "#eee",
                      color: "#fff",
                      border: "#fff",
                      pointerEvents: "none",
                      lineHeight: "25px",
                    }
                  : seat.SeatType === "Gangway"
                  ? {
                      backgroundColor: "#fff",
                      color: "#fff",
                      border: "#fff",
                      pointerEvents: "none",
                      lineHeight: "25px",
                    }
                  : seat.SeatType === "Social Distancing"
                  ? {
                      background: "#eee",
                      cursor: "default",
                      color: "#fff",
                      border: "#fff",
                      pointerEvents: "none",
                      lineHeight: "25px",
                    }
                  : seat.SeatType === "Available"
                  ? {
                      border: "1px solid #1ea83c",
                      textAlign: "center",
                      lineHeight: "25px",
                    }
                  : seat.SeatType === "Currently Selected"
                  ? {
                      border: "1px solid #1ea83c",
                      textAlign: "center",
                      lineHeight: "25px",
                      background: "green",
                    }
                  : {
                      border: "1px solid #1ea83c",
                      textAlign: "center",
                      lineHeight: "25px",
                    }
              }
              onClick={handleSeatClick(seat)}
            >
              {seat.SeatType === "Social Distancing" ? "❌" : seat.SeatNumber}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Seats;
