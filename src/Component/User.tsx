import React, { FC } from "react";

interface Props {
  name: string,
  age: number,
  addUser: () => void 
}

const User: FC<Props> = ({ name, age, addUser }) => {
  return (
    <div>
      <h1>Hello from: {name}</h1>
      <h1>Age: {age}</h1>
      <button onClick={addUser}>Add me</button>
    </div>
  );
};

export default User;
