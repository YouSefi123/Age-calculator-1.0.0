import React, { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("");
  const [operator, setOperator] = useState("");
  const [first, setFirst] = useState("");

  function handlePlus() {
    setFirst(display);
    setDisplay("");
    setOperator("+");
  }

  function handleMinus() {
    setFirst(display);
    setDisplay("");
    setOperator("-");
  }

  function handleMultiple() {
    setFirst(display);
    setDisplay("");
    setOperator("*");
  }

  function handleDevide() {
    setFirst(display);
    setDisplay("");
    setOperator("/");
  }

  function handleEqual() {
    if (operator === "+") {
      const result = Number(first) + Number(display);
      setDisplay(String(result));
    } else if (operator === "-") {
      const result = Number(first) - Number(display);
      setDisplay(String(result));
    } else if (operator === "*") {
      const result = Number(first) * Number(display);
      setDisplay(String(result));
    } else if (operator === "/") {
      const result = Number(first) / Number(display);
      setDisplay(String(result));
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950 p-5">
      <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-slate-800/80 p-6 shadow-2xl shadow-black/40">
        <h2 className="mb-6 text-center text-2xl font-bold tracking-wider text-white">
          Calculator
        </h2>

        <input
          type="text"
          placeholder="0"
          value={display}
          onChange={(e) => setDisplay(e.target.value)}
          className="mb-6 h-20 w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 text-right text-4xl font-semibold text-white outline-none transition focus:border-indigo-500"
        />

        <div className="grid grid-cols-4 gap-3 text-white">
          <button
            onClick={() => setDisplay(display + "7")}
            className="calc-btn"
          >
            7
          </button>
          <button
            onClick={() => setDisplay(display + "8")}
            className="calc-btn"
          >
            8
          </button>
          <button
            onClick={() => setDisplay(display + "9")}
            className="calc-btn"
          >
            9
          </button>
          <button
            onClick={handlePlus}
            className="calc-btn bg-indigo-600 hover:bg-indigo-500"
          >
            +
          </button>

          <button
            onClick={() => setDisplay(display + "4")}
            className="calc-btn"
          >
            4
          </button>
          <button
            onClick={() => setDisplay(display + "5")}
            className="calc-btn"
          >
            5
          </button>
          <button
            onClick={() => setDisplay(display + "6")}
            className="calc-btn"
          >
            6
          </button>
          <button
            onClick={handleMinus}
            className="calc-btn bg-indigo-600 hover:bg-indigo-500"
          >
            -
          </button>

          <button
            onClick={() => setDisplay(display + "1")}
            className="calc-btn"
          >
            1
          </button>
          <button
            onClick={() => setDisplay(display + "2")}
            className="calc-btn"
          >
            2
          </button>
          <button
            onClick={() => setDisplay(display + "3")}
            className="calc-btn"
          >
            3
          </button>
          <button
            onClick={handleMultiple}
            className="calc-btn bg-indigo-600 hover:bg-indigo-500"
          >
            ×
          </button>

          <button
            onClick={() => setDisplay(display + "0")}
            className="calc-btn"
          >
            0
          </button>
          <button
            onClick={handleDevide}
            className="calc-btn bg-indigo-600 hover:bg-indigo-500"
          >
            ÷
          </button>
          <button
            onClick={() => setDisplay("")}
            className="calc-btn bg-rose-600 hover:bg-rose-500"
          >
            C
          </button>
          <button
            onClick={handleEqual}
            className="calc-btn bg-purple-600 hover:bg-purple-500"
          >
            =
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Designed By Yousefi
        </p>
      </div>
    </main>
  );
}
