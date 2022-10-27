import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function funcCondition(left: number, right: number) {
    if (left == right) {
        if (left == 1 && right == 1) {
            return "Lose";
        }
        return "Win";
    }
}
export function TwoDice(): JSX.Element {
    const [left, setDiceA] = useState<number>(2);
    const [right, setDiceB] = useState<number>(3);

    return (
        <div>
            <Button onClick={() => setDiceA(d6())}>Roll Left</Button>
            <Button onClick={() => setDiceB(d6())}>Roll Right</Button>
            <span data-testid="left-die">Dice A = {left}, </span>
            <span data-testid="right-die">Dice B = {right}, </span>
            <span>{funcCondition(left, right)}</span>
        </div>
    );
}
