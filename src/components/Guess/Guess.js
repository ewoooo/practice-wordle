import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ value, status }) {
  return <div className={`cell ${status}`}>{value}</div>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  return (
    <div className="guess">
      {range(5).map((num) => (
        <Cell
          value={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
          key={num}
        />
      ))}
    </div>
  );
}

export default Guess;
