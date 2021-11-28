import React from "react";
import Seats from "./Seats";
import styles from "./seatBooking.module.css";
import { useState } from "react";

const seatsData = [
  {
    RowId: "A",
    RowNumber: "A",
    seats: [
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Social Distancing",
        SeatNumber: "01",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "02",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Social Distancing",
        SeatNumber: "03",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "04",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
    ],
  },
  {
    RowId: "B",
    RowNumber: "B",
    seats: [
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Social Distancing",
        SeatNumber: "01",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Booked / Held",
        SeatNumber: "02",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Social Distancing",
        SeatNumber: "03",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Booked / Held",
        SeatNumber: "04",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Social Distancing",
        SeatNumber: "05",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Booked / Held",
        SeatNumber: "06",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
    ],
  },
  {
    RowId: "C",
    RowNumber: "C",
    seats: [
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Booked / Held",
        SeatNumber: "01",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "02",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "03",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "04",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Booked / Held",
        SeatNumber: "05",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "06",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
    ],
  },
  {
    RowId: "D",
    RowNumber: "D",
    seats: [
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Social Distancing",
        SeatNumber: "01",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "02",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Social Distancing",
        SeatNumber: "03",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "04",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Social Distancing",
        SeatNumber: "05",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "06",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
    ],
  },
  {
    RowId: "E",
    RowNumber: "E",
    seats: [
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "01",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Social Distancing",
        SeatNumber: "02",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "03",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Social Distancing",
        SeatNumber: "04",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "05",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Social Distancing",
        SeatNumber: "06",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
    ],
  },
  {
    RowId: "F",
    RowNumber: "F",
    seats: [
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Social Distancing",
        SeatNumber: "01",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "02",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Social Distancing",
        SeatNumber: "03",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "04",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Social Distancing",
        SeatNumber: "05",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Available",
        SeatNumber: "06",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Gangway",
        SeatNumber: "00",
        SeatRanking: false,
      },
    ],
  },
];

const SeatBooking = ({ selectedNumberOfSeats }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [updatedSeatsData, setUpdatedSeatsData] = useState(seatsData);

  const handleSeatSelect = (rowId) => (seat) => {
    let lastUpdatedSeatsData =
      selectedSeats.length === selectedNumberOfSeats
        ? seatsData
        : [...updatedSeatsData];
    let selectedRowData = lastUpdatedSeatsData.find((item) => {
      return item.RowId == rowId;
    });
    let found = false;
    let notBlocked = true;
    let newSelectedSeats = selectedRowData.seats
      .filter((item) => {
        if (item.SeatNumber === seat.SeatNumber) {
          found = true;
        }
        if (
          (found && item.SeatType === "Booked / Held") ||
          (found && item.SeatType === "Gangway") ||
          (found && item.SeatType === "Social Distancing")
        ) {
          notBlocked = false;
        }
        return found && notBlocked;
      })
      .slice(
        0,
        selectedSeats.length === selectedNumberOfSeats
          ? selectedNumberOfSeats
          : selectedNumberOfSeats - selectedSeats.length
      )
      .map((item) => {
        return { ...item, SeatType: "Currently Selected" };
      });
    setSelectedSeats(
      selectedSeats.length === selectedNumberOfSeats
        ? newSelectedSeats
        : [...selectedSeats, ...newSelectedSeats]
    );
    let newUpdatedRowData = {
      ...selectedRowData,
      seats: selectedRowData.seats.map((item) => {
        return (
          newSelectedSeats.find(
            (seat) => seat.SeatNumber === item.SeatNumber
          ) || item
        );
      }),
    };
    let newUpdatedData = lastUpdatedSeatsData.map((item) => {
      return item.RowId == rowId ? newUpdatedRowData : item;
    });
    setUpdatedSeatsData(newUpdatedData);
  };
  function handlePayment() {
    alert("Thanks for booking");
    window.location.reload();
  }
  return (
    <div className={styles.main}>
      <h2>Seat Booking</h2>
      {selectedSeats.length === selectedNumberOfSeats ? (
        <div className={styles.payment}>
          <button className={styles.payment_btn} onClick={handlePayment}>
            Pay Rs. {(selectedNumberOfSeats * 250).toFixed(2)}
          </button>
        </div>
      ) : null}

      {updatedSeatsData.map((data) => {
        return (
          <div className={styles.seatbooking} key={data.RowId}>
            <div className={styles.rows}>{data.RowId}</div>
            <div className={styles.seats}>
              <Seats
                className={styles.seats}
                seats={data.seats}
                handleSeatSelect={handleSeatSelect(data.RowId)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SeatBooking;
