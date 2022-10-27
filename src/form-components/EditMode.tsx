import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

    const [isEdit, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function setterUserName(tmp: ChangeEvent) {
        setUserName(tmp.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="switch-edit-mode"
                    label="Settings"
                    checked={isEdit}
                    onChange={() => setEditMode(!isEdit)}
                ></Form.Check>
                {isEdit && (
                    <Form.Check
                        type="switch"
                        id="switch-student"
                        label="Are You a Student?"
                        checked={isStudent}
                        onChange={() => setIsStudent(!isStudent)}
                    ></Form.Check>
                )}
            </div>
            <div>
                {isEdit && (
                    <Form.Group controlId="formStudentName">
                        <Form.Label>
                            <h6>User name is :</h6>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={setterUserName}
                        ></Form.Control>
                    </Form.Group>
                )}
                {userName} {isStudent ? "is" : "is not"} {"a student"}
            </div>
        </div>
    );
}
