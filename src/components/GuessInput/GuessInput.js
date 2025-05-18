import React from "react";

function GuessInput({ handleAddGuess, gameStatus }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleAddGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        maxLength={5}
        minLength={5}
        value={guess}
        disabled={gameStatus !== "running"}
        pattern="[a-zA-z]{5}"
        title="Only english alphabet is available."
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
