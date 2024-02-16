import React from "react";

const Calculator = () => {
  const [result, setResult] = React.useState(0);
  const [input, setInput] = React.useState("");

  const calculate = () => {
    let total = 0;
    try {
      total = eval(input);
    } catch (error) {
      alert("Invalid Expression");
    }
    setResult(total);
    setInput(total.toString());
  };

  return (
    <main>
      <h1>My Calculator</h1>
      <div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="sm"
            onClick={() => {
              setInput("");
            }}
          >
            C
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setInput(input + 7);
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              setInput(input + 8);
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              setInput(input + 9);
            }}
          >
            9
          </button>
          <button
            className="sm"
            onClick={() => {
              setInput(input + "+");
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setInput(input + 4);
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              setInput(input + 5);
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              setInput(input + 6);
            }}
          >
            6
          </button>
          <button
            className="sm"
            onClick={() => {
              setInput(input + "-");
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setInput(input + 1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setInput(input + 2);
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              setInput(input + 3);
            }}
          >
            3
          </button>
          <button
            className="sm"
            onClick={() => {
              setInput(input + "*");
            }}
          >
            *
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setInput(input + ".");
            }}
          >
            .
          </button>
          <button
            onClick={() => {
              setInput(input + 0);
            }}
          >
            0
          </button>

          <button onClick={calculate}>=</button>
          <button
            className="sm"
            onClick={() => {
              setInput(input + "/");
            }}
          >
            /
          </button>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
