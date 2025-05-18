import React from "react";

import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import WinBanner from "../WinBanner";
import LooseBanner from "../LooseBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  console.log({ answer });

  function handleAddGuess(entry) {
    const nextGuesses = [...guesses, entry];
    const count = nextGuesses.length;
    setGuesses(nextGuesses);

    if (entry.toUpperCase() === answer) setGameStatus("won");
    if (count >= NUM_OF_GUESSES_ALLOWED) setGameStatus("lost");
  }

  function handleRestart() {
    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
    setGuesses([]);
    setGameStatus("running");
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && (
        <WinBanner count={guesses.length} restart={handleRestart} />
      )}
      {gameStatus === "lost" && (
        <LooseBanner answer={answer} restart={handleRestart} />
      )}
    </>
  );
}

export default Game;
