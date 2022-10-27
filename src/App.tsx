import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript BY PRANAV
            </header>
            <h1>This page belongs to Pranav Kamath</h1>
            <img
                src={
                    "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Patrick-Star.SpongeBob-SquarePants.webp"
                }
                alt="The great evildoers of Sacramento, California :0"
            />
            <ol>
                <li> Wake up</li>
                <li> Use the bathroom</li>
                <li> Go back to sleep</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p></p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. pranav edited this file. 3. hello world
            </p>
            <Container>
                <div className="App">
                    <Row>
                        <Col>
                            <p className="App-columns">
                                Why is this so Hard to see :({" "}
                            </p>
                        </Col>
                        <Col>
                            <p className="App-columns">
                                Like my dear old Grandmother used to say, when
                                gives you lemons, make sure you never.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="App-columns">
                                Why is this so Easy to see :){" "}
                            </p>
                        </Col>
                        <Col>
                            <p className="App-columns">
                                Like my dear old Grandfather used to say, when
                                gives you lemons, make sure you always.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
