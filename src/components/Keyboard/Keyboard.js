import React from "react";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function statusByLetters(validatedGuesses) {
  // [{letter: A, status: correct}, ...]
  const statusObj = {};
  const allLetters = validatedGuesses.flat();

  allLetters.forEach(({ letter, status }) => {
    // initiate the status on rank
    const currentLetterStatus = statusObj[letter];

    if (currentLetterStatus === undefined) {
      statusObj[letter] = status;
      return;
    }

    const RANKS = {
      correct: 1,
      misplaced: 2,
      incorrect: 3,
    };

    // previous {letter: A, status: correct}
    const currentRank = RANKS[currentLetterStatus];

    // next {letter: A, status: misplaced}
    const nextRank = RANKS[status];

    if (currentRank > nextRank) {
      statusObj[letter] = status;
    }
  });

  return statusObj;
}

function Keyboard({ validatedGuesses }) {
  const vlidatedLetters = statusByLetters(validatedGuesses);
  return (
    <div className="keyboard">
      {ROWS.map((letters, index) => (
        <div className="keyboard-rows" key={`keyboard-${index}`}>
          {letters.map((letter) => (
            <div className={`key ${vlidatedLetters[letter]}`} key={letter}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
