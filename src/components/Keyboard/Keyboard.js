import React from "react";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

// function statusByLetters(validatedGuesses) {
//   // [{letter: A, status: correct}, ...]
//   const statusObj = {};
//   const allLetters = validatedGuesses.flat();

//   allLetters.forEach(({ letter, status }) => {
//     statusObj[letter] = status;
//   });

//   const RANKS = {
//     correct: 1,
//     misplaced: 2,
//     incorrect: 3,
//   };

//   const currentRank =

//   // previous {letter: A, status: correct}
//   // next {letter: A, status: misplaced}

//   return statusObj;
//   // {A: correct}
// }

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
