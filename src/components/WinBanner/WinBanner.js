import React from "react";

import Banner from "../Banner";

function WinBanner({ count, restart }) {
    return (
        <Banner
            status={"happy"}
            action={restart}
            actionText={"Wanna play again?"}
        >
            <p>
                <strong>Congratulations!</strong> Got it in{" "}
                <strong>{count === 1 ? "a guess" : `${count} guesses`}</strong>.
            </p>
        </Banner>
    );
}

export default WinBanner;
