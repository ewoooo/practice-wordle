import React from "react";

import Banner from "../Banner";

function LooseBanner({ answer, restart }) {
  return (
    <Banner status={"sad"} action={restart} actionText={"Retry?"}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LooseBanner;
