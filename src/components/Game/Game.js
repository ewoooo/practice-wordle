import React from "react";

import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import WinBanner from "../WinBanner";
import LooseBanner from "../LooseBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleAddGuess(entry) {
    const nextGuesses = [...guesses, entry];
    const count = nextGuesses.length;
    setGuesses(nextGuesses);

    if (entry.toUpperCase() === answer) setGameStatus("won");
    if (count >= NUM_OF_GUESSES_ALLOWED) setGameStatus("lost");
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && <WinBanner count={guesses.length} />}
      {gameStatus === "lost" && <LooseBanner answer={answer} />}
    </>
  );
}

export default Game;
