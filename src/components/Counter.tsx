import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): JSX.Element {
    const [val, setValue] = useState<number>(0);
    return (
        <span>
            <Button onClick={() => setValue(1 + val)}>Add One</Button>
            to {val}.
        </span>
    );
}
