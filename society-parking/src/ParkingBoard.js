
import React, { useState } from "react";

function ParkingBoard() {
  const [cars, setCars] = useState(0);
  const [bikes, setBikes] = useState(0);

  const [carEntries, setCarEntries] = useState(0);
  const [bikeEntries, setBikeEntries] = useState(0);

  const handleCarIn = () => {
    setCars(prev => prev + 1);
    setCarEntries(prev => prev + 1);
  };

  const handleCarOut = () => {
    setCars(prev => prev - 1);
  };

  const handleBikeIn = () => {
    setBikes(prev => prev + 1);
    setBikeEntries(prev => prev + 1);
  };

  const handleBikeOut = () => {
    setBikes(prev => prev - 1);
  };

  const feeCollected = carEntries * 20 + bikeEntries * 10;

  const handleReset = () => {
    setCars(0);
    setBikes(0);
    setCarEntries(0);
    setBikeEntries(0);
  };

  return (
    <div>
      <h1>Society Parking Management</h1>

      <h2>Car Parking</h2>

      <p>Cars parked: {cars}</p>
      <p>Free car slots: {20 - cars}</p>

      <button onClick={handleCarIn} disabled={cars === 20}>
        Car In
      </button>

      <button onClick={handleCarOut} disabled={cars === 0}>
        Car Out
      </button>

      <hr />

      <h2>Bike Parking</h2>

      <p>Bikes parked: {bikes}</p>
      <p>Free bike slots: {30 - bikes}</p>

      <button onClick={handleBikeIn} disabled={bikes === 30}>
        Bike In
      </button>

      <button onClick={handleBikeOut} disabled={bikes === 0}>
        Bike Out
      </button>

      <hr />

      <h2>Today's Collection</h2>

      <p>Car Entries: {carEntries}</p>
      <p>Bike Entries: {bikeEntries}</p>
      <h3>Fee Collected: ₹{feeCollected}</h3>

      <button onClick={handleReset}>Reset Day</button>
    </div>
  );
}

export default ParkingBoard;
