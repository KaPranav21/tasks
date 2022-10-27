// import React, { useState } from "react";

// export function ChangeColor(): JSX.Element {
//     return (
//         <div>
//             <h3>Change Color</h3>
//         </div>
//     );
// }

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >;

    const COLORS = [
        "green",
        "red",
        "blue",
        "brown",
        "yellow",
        "black",
        "gray",
        "purple"
    ];
    const default_color = COLORS[0];
    const [currCol, setCurrCol] = useState<string>(default_color);

    function setterCurrCol(tmp: ChangeEvent) {
        setCurrCol(tmp.target.value);
    }

    return (
        <div>
            <h2>Change Color</h2>
            <div>
                {COLORS.map((tmpCol: string) => (
                    <Form.Check
                        inline
                        label={tmpCol}
                        key={tmpCol}
                        type="radio"
                        value={tmpCol}
                        id="color-options-radio-buttons"
                        name="colors"
                        checked={tmpCol == currCol}
                        style={{ backgroundColor: tmpCol }}
                        onChange={setterCurrCol}
                    ></Form.Check>
                ))}
            </div>
            <div>
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: currCol }}
                >
                    <h5>You have chosen</h5>
                    {currCol}
                </span>
            </div>
        </div>
    );
}
