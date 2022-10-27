import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function changeType(): void {
        if (type == "multiple_choice_question") {
            setType("short_answer_question");
            <span> Short Answer </span>;
        } else if (type == "short_answer_question") {
            setType("multiple_choice_question");
            <span> Multiple Choice </span>;
        }
    }

    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            <div>
                {type == "multiple_choice_question" ? (
                    <span>Multiple Choice</span>
                ) : (
                    <span>Short Answer</span>
                )}
            </div>
        </div>
    );
}
