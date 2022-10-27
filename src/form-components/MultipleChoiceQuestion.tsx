// import React, { useState } from "react";

// export function MultipleChoiceQuestion({
//     options,
//     expectedAnswer
// }: {
//     options: string[];
//     expectedAnswer: string;
// }): JSX.Element {
//     return (
//         <div>
//             <h3>Multiple Choice Question</h3>
//         </div>
//     );
// }

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >;

    const [currChoice, setCurrChoice] = useState<string>(options[0]);

    function setterCurrChoice(tmp: ChangeEvent) {
        setCurrChoice(tmp.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="formSelectOptions">
                    <Form.Label>Which of these is correct?</Form.Label>
                    <Form.Select value={currChoice} onChange={setterCurrChoice}>
                        {options.map((curr: string) => (
                            <option key={curr} value={curr}>
                                {curr}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <span>{expectedAnswer != currChoice ? "❌" : "✔️"}</span>
        </div>
    );
}
