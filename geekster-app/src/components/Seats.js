import React from "react";
import styles from "./seats.module.css";

function Seats({ handleSeatSelect, seats }) {
  const handleSeatClick = (seat) => () => {
    handleSeatSelect(seat);
  };

  return (
    <div className={styles.seats}>
      {seats.map((seat) => {
        return (
          <div>
            <button
              style={
                seat.SeatType === "Booked / Held"
                  ? {
                      backgroundColor: "lightgrey",
                      borderColor: "#1ea83c",
                      pointerEvents: "none",
                      lineHeight: "25px",
                    }
                  : seat.SeatType === "Gangway"
                  ? {
                      backgroundColor: "grey",
                      borderColor: "grey",
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
                  : {
                      border: "1px solid #1ea83c",
                      textAlign: "center",
                      lineHeight: "25px",
                    }
              }
              onClick={handleSeatClick(seat)}
            >
              {seat.SeatNumber}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Seats;
