import React, { useState } from "react";
import "./App.css";

function App() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [input, setInput] = useState(0);

  const handleChange = (e) => {
    // here we need to chek the truty value  for my ref
    setInput(+(Boolean(e.target.value) ? e.target.value : 0));
  };

  return (
    <div className="App">
      <h1>Star Rating</h1>
      {new Array(input).fill().map((start, index) => {
        //index is start from 0
        const currentIndex = index + 1 ;

        return (
          <span
            key={index}
            style={{
              color: currentIndex <= (hover || rating) ? "red" : "green",
              cursor: "pointer",
              fontSize: "50px",
            }}
            onClick={() => setRating(currentIndex)}
            onMouseEnter={() => setHover(currentIndex)}
            onMouseLeave={() => setHover(null)}
          >
            &#9733;
          </span>
        );
      })}
      <div>
        <h3>Enter Number</h3>
        <input type="number" value={input} onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
