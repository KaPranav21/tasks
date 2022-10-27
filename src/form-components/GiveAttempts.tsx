import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [userAttLeft, setUserAttLeft] = useState<number>(3);
    const [reqAttempts, setUserAttReq] = useState<string>("0");

    const tmpPReqAtt = parseInt(reqAttempts) || 0;

    return (
        <div>
            <h3>Give Attempts</h3>
            <h4>Attempts : {userAttLeft}</h4>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(tmp: React.ChangeEvent<HTMLInputElement>) =>
                        setUserAttReq(tmp.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => setUserAttLeft(tmpPReqAtt + userAttLeft)}
                >
                    Gain
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setUserAttLeft(userAttLeft - 1)}
                    disabled={userAttLeft == 0}
                >
                    Use an Attempt
                </Button>
            </div>
        </div>
    );
}
