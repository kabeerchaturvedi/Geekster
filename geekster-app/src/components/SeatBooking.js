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
        SeatType: "Social Distancing",
        SeatNumber: "02",
        SeatRanking: false,
      },
      {
        AreaID: "A",
        SeatType: "Booked / Held",
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
        SeatType: "Booked / Held",
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
  const [selectedSeats, setSelectedSeats] = useState(0);
  const [updatedSeatsData, setUpdatedSeatsData] = useState(seatsData);

  const handleSeatSelect = (rowId) => (seat) => {
    let selectedRowData = updatedSeatsData.find((item) => {
      return item.RowId == rowId;
    });
    let found = false;
    let notBlocked = true;
    let newSelectedSeats = selectedRowData.seats
      .filter((item) => {
        //seatType == gangway
        return item.SeatType !== "Gangway";
      })
      .filter((item) => {
        return item.SeatType !== "Social Distancing";
      })
      .filter((item) => {
        console.log(item, "ITEEEMMM");
        if (item.SeatType == seat.SeatType) {
          found = true;
        }
        if (found && item.SeatType === "Booked / Held") {
          notBlocked = false;
        }
        return found && notBlocked;
      })
      .slice(0, selectedNumberOfSeats)
      .map((item) => {
        return { ...item, SeatType: "Currently Selected" };
      });
    setSelectedSeats(newSelectedSeats);
    let newUpdatedRowData = {
      ...selectedRowData,
      seats: selectedRowData.seats.map((item) => {
        return (
          newSelectedSeats.find((seat) => seat.SeatType === item.SeatType) ||
          item
        );
      }),
    };
    let newUpdatedData = updatedSeatsData.map((item) => {
      return item.RowId == rowId ? newUpdatedRowData : item;
    });
    setUpdatedSeatsData(newUpdatedData);
  };
  return (
    <div className={styles.main}>
      <h2>Seat Booking</h2>
      {updatedSeatsData.map((data) => {
        return (
          <div className={styles.seatbooking}>
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
