import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, numAttempts] = useState<number>(4);
    const [setProg, setProgress] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => (numAttempts(attempts - 1), setProgress(true))}
                disabled={setProg == true || attempts == 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setProgress(false)}
                disabled={setProg == false}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => numAttempts(attempts + 1)}
                disabled={setProg == true}
            >
                Mulligan
            </Button>
            Number of Attempts left: {attempts}
        </div>
    );
}
