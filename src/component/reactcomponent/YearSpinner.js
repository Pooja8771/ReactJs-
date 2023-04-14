import React, { useState } from 'react';

function YearSpinner({ defaultValue }) {
  const [year, setYear] = useState(defaultValue);

  const handleDecrement = () => {
    setYear((prevYear) => prevYear - 1);
  };

  const handleIncrement = () => {
    setYear((prevYear) => prevYear + 1);
  };

  return (
    <div>
      <button onClick={handleDecrement}>+</button>
      <input type="number" value={year} disabled />
      <button onClick={handleIncrement}>-</button>
    </div>
  );
}

export default YearSpinner;
