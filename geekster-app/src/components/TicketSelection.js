import React from "react";
import { useState } from "react";

const TicketSelection = ({ setSelectedNumberOfSeats }) => {
  const [numberOfSeats, setNumberOfSeats] = useState('');

  function handleInput(event) {
    setNumberOfSeats(parseInt(event.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSelectedNumberOfSeats(numberOfSeats);
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h3>Ticket Selection </h3>

        <label>
          <p>Number of Tickets</p>
          <input
            type="number"
            name="ticket"
            id="ticket"
            autoComplete="off"
            value={numberOfSeats}
            onChange={handleInput}
          />
        </label>
      </form>
    </div>
  );
};

export default TicketSelection;
