import React from "react"
import designblob_1 from "../images/startblob1.png"
import designblob_2 from "../images/startblob2.png"
export default function Start(props) {
    return (
      <>
        <div className="start--screen">
          <h1 className="start--title">Quizzical</h1>
          <h3 className="start--description">Quiz Generator that generates 5 questions in the form of a quiz using Open Trivia DB</h3>
          <button className="start--button" onClick={
            props.handleClick
            }
            >Start Quiz</button>
          <img src={designblob_1} alt="design" className="designblob__1"/>
          <img src={designblob_2} alt="design" className="designblob__2"/>
        </div>
      </>
    );
  }