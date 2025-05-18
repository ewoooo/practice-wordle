import React from "react";

import Banner from "../Banner";

function WinBanner({ count }) {
  return (
    <Banner status={"happy"}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{count === 1 ? "a guess" : `${count} guesses`}</strong>.
      </p>
    </Banner>
  );
}

export default WinBanner;
