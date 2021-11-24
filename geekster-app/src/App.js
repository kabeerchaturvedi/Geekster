import SeatBooking from "./components/SeatBooking";
import TicketSelection from "./components/TicketSelection";
import { useState } from "react";

function App() {
  const [selectedNumberOfSeats, setSelectedNumberOfSeats] = useState(0);

  return (
    <div>
      {selectedNumberOfSeats > 0 ? (
        <SeatBooking selectedNumberOfSeats={selectedNumberOfSeats} />
      ) : (
        <TicketSelection setSelectedNumberOfSeats={setSelectedNumberOfSeats} />
      )}
    </div>
  );
}

export default App;
