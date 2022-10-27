import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RecordAlph(holiday: string) {
    if (holiday == "💃🏻") {
        return "✨";
    } else if (holiday == "✨") {
        return "☘️";
    } else if (holiday == "☘️") {
        return "🦃";
    } else if (holiday == "🦃") {
        return "💟";
    } else {
        return "💃🏻";
    }
}

export function RecordDate(holiday: string) {
    if (holiday == "✨") {
        return "💟";
    } else if (holiday == "💟") {
        return "☘️";
    } else if (holiday == "☘️") {
        return "💃🏻";
    } else if (holiday == "💃🏻") {
        return "🦃";
    } else {
        return "✨";
    }
}
export function RecordNumer(holiday: string) {
    return holiday;
}

//✨☘️💟🦃💃🏻
export function CycleHoliday(): JSX.Element {
    const [name1, setHoliday] = useState<string>("✨");
    return (
        <div>
            <Button onClick={() => setHoliday(RecordAlph(name1))}>
                Alphabet
            </Button>
            <Button onClick={() => setHoliday(RecordDate(name1))}>Year</Button>
            <span>Holiday: {name1} </span>
        </div>
    );
}
