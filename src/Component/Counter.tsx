import React, { useState } from "react";

interface User {
    name?: string,
    job?: string
}

const Counter = () => {
  // Explicitly means you have been define the value
  const [counter, setCounter] = useState(0);
  // Implicitly
  const [user, setUser] = useState<User | null>(null);

  const handleIncrease = (): void => {
    setCounter(counter + 1);
  };
  const handleUserSubmit = (e): void => {
    e.preventDefault();
    const userData = {
      name: "Anirban",
      job: "web developer",
    };
    setUser(userData);
  };
  return (
    <div>
      <h1>This is counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

export default Counter;
