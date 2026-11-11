import React, { useState } from "react";

export default function App() {
  const [birthdayDate, setBirthdayDate] = useState("");
  const [show, setShow] = useState(true);
  const [showFinal, setShowFinal] = useState("");

  const year = new Date();
  const result = year.getFullYear();

  const myAge = new Date(birthdayDate);
  const oldAge = myAge.getFullYear();

  function handleCalc() {
    setShow(false);
    const total = result - Number(oldAge);
    setShowFinal(String(total));
  }

  return (
    <div className="flex bg-gray-500 min-h-screen flex-col justify-center items-center">
      <div className="text-center bg-white p-20 rounded-2xl space-y-4">
        <h1 className="text-gray-500 text-4xl font-bold">Age Calculation</h1>

        <p className="text-start">Enter your date of birth:</p>

        <div className="flex flex-col">
          <div className="">
            <input
              type="date"
              value={birthdayDate}
              onChange={(e) => setBirthdayDate(e.target.value)}
              className="border rounded-sm w-70 p-2"
            />
          </div>
          <div className="text-start bg-blue-400 mt-4 text-white w-fit p-2 rounded-sm">
            <button onClick={handleCalc}>Calculate Age</button>
          </div>
        </div>

        {show && (
          <h2 className="text-red-500 font-semibold">No Date entered!</h2>
        )}
        <h1>Your age: {showFinal}</h1>
      </div>
    </div>
  );
}
